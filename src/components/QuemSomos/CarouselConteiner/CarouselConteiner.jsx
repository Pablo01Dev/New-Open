import React from "react";
import styles from './CarouselConteiner.module.css';
import { carouselHorizontal, carouselVertical } from '../../../data';

function CarouselConteiner() {
    return (
        <div className={styles.carouselContainer}>
            {/* Coluna da esquerda - Imagens horizontais */}
            <div className={styles.carouselLeftRight}>
                {carouselHorizontal.slice(0, 2).map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img src={item.image} alt={item.title} className={styles.carouselImage} />
                    </div>
                ))}
            </div>

            {/* Carrossel central - Imagem vertical */}
            <div className={styles.carouselItemCenter}>
                <img src={carouselVertical[0].image} alt={carouselVertical[0].title} className={styles.carouselImage} />
            </div>

            {/* Coluna da direita - Imagens horizontais */}
            <div className={styles.carouselLeftRight}>
                {carouselHorizontal.slice(2, 4).map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img src={item.image} alt={item.title} className={styles.carouselImage} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselConteiner;
