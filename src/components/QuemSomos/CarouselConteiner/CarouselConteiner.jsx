import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './CarouselConteiner.module.css';
import { carouselHorizontal, carouselVertical } from '../../../data';

function CarouselConteiner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leftImages, setLeftImages] = useState([]);
    const [rightImages, setRightImages] = useState([]);
    const { ref, inView } = useInView({ triggerOnce: true });

    // Função para embaralhar um array e pegar um número aleatório de imagens
    const getRandomImages = (array, count) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        let intervalId, leftInterval, rightInterval;

        if (inView) { // Inicia os carrosseis apenas quando visível
            // Atualiza as imagens aleatórias
            setLeftImages(getRandomImages(carouselHorizontal, 2));
            setRightImages(getRandomImages(carouselHorizontal, 2));

            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselVertical.length); 
            }, 2000);

            leftInterval = setInterval(() => {
                setLeftImages(getRandomImages(carouselHorizontal, 2)); // Atualiza as imagens aleatórias do lado esquerdo
            }, 2000);

            rightInterval = setInterval(() => {
                setRightImages(getRandomImages(carouselHorizontal, 2)); // Atualiza as imagens aleatórias do lado direito
            }, 2000);
        } else {
            clearInterval(intervalId);
            clearInterval(leftInterval);
            clearInterval(rightInterval);
        }

        return () => {
            clearInterval(intervalId);
            clearInterval(leftInterval);
            clearInterval(rightInterval);
        };
    }, [inView]);

    return (
        <div className={styles.carouselContainer} ref={ref}>
            {/* Coluna da esquerda - Imagens aleatórias horizontais */}
            <div className={styles.carouselLeftRight}>
                {leftImages.map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img src={item.image} alt={item.title} className={styles.carouselImage} />
                    </div>
                ))}
            </div>

            {/* Carrossel central - Imagem vertical */}
            <div className={styles.carouselItemCenter}>
                <img 
                    src={carouselVertical[currentIndex].image} 
                    alt={carouselVertical[currentIndex].title} 
                    className={styles.carouselImage} 
                />
            </div>

            {/* Coluna da direita - Imagens aleatórias horizontais */}
            <div className={styles.carouselLeftRight}>
                {rightImages.map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img src={item.image} alt={item.title} className={styles.carouselImage} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselConteiner;
