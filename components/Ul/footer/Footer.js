import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className={styles.main}>
            <img src="/zet_logo_white.svg" className={styles.logo}></img>
            <hr className={styles.hr}></hr>
      <footer className={styles.footer}>
        <div className={styles.column}>
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Partner with us</p>
          <p>Blog</p>
        </div>
        <div className={styles.column}>
          <h3>LEGAL</h3>
          <p>Privacy Policy</p>
          <p>Tearms of Use</p>
        </div>
        <div className={styles.column}>
          <h3>CONTACT</h3>
          <p>
          <a href="#"><FaFacebook />hi@zetapp.in</a>
          </p>
          <a href="#"><FaTwitter />+91-7417274072</a>
        </div>
        <div className={styles.column}>
          <h3>SOCIAL</h3>
          <p>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </p>
        </div>

      </footer>
      </div>
    );
  };
  
  export default Footer;
  