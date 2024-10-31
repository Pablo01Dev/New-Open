import React from "react";
import styles from './Depoimento.module.css';
import {testimonials} from "../../data";

function Depoimento() {
    return (
        <div>
            <div className={styles.carousel}>
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className={styles.testimonial}>
                        <h2>{testimonial.nome}</h2>
                        <p>{testimonial.depoimento}</p>
                        <span>{testimonial.evento}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Depoimento;
