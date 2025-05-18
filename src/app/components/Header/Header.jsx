'use client';

import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Lviv Logo" width={40} height={40} />
      </div>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link href="#map">Map</Link>
          <Link href="#museums">Museums</Link>
          <Link href="#places">Places</Link>
          <Link href="#attractions">Attractions</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
