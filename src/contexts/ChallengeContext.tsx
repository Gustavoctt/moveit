import { createContext, ReactNode, useState } from "react";
import challenges from '../../challenges.json';

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData{
  level: number;
  currentExperience: number; 
  challengesCompleted: number; 
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children } : ChallengeProviderProps){
    const [ level, setLevel ] = useState(1);
    const [ currentExperience, setCurrentExperience ] = useState(0);
    const [ challengesCompleted, setChallengesCompleted ] = useState(0);

    const [ activeChallenge, setActiveChallenge ] = useState(null);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const randonChallengeIndex = Math.floor(Math.random() * challenges.length);

        const challenge = challenges[randonChallengeIndex];

        setActiveChallenge(challenge);
    }

    return(
        <ChallengeContext.Provider 
          value={{ 
            level, 
            currentExperience, 
            challengesCompleted, 
            levelUp,
            startNewChallenge,
            activeChallenge,
          }}
        >
            {children}
        </ChallengeContext.Provider>
    )
}