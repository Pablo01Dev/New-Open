import React, { useState } from "react";
import styles from './Depoimento.module.css';
import { testimonials } from "../../data";
import { BsPersonCircle } from 'react-icons/bs'; // Ícone que estamos tentando

function Depoimento() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < testimonials.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.prevButton} onClick={prevSlide}>{"<"}</button>
            <div className={styles.carousel}>
                {testimonials.slice(currentIndex, currentIndex + 3).map(testimonial => (
                    <div key={testimonial.id} className={styles.testimonial}>
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
            <button className={styles.nextButton} onClick={nextSlide}>{">"}</button>
        </div>
    );
}

export default Depoimento;
