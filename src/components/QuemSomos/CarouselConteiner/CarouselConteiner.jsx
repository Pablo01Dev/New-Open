import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./CarouselConteiner.module.css";
import { carouselHorizontal, carouselVertical } from "../../../data";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const AutoCarousel = memo(({ images, delay = 3000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(nextSlide, delay);
    return () => clearInterval(interval);
  }, [images, delay, nextSlide]);

  if (!images || images.length === 0) {
    return <div className={styles.carousel}>Loading...</div>;
  }

  return (
    <div className={`${styles.carousel} ${className}`}>
      {images.map((img, index) => (
        <div key={index} className={styles.carouselImageContainer}>
          <img
            src={img.image}
            alt={img.title}
            className={styles.carouselImage}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        </div>
      ))}
    </div>
  );
});

function CarouselConteiner() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const [carouselImages, setCarouselImages] = useState([[], [], [], [], []]);
  const [loaded, setLoaded] = useState(false);
  const leftColumnRef = useRef(null);
  const centerColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    if (inView && !loaded) {
      const shuffledHorizontal = shuffleArray(carouselHorizontal);
      const shuffledVertical = shuffleArray(carouselVertical);

      setCarouselImages([
        shuffledHorizontal.slice(0, 5),
        shuffledHorizontal.slice(5, 10),
        shuffledVertical.slice(0, 5),
        shuffledHorizontal.slice(10, 15),
        shuffledHorizontal.slice(15, 20),
      ]);
      setLoaded(true);
    }
  }, [inView, loaded]);

  useEffect(() => {
    if (inView) {
      leftColumnRef.current?.classList.add(styles.animate);
      centerColumnRef.current?.classList.add(styles.animate);
      rightColumnRef.current?.classList.add(styles.animate);
    }
  }, [inView]);

  return (
    <div className={styles.carouselContainer} ref={ref}>
      <div className={styles.leftColumn} ref={leftColumnRef}>
        <div className={styles.imageBox1}>
          <AutoCarousel images={carouselImages[0]} />
        </div>
        <div className={styles.imageBox2}>
          <AutoCarousel images={carouselImages[1]} />
        </div>
      </div>

      <div className={styles.carouselItemCenter} ref={centerColumnRef}>
        <AutoCarousel
          images={carouselImages[2]}
          delay={4000}
          className={styles.carouselCenter}
        />
      </div>

      <div className={styles.rightColumn} ref={rightColumnRef}>
        <div className={styles.imageBox3}>
          <AutoCarousel images={carouselImages[3]} />
        </div>
        <div className={styles.imageBox4}>
          <AutoCarousel images={carouselImages[4]} />
        </div>
      </div>
    </div>
  );
}

export default CarouselConteiner;
