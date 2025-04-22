import React, { useState, useEffect } from "react";
import styles from './DrinksCarousel.module.css';
import { drinks } from "../../data";
import Social from "../Social/Social";
import 'bootstrap-icons/font/bootstrap-icons.css';

function DrinksCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = window.innerWidth <= 768 ? 1 : 5;

    const nextSlide = () => {
        if (window.innerWidth <= 768) {
            if (currentIndex < drinks.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }
        } else {
            if (currentIndex < drinks.length - itemsToShow) {
                setCurrentIndex(currentIndex + 1);
            }
        }
    };

    const prevSlide = () => {
        if (window.innerWidth <= 768) {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        } else {
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
            }
        }
    };

    // 🪄 Efeito de fade-in com IntersectionObserver
    useEffect(() => {
        const elements = document.querySelectorAll(`.${styles.drink}`);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, [currentIndex]); // Atualiza observação quando os itens mudam

    return (
        <div className={styles.drinksContainer} id="drinks">
            <div className={styles.titleContainer}>
                <h1>OS DRINKS MAIS PEDIDOS</h1>
            </div>
            <div className={styles.carouselContainer}>
                <button className={styles.arrowButton} onClick={prevSlide}>
                    <i className="bi bi-caret-left"></i>
                </button>
                <div className={styles.carousel}>
                    {drinks.slice(currentIndex, currentIndex + itemsToShow).map(drink => (
                        <div key={drink.id} className={`${styles.drink}`}>
                            <img src={drink.imagem} alt={drink.titulo} className={styles.image} />
                            <div className={styles.titleBackground}>
                                <h2 className={styles.title}>{drink.titulo}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.arrowButton} onClick={nextSlide}>
                    <i className="bi bi-caret-right"></i> 
                </button>
            </div >
            <Social />
        </div>
    );
}

export default DrinksCarousel;
