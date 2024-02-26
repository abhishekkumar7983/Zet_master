import React, { useEffect, useState } from 'react';
import classes from "./NavBar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
const DesktopNavBar=()=>{
    return  <nav className={classes.navbar}>
    <div className={classes.navbarleft}>
      <Image src="/logo.svg" alt="Facebook Logo" width={70} height={70} />
    </div>
    <div className={classes.navbarright}>
      <ul className={classes.menu}>
        <li className={classes.home}><Link href="/">Home</Link></li>
        <li><Link href="/aboutUs">About Us</Link></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Partner With Us</a></li>
      </ul>
      <button className={classes.downloadbtn}>Download ZET</button>
    </div>
    <hr></hr>
  </nav>;
}

const MobileNavBar=()=>{
   const[mode,setmode]=useState(0);
   var icon=<img src="/menuIcon.svg"></img>;
   if(mode==1)
   icon=<img src="/cross.svg"></img>
  var element=<div></div>;
  if(mode==1)
  element=<div className={classes.dropdown}>
    <ul>
        <li><Link href="/" className={classes.link}>Home</Link></li>
        <li><Link href="/aboutUs" className={classes.link}>About Us</Link></li>
        <li><a href="/" className={classes.link}>Blog</a></li>
        <li><a href="/" className={classes.link}>Partner With Us</a></li>
        <li><a href="/" className={classes.link}>Download ZET</a></li>
      </ul>
  </div>;
  const toggleHandler=()=>{
    if(mode==1)
    setmode(0);
    else 
    setmode(1);
  }
    return<div>
      <nav className={classes.navbar}>
    <div className={classes.navbarleft}>
      <Image src="/logo.svg" alt="Logo" width={70} height={70} />
    </div>
    <div className={classes.navbarright}>
      <button className={classes.toggle} onClick={toggleHandler}>{icon}</button>
    </div>
   </nav>
   <hr></hr>
   {element}
    </div>;
}
const NavBar= () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div>
    <div >
      {isMobile ? (
        <MobileNavBar></MobileNavBar>
      ) : (
        <DesktopNavBar></DesktopNavBar>
      )}
    </div>
    </div>
  );
};

export default NavBar;





