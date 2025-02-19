import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./CarouselConteiner.module.css";
import { carouselHorizontal, carouselVertical } from "../../../data";

function CarouselConteiner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [leftImages, setLeftImages] = useState([]);
    const [rightImages, setRightImages] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    const getRandomImages = (array, count) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    useEffect(() => {
        let intervalId, leftInterval, rightInterval;

        if (inView) {
            // Imagens aparecem imediatamente sem animação no início
            setLeftImages(getRandomImages(carouselHorizontal, 2));
            setRightImages(getRandomImages(carouselHorizontal, 2));

            intervalId = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselVertical.length);
                    setIsAnimating(false);
                }, 600); // Duração da animação
            }, 3000);

            leftInterval = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setLeftImages(getRandomImages(carouselHorizontal, 2));
                    setIsAnimating(false);
                }, 600);
            }, 3000);

            rightInterval = setInterval(() => {
                setIsAnimating(true);
                setTimeout(() => {
                    setRightImages(getRandomImages(carouselHorizontal, 2));
                    setIsAnimating(false);
                }, 600);
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
                            className={`${styles.carouselImage} ${isAnimating ? styles.slideLeft : ""}`}
                        />
                    </div>
                ))}
            </div>

            {/* Carrossel central - Imagem vertical */}
            <div className={styles.carouselItemCenter}>
                <img
                    src={carouselVertical[currentIndex].image}
                    alt={carouselVertical[currentIndex].title}
                    className={`${styles.carouselImage}`}
                />
            </div>

            {/* Coluna da direita - Imagens aleatórias horizontais */}
            <div className={styles.carouselLeftRight}>
                {rightImages.map((item) => (
                    <div key={item.id} className={styles.carouselItem}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className={`${styles.carouselImage} ${isAnimating ? styles.slideRight : ""}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarouselConteiner;
