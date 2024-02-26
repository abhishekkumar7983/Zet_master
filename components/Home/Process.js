import { useState, useEffect } from 'react';
import styles from "./Process.module.css"
const Process = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 0;
        }
        return prevProgress + 1;
      });
    }, 120);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  useEffect(() => {
    setProgress(0);
  }, []);

  return (
    <div className={styles.carouselProgressBar}>
      <div
        className={styles.carouselProgressBarFill}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default Process;
