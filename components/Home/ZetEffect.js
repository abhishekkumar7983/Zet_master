import classes from "./ZetEffect.module.css";
import Carousel from "./Carousal2";
import { useEffect,useState } from "react";
const Desktop=()=>{
   return  <div className={classes.mainBlock}>
   <div className={classes.upperTriangle}></div>
   <div className={classes.head}>
        <div className={classes.block}>
           <div className={classes.upperTriangle2}></div>
           <div className={classes.gridcontainer}>
   <div className={classes.griditem1}>
   </div>
   <div className={classes.griditem2}>
       <Carousel></Carousel>
   </div>
   </div>
           <div className={classes.lowerTriangle2}></div>
        </div>
     </div>
   <div className={classes.lowerTriangle}></div>
  </div>;
}
const Mobile=()=>{
   return <div className={classes.mainBlock}>
   <div className={classes.upperTriangle}></div>
   <div className={classes.head}>
        <div className={classes.block}>
           <div className={classes.upperTriangle2}></div>
           <div className={classes.get}><Carousel></Carousel></div>
           <div className={classes.lowerTriangle2}></div>
        </div>
     </div>
   <div className={classes.lowerTriangle}></div>
  </div>;
}
const ZetEffect=()=>{
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
        <Mobile></Mobile>
      ) : (
        <Desktop></Desktop>
      )}
    </div>
    </div>
  );
   
}
export default ZetEffect;
