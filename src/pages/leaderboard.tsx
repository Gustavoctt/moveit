import Head from "next/head";

import styles from '../styles/pages/Leaderboard.module.css';
import { Sidebar } from "../components/Sidebar";


export default function Leaderboard(){
  return(
    <>  
      <div className={styles.container}>
        <Head>
            <title>Leaderboard | move.it</title>
        </Head>
        
        <Sidebar page="leaderboard"/>
        
        <div className={styles.containerRight}>

        <h1>Leaderboard</h1>

        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Usuário</th>
                        <th>Desafios</th>
                        <th>Experiência</th>
                    </tr>
                </thead>
                <tbody>
                  <tr className={styles.cardContainer}>
                    <td className={styles.rank}>1</td>
                    <td className={styles.user}>
                        <img src="https://github.com/Gustavoctt.png" alt="Gustavo Tartare" />
                        <div>
                            <strong>Gustavo Tartare</strong>
                            <p><img src="/icons/level.svg" alt="level"/> Level 1</p>
                        </div>

                    </td>
                    <td className={styles.challengesCompleted}><span>6</span> Completos</td>
                    <td className={styles.experience}><span>546546</span> xp</td>
                  </tr>

                  <tr className={styles.cardContainer}>
                    <td className={styles.rank}>2</td>
                    <td className={styles.user}>
                        <img src="https://github.com/Gustavoctt.png" alt="Gustavo Tartare" />
                        <div>
                            <strong>Gustavo Tartare</strong>
                            <p><img src="/icons/level.svg" alt="level"/> Level 1</p>
                        </div>

                    </td>
                    <td className={styles.challengesCompleted}><span>6</span> Completos</td>
                    <td className={styles.experience}><span>546546</span> xp</td>
                  </tr>
                </tbody>
            </table>
        </div>
        </div>
    </div>
</>
  )
}