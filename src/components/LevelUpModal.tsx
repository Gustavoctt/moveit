import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import { FaTwitter } from 'react-icons/fa';
import styles from '../styles/components/LevelUpModal.module.css';

interface LevelUpModalProps{
  level: number;
  completedChallanges: number;
  currentExperience: number;
}

export function LevelUpModal({ 
    completedChallanges,
    currentExperience,
    level: currentLevel } : LevelUpModalProps){

    const { level, closeLevelUpModal } = useContext(ChallengeContext);

    let totalExperience = 0;

    for(let i = 1; i <= currentLevel - 1; i++){
      totalExperience += Math.pow((i + 1)*4, 2)
    }

    totalExperience += currentExperience;

    return(
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <header>{ level }</header>

            <strong>Parabéns</strong>
            <p>Você alcaçou um novo level.</p>

            <button 
              type="button"
              onClick={closeLevelUpModal}
            >
              <img src="/icons/close.svg" alt="Fechar"/>
            </button>
          </div>

          <a 
            href={`https://twitter.com/intent/tweet?text=http://localhost:3000/api/${level}/${completedChallanges}/${totalExperience}`}
            className={styles.share}
          >
            Compartilhar no Twitter <FaTwitter size={16} style={{marginLeft: '0.5rem'}} />
          </a>
        </div>
      </div>
    )
}