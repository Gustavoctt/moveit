import { FiHome, FiAward, FiLogOut } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from "../styles/components/Sidebar.module.css";

interface SidebarProps{
  page: 'home' | 'leaderboard'
}

export function Sidebar({ page }: SidebarProps) {
  const router = useRouter();

  function toHome(){
    if(page === 'home'){
      return
    }

    router.push('/home')
  }

  function toLeaderboard(){
    if(page === 'leaderboard'){
      return
    }

    router.push('/leaderboard')
  }

  return (
    <div className={styles.container}>
      <img src="/logo-sidebar.svg" alt="logo"/>

      <div className={styles.buttons}>
        <div className={styles.option}>
          <Link href="/home">
            <FiHome 
              size={30} 
              color={page === 'home' ? '#6348ff' : '#ccc'}
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </div>

        <div className={styles.option}>
          <Link href="/leaderboard">
            <FiAward
              size={30} 
              color={page === 'leaderboard' ? '#6348ff' : '#ccc'}
              style={{ cursor: 'pointer' }}
              onClick={toLeaderboard}
            />
          </Link>
          
        </div>

        <div className={styles.option}>
          <Link href="/">
            <FiLogOut
              size={30} 
              color={'#ccc'}
              style={{ cursor: 'pointer' }}
              onClick={toLeaderboard}
            />
          </Link>
          
        </div>
      </div>
    </div>
  );
}
