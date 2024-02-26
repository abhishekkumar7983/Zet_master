import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';
import React from 'react';
const Element=(props)=>{
    return<div className={styles.main}>  <div className={styles.head}> THE ZET EFFECT</div>
    <p className={styles.dis}>{props.text}</p></div>;
}
const Carousel = () => {
    const array=['vansh','soumesh',"arvi"];
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next slide
      const nextSlide = (activeSlide + 1) % 3;
      setActiveSlide(nextSlide);
    }, 3000); // Adjust the duration between slide transitions (in milliseconds)

    return () => clearInterval(interval);
  }, [activeSlide]);
  var slide=<div></div>;
  if(activeSlide==0) slide=<Element text="14 Lakh + Financial Advisors accross india are using ZET to increse income"></Element>; 
  if(activeSlide==1) slide=<Element text="We helped customers in more than 50 cities to get their first financial product"></Element>;
  if(activeSlide==2) slide=<Element text="More 20 crore rupee earned by our agents by selling credit cards and loans"></Element>
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselcontent}>
        {slide}
      </div>
      <div className={styles.carouselprogress}>
        <div
          className={styles.carouselprogressbar}
          style={{ width: `${(activeSlide + 1) * 33}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;

