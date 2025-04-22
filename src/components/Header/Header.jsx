import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = document.body.scrollHeight * 0.05;
            setIsVisible(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <div className={`${styles.container} ${isVisible ? styles.visible : ''} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.burger} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={styles.logo}>
                <img src="/images/website/logo-horizontal.png" alt="newopen" />
            </div>

            <div className={`${styles.navContainer} ${isMenuOpen ? styles.showMenu : ''}`}>
                <nav>
                    <Link to="quem-somos" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>QUEM SOMOS</button>
                    </Link>
                    <Link to="services" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>SERVIÇOS</button>
                    </Link>
                    <Link to="drinks" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>DRINKS</button>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>CONTATO</button>
                    </Link>
                    <Link to="social" spy={true} smooth={true} offset={-80} duration={500}>
                        <button>SOCIAL</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;
