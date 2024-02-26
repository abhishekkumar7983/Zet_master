import React, { useEffect, useRef } from 'react';
import Carousel from 'react-slick';
import style from "./Carousal1.module.css"
const CarouselWithVideoImageScrolling = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.slickNext();
      }
    }, 3000); // Set the desired automatic scroll duration in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const settings = {
    dots: true,
    // Other configuration options for the carousel
  };

  return (
    <div className={style.main}>
    <Carousel ref={carouselRef} {...settings}>
      {/* Slide 1 */}
      <div>
        <div>
          {/* Image */}
          <img src="/Amex.webp" alt="Slide 1" />
        </div>
        <div>
          {/* Video */}
          <video controls>
            <source src="/Step3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Slide 2 */}
      <div>
        <div>
          {/* Image */}
          <img src="/BOB.webp" alt="Slide 2" />
        </div>
        <div>
          {/* Video */}
          <video controls>
            <source src="/Step3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Add more slides as needed */}
    </Carousel>
    </div>
  );
};

export default CarouselWithVideoImageScrolling;

