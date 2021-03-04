import { FiHome, FiAward, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

import styles from "../styles/components/Sidebar.module.css";

interface SidebarProps{
  page: 'home' | 'leaderboard'
}

export function Sidebar({ page }: SidebarProps) {

  return (
    <div className={styles.container}>
      <img src="/logo-sidebar.svg" alt="logo"/>

      <div className={styles.buttons}>
        <div className={styles.option}>
          <Link href="/home">
            <a>
              <FiHome 
                size={30} 
                color={page === 'home' ? '#6348ff' : '#ccc'}
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Link>
        </div>

        <div className={styles.option}>
          <Link href="/leaderboard">
            <a>
              <FiAward
                size={30} 
                color={page === 'leaderboard' ? '#6348ff' : '#ccc'}
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Link>
          
        </div>

        <div className={styles.option}>
          <Link href="/"> 
            <a>
              <FiLogOut
                size={30} 
                color={'#ccc'}
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
