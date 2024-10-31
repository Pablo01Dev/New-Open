import React from "react";
import styles from './DrinksCarousel.module.css';
import {drinks} from "../../data";

function DrinksCarousel() {
    return (
        <div className={styles.carousel}>
            {drinks.map(drink => (
                <div key={drink.id} className={styles.drink}>
                    <img src={drink.imagem} alt={drink.titulo} className={styles.image} />
                    <div className={styles.titleBackground}>
                        <h2 className={styles.title}>{drink.titulo}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DrinksCarousel;
