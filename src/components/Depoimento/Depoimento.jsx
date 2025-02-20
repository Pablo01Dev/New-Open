import React, { useState, useEffect } from "react";
import styles from './Depoimento.module.css';
import { testimonials } from "../../data";
import { BsPersonCircle } from 'react-icons/bs';

function Depoimento() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false); // Controla a animação de fade
    const testimonialsToShow = 3; // Número de depoimentos a serem exibidos

    // Função para avançar o carrossel
    const nextSlide = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex < testimonials.length - testimonialsToShow) {
                    return prevIndex + 1;
                } else {
                    return 0; // Volta para o início
                }
            });
            setIsFading(false);
        }, 500); // Atraso para sincronizar com a animação
    };

    // Função para voltar o carrossel
    const prevSlide = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex > 0) {
                    return prevIndex - 1;
                } else {
                    return testimonials.length - testimonialsToShow; // Vai para o final
                }
            });
            setIsFading(false);
        }, 500); // Atraso para sincronizar com a animação
    };

    // Gerando a "fila" de depoimentos a serem mostrados
    const currentTestimonials = [
        testimonials[(currentIndex) % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselContainer2}>
                <h1>DEPOIMENTOS</h1>
                <button className={styles.prevButton} onClick={prevSlide}>{"<"}</button>
                <div className={styles.carousel}>
                    {currentTestimonials.map((testimonial, index) => {
                        let testimonialClass = styles.testimonial;
                        if (index === 0) {
                            // O primeiro item está saindo, aplicar fade out
                            testimonialClass = `${styles.testimonial} ${isFading ? styles.fadeOut : ''}`;
                        } else if (index === 2) {
                            // O último item está entrando, aplicar fade in
                            testimonialClass = `${styles.testimonial} ${isFading ? styles.visible : ''}`;
                        }
                        return (
                                <div
                                    key={testimonial.id}
                                    className={testimonialClass}
                                    style={{ width: `${100 / testimonialsToShow}%` }}
                                >
                                    <div className={styles.person}>
                                        <BsPersonCircle style={{ fontSize: '25px', color: 'gray', marginTop: '.7em' }} />
                                        <div className={styles.personName}>
                                            <h2>{testimonial.nome}</h2>
                                            <span>{testimonial.evento}</span>
                                        </div>
                                    </div>
                                    <p>{testimonial.depoimento}</p>
                            </div>
                        );
                    })}
                </div>
                <button className={styles.nextButton} onClick={nextSlide}>{">"}</button>
            </div>
        </div>
    );
}

export default Depoimento;
