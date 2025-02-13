import React from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';

function Header() {
    console.log('Header renderizado');
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src="" alt="newopen" />
            </div>
            <div className={styles.navContainer}>
                <nav>
                    <Link to="portfolio" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>QUEM SOMOS</button>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>EVENTOS</button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>SERVIÇOS</button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>CONTATO</button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>SOCIAL</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
