"use client";
import styles from './footer.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <Link 
                    href="https://github.com/GustavoHenriqueLofrano/Ayvu-Music-Bot"
                    className={styles.iconLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={25} />
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/gustavohenriquelofrano/"
                    className={styles.iconLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={23} />  
                </Link>
            </div>

            <div className={styles.copyRight}>
                <p>© {new Date().getFullYear()} Ayvu Music</p>
            </div>
        </footer>
    );
};

export default Footer;