import React from "react";
import styles from './CarouselConteiner.module.css';
import { carouselData } from '../../../data';

function CarouselConteiner() {
    return (
        <div className={styles.carouselContainer}>
            {/* Coluna da esquerda */}
            <div className={styles.carouselLeftRight}>
                {carouselData.slice(0, 2).map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img src={item.image} alt={item.title} className={styles.carouselImage} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>

            {/* Carrossel central */}
            <div className={styles.carouselItemCenter}>
                <img src={carouselData[2].image} alt={carouselData[2].title} className={styles.carouselImage} />
                <h3>{carouselData[2].title}</h3>
            </div>

            {/* Coluna da direita */}
            <div className={styles.carouselLeftRight}>
                {carouselData.slice(3, 5).map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img src={item.image} alt={item.title} className={styles.carouselImage} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselConteiner;
