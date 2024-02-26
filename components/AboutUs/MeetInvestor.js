import style from './MeetInvestor.module.css';
import AppearFromBottom from '../Home/AppearFromBottom';
const MeetInvestor=()=>{
    return <AppearFromBottom><div><div className={style.head}>Meet The Investor</div>
    <div className={style.imagecontainer}> 
    <img className={style.img} src="/InvCompany1.webp"></img>
    <img className={style.img} src="/InvCompany2.webp"></img>
    <img className={style.img} src="/InvCompany3.webp"></img>
    <img className={style.img} src="/InvCompany4.webp"></img>
   </div>
    </div></AppearFromBottom>;
}
export default MeetInvestor;