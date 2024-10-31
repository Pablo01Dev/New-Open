import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Header.module.css';
import siteLogo from '../assets/images/logo.svg';

function Header() {
    console.log('Header renderizado');
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageContainer}>
                    <img src={siteLogo} alt="andarilo" />
                </div>

                <div className={styles.lineAnimate}>
                    <img src={lineAnimate} alt="linha animada" />
                </div>

                <div className={styles.textContainer}>
                    <header>
                        <div className={styles.fontLogo}>
                            <h1>Andarilo</h1>
                            <h2>studio</h2>
                        </div>
                    </header>
                </div>
            </div>
            <div className={styles.navContainer}>
                <nav>
                    <Link to="portfolio" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>Portfólio</button>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>Quem sou?</button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>Contato</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
