import React from "react";
import styles from './Carousel.module.css';
import carouselData from '../src/data'; // Ajuste o caminho conforme necessário

function Carousel() {
    return (
        <div className={styles.carouselContainer}>
            {carouselData.map((item, index) => (
                <div
                    key={item.id}
                    className={index === 2 ? styles.carouselItemCenter : styles.carouselItem}
                >
                    <img src={item.image} alt={item.title} className={styles.carouselImage} />
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default Carousel;
