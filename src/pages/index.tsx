import Head from "next/head";
import {FiArrowRight} from 'react-icons/fi';

import styles from '../styles/pages/Login.module.css';
import { useAuth } from "../contexts/AuthContext";

import { NextPage } from 'next';



const Login: NextPage = () => {
  const { signInGit } = useAuth();

  return(
    <>
      <Head>
        <title>Login | moveit</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src="background-login.svg" alt="moveit"/>
        </div>
        <div className={styles.loginContainer}>
          <img src="logo-login.svg" alt="moveit"/>

          <h3>Bem-vindo</h3>

          <div className={styles.github}>
            <img src="github.svg" alt="moveit"/>
            <p>Faça o login com o seu Github para começar</p>
          </div>

          <div className={styles.login}>
            <button
              onClick={signInGit}
            >
              <FiArrowRight size={15}/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;