import React, { useState } from "react";
import styles from './Depoimento.module.css';
import { testimonials } from "../../data"; 

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
                        <h2>{testimonial.nome}</h2>
                        <p>{testimonial.depoimento}</p>
                        <span>{testimonial.evento}</span>
                    </div>
                ))}
            </div>
            <button className={styles.nextButton} onClick={nextSlide}>{">"}</button>
        </div>
    );
}

export default Depoimento;
