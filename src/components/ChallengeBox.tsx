import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountDonw } = useContext(CountdownContext);

  function handleChallengeSucceded(){
    completeChallenge();
    resetCountDonw();
  }

  function handleChallengeFailed(){
    resetChallenge();
    resetCountDonw();
  }

  return(
      <div className={styles.challengeBoxContainer}>
        { activeChallenge ? (
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>

            <main>
              <img src={`icons/${activeChallenge.type}.svg`}/>
              <strong>Novo desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>

            <footer>
              <button 
                type="button"
                className={styles.challengeFailedButton}
                onClick={handleChallengeFailed}
              >
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={handleChallengeSucceded}
              >
                Completei
              </button>
            </footer>

          </div>
        ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicialize um ciclo para receber um desafio.</strong>
            <p>
              <img src="icons/level-up.svg" alt="level"/>
              Avance de level completando desafios
            </p>
          </div>
        )}
      </div>
  )
}