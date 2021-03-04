import Head from "next/head";
import {FiArrowRight} from 'react-icons/fi';
import Link from 'next/link';

import styles from '../styles/pages/Login.module.css';

interface UseProps{
  nome: string;
  avatar: string;
  theme: number;
  login: string;
}

export default function Login( props: UseProps ){
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
            <input 
              type="text" 
              name="login" 
              id="login"
              placeholder="Github user login"
            />
            <button>
              <Link href="/home">
                <a>
                  <FiArrowRight size={15}/>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}