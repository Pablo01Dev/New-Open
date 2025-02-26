import React, { useState, useEffect } from "react";
import styles from './Depoimento.module.css';
import { testimonials } from "../../data";
import { BsPersonCircle } from 'react-icons/bs';

function Depoimento() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adicionado estado para verificar se é mobile
    const testimonialsToShow = isMobile ? 1 : 3; // Determina quantos depoimentos mostrar

    useEffect(() => {
        setHasMounted(true);
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setSlideDirection('right');
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setIsFading(false);
        }, 500);
    };

    const prevSlide = () => {
        setSlideDirection('left');
        setIsFading(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
            setIsFading(false);
        }, 500);
    };

    const currentTestimonials = Array.from({ length: testimonialsToShow }, (_, i) =>
        testimonials[(currentIndex + i) % testimonials.length]
    );

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselContainer2}>
                <h1>DEPOIMENTOS</h1>
                <button className={styles.prevButton} onClick={prevSlide}><i className="bi bi-caret-left"></i></button>
                <div className={styles.carousel}>
                    {currentTestimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`${styles.testimonial} ${isFading ? styles.fadeOut : (hasMounted && !isFading ? styles.fadeIn : '')}`}
                            style={{
                                transform: isFading ? (slideDirection === 'right' ? 'translateX(-5%)' : 'translateX(5%)') : 'translateX(0%)',
                                width: isMobile ? '95%' : `${100 / testimonialsToShow}%` // Ajuste de largura
                            }}
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
                    ))}
                </div>
                <button className={styles.nextButton} onClick={nextSlide}><i className="bi bi-caret-right"></i></button>
            </div>
        </div>
    );
}

export default Depoimento;