import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengeProvider } from '../contexts/ChallengeContext';

import styles from '../styles/pages/Home.module.css';
import Switch from '../components/Switch';
import { Sidebar } from '../components/Sidebar';

interface HomeProps{
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <Sidebar page="home"/>

        <div className={styles.containerRight}>
          <ExperienceBar/>
          
          <div className={styles.switchButton}>
            <Switch/>
          </div>

          <CountdownProvider>
            <section>
              <div>
                <Profile/>
                <CompletedChallenges/>
                <CountDown/>
              </div>
              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
