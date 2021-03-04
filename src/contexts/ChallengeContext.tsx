import { createContext, ReactNode, useEffect, useState } from "react";
import Cokkies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from "../components/LevelUpModal";

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData{
  level: number;
  currentExperience: number; 
  experienceToNextLevel: number;
  challengesCompleted: number; 
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children, ...rest } : ChallengeProviderProps){
    const [ level, setLevel ] = useState(rest.level ?? 1);
    const [ currentExperience, setCurrentExperience ] = useState(rest.currentExperience ?? 0);
    const [ challengesCompleted, setChallengesCompleted ] = useState(rest.challengesCompleted ?? 0);

    const [ activeChallenge, setActiveChallenge ] = useState(null);
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
      Notification.requestPermission();
    }, []);

    useEffect(() => {
      Cokkies.set('level', String(level));
      Cokkies.set('currentExperience', String(currentExperience));
      Cokkies.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted])

    function levelUp(){
      setLevel(level + 1);
      setIsLevelUpModalOpen(true);
    }

    function closeLevelUpModal(){
      setIsLevelUpModalOpen(false)
    }

    function startNewChallenge(){
      const randonChallengeIndex = Math.floor(Math.random() * challenges.length);

      const challenge = challenges[randonChallengeIndex];

      setActiveChallenge(challenge);

      new Audio('/notification.mp3').play();

      if(Notification.permission === 'granted'){
        new Notification('Novo desafio', {
          body: `Valendo ${challenge.amount} xp!`
        })
      }

    }

    function resetChallenge(){
      setActiveChallenge(null);
    }

    function completeChallenge(){
      if (!activeChallenge){
        return;
      }

      const { amount } = activeChallenge;

      let finalExperience = currentExperience + amount;

      if(finalExperience >= experienceToNextLevel){
        finalExperience = finalExperience - experienceToNextLevel;
        levelUp();
      }

      setCurrentExperience(finalExperience);
      setActiveChallenge(null);
      setChallengesCompleted(challengesCompleted + 1);
    }

    return(
        <ChallengeContext.Provider 
          value={{ 
            level, 
            currentExperience,
            experienceToNextLevel, 
            challengesCompleted, 
            activeChallenge,
            levelUp,
            startNewChallenge,
            resetChallenge,
            completeChallenge,
            closeLevelUpModal,
          }}
        >
          { isLevelUpModalOpen && <LevelUpModal level={level} completedChallanges={challengesCompleted}
            currentExperience={currentExperience}/>}
          {children}
        </ChallengeContext.Provider>
    )
}