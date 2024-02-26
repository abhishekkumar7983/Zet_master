import OurMission from "../components/AboutUs/OurMission";
import Layout from "../components/Ul/Layout";
import Evolved from "../components/AboutUs/Evolved";
import GotFeatured from "../components/AboutUs/GotFeatured";
import Ims from "../components/AboutUs/Ims";
import MeetInvestor from "../components/AboutUs/MeetInvestor";
import style from "./aboutUs.module.css";
import Investors from "../components/AboutUs/Investors";
import Founders from "../components/AboutUs/Founders";
const aboutUs=()=>{
    return <Layout>
       <OurMission></OurMission>
       <Evolved></Evolved>
       <GotFeatured></GotFeatured>
       <Ims></Ims>
       <MeetInvestor></MeetInvestor>
       <Investors></Investors>
       <Founders></Founders>
       <img src="/AboutUsFooter.webp" className={style.footerImg}></img>
    </Layout>;
}
export default aboutUs;