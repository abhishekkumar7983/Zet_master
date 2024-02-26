import style from "./Founders.module.css";
import AppearFromBottom from "../Home/AppearFromBottom";
import { FaLinkedin } from 'react-icons/fa';

const Founders=()=>{
    return<AppearFromBottom>
    <div className={style.main}>
        <div className={style.head}>Meet our Founders</div>
        <div className={style.dis}>Few words from founders desk</div>
        <div className={style.container}>
         <div className={style.row}>
         <div className={style.column}>
           <div><img className={style.img} src="/Manish.webp"></img></div>
           <div className={style.text}>Manish Shara</div>
           <div className={style.text2}>Founder & CEO <FaLinkedin></FaLinkedin></div>
           
        </div>
        <div className={style.column}>
           <div><img className={style.img} src="/Yash.webp"></img></div>
           <div className={style.text}>Yash Desai</div>
           <div className={style.text2}>Co-Founder <FaLinkedin></FaLinkedin></div>
           
        </div>
        <div className={style.column}>
           <div><img className={style.img} src="/Lokesh.webp"></img></div>
           <div className={style.text}>Lokesh Agarwal</div>
           <div className={style.text2}>CTO <FaLinkedin></FaLinkedin></div>
           
        </div>
        </div>
        </div>
    </div></AppearFromBottom>;
}
export default Founders;