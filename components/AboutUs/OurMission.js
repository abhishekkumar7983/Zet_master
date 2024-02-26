import Image from "next/image";
import styles from './OurMission.module.css';
const OurMission=()=>{
    return<>
    <div className={styles.container}>
    <p className={styles.heading}>OUR MISSION</p>
     <div className={styles.text} >
    <p className={styles.line}>Enabling financial inclusion for the next billion Indians</p>
    <p className={styles.line}>& making their Zindagi Set. Building a platform that enables you to sell</p>
    <p className={styles.line}>financial products & earn up to Rs. 1 lakh every month.</p>
    </div>
    <div className={styles.endtext}> EARN BETTER . LIVE  BETTER .</div>
  </div>
    </>
}
export default OurMission;