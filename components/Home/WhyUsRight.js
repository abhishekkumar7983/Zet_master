import classes from "./WhyUsRight.module.css";
import AppearFromBottom from "./AppearFromBottom";
const WhyUsRight=()=>{
  
    return<AppearFromBottom><div className={classes.gridcontainer}>
      <div className={classes.griditem}>
        <img src="/ZeroInvestment.svg"></img>
        <div className={classes.title}>Zero Investment</div>
        <div className={classes.text}>Build your business without any investment</div>
      </div>
      <div className={classes.griditem}>
        <img src="/QuickPayout.svg"></img>
        <div className={classes.title}>Quick Payout</div>
        <div className={classes.text}>Direct Payout in your bank account in short time</div>
      </div>
      <div className={classes.griditem}>
        <img src="/limitless.svg"></img>
        <div className={classes.title}>Limitless Earnings</div>
        <div className={classes.text}>Direct Payout in your bank account in short time</div>
      </div>
      <div className={classes.griditem}>
        <img src="/training.svg"></img>
        <div className={classes.title}>Training & Upskilling</div>
        <div className={classes.text}>Get trained by finance and sales experts</div>
      </div>
      <div className={classes.griditem}>
        <img src="/customers.svg"></img>
        <div className={classes.title}>Customer Support</div>
        <div className={classes.text}>Access tools and content to build relationship</div>
      </div>
      <div className={classes.griditem}>
        <img src="/financial.svg"></img>
        <div className={classes.title}>Financial Products</div>
        <div className={classes.text}>Trustworthy & high-rated products & categories</div>
      </div>
      </div>
      </AppearFromBottom>;
}
export default WhyUsRight;