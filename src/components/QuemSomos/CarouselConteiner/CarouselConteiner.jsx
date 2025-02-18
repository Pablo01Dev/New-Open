import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './CarouselConteiner.module.css';
import { carouselHorizontal, carouselVertical } from '../../../data';

function CarouselConteiner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true }); // Monitorar quando o carrossel estiver visível

    useEffect(() => {
        let intervalId;
        if (inView) { // Inicia o carrossel apenas quando visível
            intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselVertical.length); 
            }, 2000);
        } else {
            clearInterval(intervalId); // Para o carrossel se não estiver visível
        }

        return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado ou invisível
    }, [inView]); // Re-efetua o efeito sempre que a visibilidade mudar

    return (
        <div className={styles.carouselContainer} ref={ref}>
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
                <img 
                    src={carouselVertical[currentIndex].image} 
                    alt={carouselVertical[currentIndex].title} 
                    className={styles.carouselImage} 
                />
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
