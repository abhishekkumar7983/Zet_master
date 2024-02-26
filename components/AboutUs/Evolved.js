import classes from "./Evolved.module.css";
import Image from "next/image";
const Evolved=()=>{
   return <div >
    <div className={classes.head}>
   How we evolved over the years
   </div>
   <div className={classes.imgContainer}>
    <img src="/Growth.webp" className={classes.img}></img>
   </div>
   </div>;
}
export default Evolved;