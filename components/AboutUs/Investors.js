import React from 'react';
import styles from './Investors.module.css';

const Investors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
           <div><img className={styles.img} src="/Inv1.webp"></img></div>
           <div className={styles.text}>kunal shah</div>
           <div className={styles.text2}>Founder,CRED</div>
        </div>
        <div className={styles.column}>
           <div><img className={styles.img} src="/Inv2.webp"></img></div>
           <div className={styles.text}>Gourav Manjal</div>
           <div className={styles.text2}>Founder,UNACADEMY</div>
        </div>
        <div className={styles.column}>
          <div><img className={styles.img} src="/Inv3.webp"></img></div>
          <div className={styles.text}>Aarik Vaish</div>
           <div className={styles.text2}>Co-Founder,HAPTIK</div>
        </div>
        <div className={styles.column}>
          <div><img className={styles.img} src="/Inv4.webp"></img></div>
          <div className={styles.text}>Harshail Mathur</div>
           <div className={styles.text2}>Founder,ROZORPAY</div>
        </div>
        <div className={styles.column}>
           <div><img className={styles.img} src="/Inv5.webp"></img></div>
           <div className={styles.text}>Vidit Aatrey</div>
           <div className={styles.text2}>Founder & CEO,MEESHO</div>
        </div>
        <div className={styles.column}>
           <div><img className={styles.img} src="/Inv6.webp"></img></div>
           <div className={styles.text}>Amrish Rau</div>
           <div className={styles.text2}>CEO, PINELABS</div>
        </div>
        <div className={styles.column}>
           <div><img className={styles.img} src="/Inv7.webp"></img></div>
           <div className={styles.text}>Lalit Keshre</div>
           <div className={styles.text2}>CEO, GROWW</div>
        </div>
        <div className={styles.column}>
           <div><img className={styles.img} src="/Inv8.webp"></img></div>
           <div className={styles.text}>Gokul Rajaram</div>
           <div className={styles.text2}>Product, DOORDASH</div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
