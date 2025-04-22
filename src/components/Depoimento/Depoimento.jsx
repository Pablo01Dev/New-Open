import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './Depoimento.module.css';
import { testimonials } from "../../data";
import { BsPersonCircle } from 'react-icons/bs';

function Depoimento() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prev) => 
            (prev + newDirection + testimonials.length) % testimonials.length
        );
    };

    // Variantes de animação
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: {
                duration: 0.2
            }
        })
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselContainer2}>
                <h1>DEPOIMENTOS</h1>
                
                <button 
                    className={styles.prevButton} 
                    onClick={() => paginate(-1)}
                    aria-label="Depoimento anterior"
                >
                    <i className="bi bi-caret-left"></i>
                </button>

                <div className={styles.carouselWrapper}>
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className={styles.testimonial}
                        >
                            <div className={styles.person}>
                                <BsPersonCircle style={{ fontSize: '25px', color: 'gray', marginTop: '.7em' }} />
                                <div className={styles.personName}>
                                    <h2>{testimonials[currentIndex].nome}</h2>
                                    <span>{testimonials[currentIndex].evento}</span>
                                </div>
                            </div>
                            <p>{testimonials[currentIndex].depoimento}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button 
                    className={styles.nextButton} 
                    onClick={() => paginate(1)}
                    aria-label="Próximo depoimento"
                >
                    <i className="bi bi-caret-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Depoimento;