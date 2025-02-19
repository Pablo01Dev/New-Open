import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './CarouselConteiner.module.css';
import { carouselHorizontal, carouselVertical } from '../../../data';

function CarouselConteiner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leftImages, setLeftImages] = useState([]);
    const [rightImages, setRightImages] = useState([]);
    const [fade, setFade] = useState(false); // ✅ Adicionando estado fade
    const { ref, inView } = useInView({ triggerOnce: true });

    // Função para embaralhar um array e pegar um número aleatório de imagens
    const getRandomImages = (array, count) => {
        const shuffled = array.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        let intervalId, leftInterval, rightInterval;

        if (inView) {
            setFade(true); // ✅ Agora setFade está definido corretamente

            setLeftImages(getRandomImages(carouselHorizontal, 2));
            setRightImages(getRandomImages(carouselHorizontal, 2));

            intervalId = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselVertical.length);
                    setFade(true);
                }, 500); // Tempo para a animação do fade-out antes da troca
            }, 3000);

            leftInterval = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setLeftImages(getRandomImages(carouselHorizontal, 2));
                    setFade(true);
                }, 500);
            }, 3000);

            rightInterval = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setRightImages(getRandomImages(carouselHorizontal, 2));
                    setFade(true);
                }, 500);
            }, 3000);
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
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className={`${styles.carouselImage} ${fade ? styles.fade : styles.fadeOut}`} 
                        />
                    </div>
                ))}
            </div>

            {/* Carrossel central - Imagem vertical */}
            <div className={styles.carouselItemCenter}>
                <img
                    src={carouselVertical[currentIndex].image}
                    alt={carouselVertical[currentIndex].title}
                    className={`${styles.carouselImage} ${fade ? styles.fade : styles.fadeOut}`}
                />
            </div>

            {/* Coluna da direita - Imagens aleatórias horizontais */}
            <div className={styles.carouselLeftRight}>
                {rightImages.map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className={`${styles.carouselImage} ${fade ? styles.fade : styles.fadeOut}`} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselConteiner;
