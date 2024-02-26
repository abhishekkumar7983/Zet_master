import style from './Ims.module.css';
const Ims=()=>{
   return <div className={style.imagecontainer}> 
    <img className={style.img} src="/EconomicTimes.webp"></img>
    <img className={style.img} src="/Inc42.webp"></img>
    <img className={style.img} src="/mint.webp"></img>
    <img className={style.img} src="/YourStory.webp"></img>
    <img className={style.img} src="/BusinessStandard.webp"></img>
   </div>;
}
export default Ims;
