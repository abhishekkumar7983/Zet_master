import { useEffect, useRef } from 'react';
import classes from './Sample.module.css';
const Sample = () => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    const slideshowWrapper = slideshowRef.current;

    const scrollWidth = slideshowWrapper.scrollWidth;
    const clientWidth = slideshowWrapper.clientWidth;

    let scrollPosition = 0;
    const scrollAmount = clientWidth / 5; // Adjust scroll amount as needed

    const scroll = () => {
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      } else {
        scrollPosition += scrollAmount;
      }

      slideshowWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    };

    const interval = setInterval(scroll,2000); // Adjust the duration between scrolls as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.slideshowcontainer}>
      <div className={classes.slideshowwrapper} ref={slideshowRef}>
      <img className={classes.img} src="/Amex.webp" alt="Image 1" />
        <img className={classes.img} src="/Aufin.webp" alt="Image 2" />
        <img className={classes.img} src="/Axis.webp" alt="Image 3" />
        <img className={classes.img} src="/Bajaj.webp" alt="Image 4" />
        <img className={classes.img} src="/BOB.webp" alt="Image 5" />
        <img className={classes.img} src="/YesBank.webp" alt="Image 6" />
      </div>
    </div>
  );
};

export default Sample;

