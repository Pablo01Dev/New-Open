import React, { useEffect, useRef } from "react";
import CarouselConteiner from './CarouselConteiner/CarouselConteiner.jsx';
import styles from './QuemSomos.module.css';

function QuemSomos() {
    const textRef = useRef(null);
    const h2Ref = useRef(null);
    const pRef = useRef(null);

    useEffect(() => {
        const elements = [textRef.current, h2Ref.current, pRef.current];

        function checkVisibility() {
            elements.forEach(element => {
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

                    if (isVisible) {
                        element.classList.add(styles.visible);
                    }
                }
            });
        }

        checkVisibility();
        window.addEventListener('scroll', checkVisibility);

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <div className={styles.quemSomosContainer}>
            <div className={styles.text} ref={textRef}>
                <h2 ref={h2Ref}>
                    Somos a empresa de bar mais presente em festas e eventos!
                </h2>

                <p ref={pRef}>
                    Beber sempre fez parte dos momentos de celebração, e os coquetéis
                    são uma fusão de estilos e tendências que atravessaram gerações.
                    <br/><br/>
                    Nós trazemos o melhor da coquetelaria clássica e adicionamos releituras
                    modernas e exclusivas, criando drinks que fazem do seu evento uma
                    experiência única e inesquecível!
                </p>
            </div>

            <div className={styles.carrossel}>
                <CarouselConteiner />
            </div>
        </div>
    );
}

export default QuemSomos;