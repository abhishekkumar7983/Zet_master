import React, { useEffect, useRef } from 'react';
import style from "./Carousal.module.css";
const Carousel = ({ slides }) => {
  const carouselRef = useRef(null);
  const slideIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndexRef.current =
        (slideIndexRef.current + 1) % slides.length;
      carouselRef.current.style.transform = `translateX(-${
        slideIndexRef.current * 100
      }%)`;
    }, 11000); // Set the desired automatic scroll duration in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className={style.carouselcontainer}>
      <div className={style.carousel} ref={carouselRef}>
        {slides.map((slide, index) => (
          <div key={index} className={style.slide}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

