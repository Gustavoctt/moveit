import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/CountDown.module.css';


export function CountDown(){
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountDonw, 
    resetCountDonw 
  } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
              <button 
                disabled
                className={styles.countDonwButton}
              >
                Ciclo encerrado
              </button>
            ): (
              <>
                { isActive ? (
                  <button 
                    type="button" 
                    className={`${styles.countDonwButton} ${styles.countDonwButtonActive}`}
                    onClick={resetCountDonw}
                  >
                    Abandonar um ciclo
                  </button>
                ) : (
                  <button 
                  type="button" 
                  className={styles.countDonwButton}
                  onClick={startCountDonw}
                  >
                    Iniciar um ciclo
                  </button>
                )}
              </>
            )}
        </div>
    );
}