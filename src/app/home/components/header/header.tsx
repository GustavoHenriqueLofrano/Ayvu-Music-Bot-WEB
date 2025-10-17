"use client";
import Link from 'next/link';
import styles from './header.module.css';
import logo from '@/public/logoMenor.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoImage}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={50}/>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/comandos" className={styles.navLink}>Comandos</Link>
        <Link href="/sobre" className={styles.navLink}>Sobre</Link>
        <Link href="/suporte" className={styles.navLink}>Suporte</Link>
      </nav>
    </header>
  );
};

export default Header;