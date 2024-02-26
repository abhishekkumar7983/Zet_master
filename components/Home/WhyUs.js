import classes from "./WhyUs.module.css";
import WhyUsRight from "./WhyUsRight";
import { useEffect,useState } from "react";
const Mobile=()=>{
 return <div className={classes.gridcontainer2}>
 <div className={classes.griditem3}>
   <WhyUsRight></WhyUsRight>
 </div>
</div>
}
const Desktop=()=>{
   return <div className={classes.gridcontainer}>
   <div className={classes.griditem1}>
     <div className={classes.leftWrapper}>
     <div className={classes.head}>Why Choose <v className={classes.highlight}>Us</v></div>
     <div className={classes.text}>Why we are loved by our customers</div>
     <div className={classes.imagecontainer}>
      <img className={classes.backgroundimage} src="/bgImg.webp" alt="Background Image" />
     <img className={classes.foregroundimage} src="/whyUsHero.webp" alt="Foreground Image" />
    </div>
   </div>
   </div>
   <div className={classes.griditem2}>
     <WhyUsRight></WhyUsRight>
   </div>
</div>;
}
const WhyUs=()=>{
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
export default WhyUs;
