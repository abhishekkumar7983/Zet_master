import classes from "./TopComponent.module.css";
import { useState,useEffect } from "react";
const Desktop=()=>{
    return <div className={classes.gridcontainer}>
    <div className={classes.griditem1}><p className={classes.line}>Become a Financial</p> <p className={classes.line}>Advisor and <v className={classes.blue}>Earn</v></p> <p className={classes.blue}>Rs.1 Lakh/Month</p><p className={classes.lastline}>No investment required</p>
    <button className={classes.Google}><img src="/googleplay.svg" ></img></button></div>
    <div className={classes.griditem2}>
      <img src="/HeroImgNew.webp"></img>
    </div>
    </div>;
}
const Mobile=()=>{
    return <div className={classes.gridcontainer2}>
    <div className={classes.griditem1}><p className={classes.line}>Become a Financial</p> <p className={classes.line}>Advisor and <v className={classes.blue}>Earn</v></p> <p className={classes.blue}>Rs.1 Lakh/Month</p><p className={classes.lastline}>No investment required</p>
    <button className={classes.Google}><img src="/googleplay.svg" ></img></button></div>
    
    </div>
}
const TopComponent=()=>{
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
            <div className={classes['appear-from-bottom']}>
          <Mobile></Mobile>
          </div>
        ) : (
            <div className={classes['appear-from-bottom']}>
          <Desktop></Desktop>
          </div>
        )}
      </div>
      </div>
    );
}
export default TopComponent;

