import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown(){
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountDonw(){
      setIsActive(true);
    }

    function resetCountDonw(){
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setTime(0.05 * 60);
    }

    useEffect(() => {
      if(isActive && time > 0){
        countdownTimeout = setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      } else if(isActive && time === 0){
        setHasFinished(true);
        setIsActive(false);
      }
    },  [isActive, time]);

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