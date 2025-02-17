import React, { useState } from "react";
import styles from './DrinksCarousel.module.css';
import { drinks } from "../../data";

function DrinksCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = window.innerWidth <= 768 ? 1 : 5;

    const nextSlide = () => {
        if (currentIndex < drinks.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={styles.drinksContainer}>
            <h1 className={styles.titulo}>OS DRINKS MAIS PEDIDOS</h1>
            <div className={styles.carouselContainer}>
                <button className={styles.arrowButton} onClick={prevSlide}>←</button>
                <div className={styles.carousel}>
                    {drinks.slice(currentIndex, currentIndex + itemsToShow).map(drink => (
                        <div key={drink.id} className={styles.drink}>
                            <img src={drink.imagem} alt={drink.titulo} className={styles.image} />
                            <div className={styles.titleBackground}>
                                <h2 className={styles.title}>{drink.titulo}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={styles.arrowButton} onClick={nextSlide}>→</button>
            </div>
        </div>
    );
}

export default DrinksCarousel;
