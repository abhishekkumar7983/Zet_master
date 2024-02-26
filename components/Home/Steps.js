import classes from "./Steps.module.css";
import Carousel from "./Carousal";
import { useEffect, useRef } from "react";
import Process from "./Process";
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
};
const Steps = () => {
  const slides = [
    <div className={classes.gridcontainer}>
      <div className={classes.griditem}>
        <button>Step 1</button>
        <div className={classes.upperText}>
          <div>Download the App and Sign Up</div>
          <div>as a ZET agent</div>
        </div>
        <div className={classes.process}>
          <Process></Process>
        </div>
        <button className={classes.Google}>
          <img src="/googleplay.svg"></img>
        </button>
      </div>
      <div className={classes.griditem2}>
        <video
          className={classes.video}
          autoPlay
          controls={false}
          style={{ width: "400px", height: "500px" }}
        >
          <source className={classes.video} src="/Step3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>,
    <div className={classes.gridcontainer}>
      <div className={classes.griditem}>
        <button>Step 2</button>
        <div className={classes.upperText}>
          <div>Registor your customers and</div>
          <div>Recommend financial products</div>
        </div>
        <div className={classes.process}>
          <Process></Process>
        </div>
        <button className={classes.Google}>
          <img src="/googleplay.svg"></img>
        </button>
      </div>
      <div className={classes.griditem2}>
        <video
          className={classes.video}
          controls={false}
          style={{ width: "400px", height: "500px" }}
        >
          <source className={classes.video} src="/Step3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>,
    <div className={classes.gridcontainer}>
      <div className={classes.griditem}>
        <button>Step 1</button>
        <div className={classes.upperText}>
          <div>Start earning upto &#x20B9; 1 lakh</div>
          <div>as a ZET agent</div>
        </div>
        <div className={classes.process}>
          <Process></Process>
        </div>
        <button className={classes.Google}>
          <img src="/googleplay.svg"></img>
        </button>
      </div>
      <div className={classes.griditem2}>
        <video
          className={classes.video}
          controls={false}
          style={{ width: "400px", height: "500px" }}
        >
          <source className={classes.video} src="/Step3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>,
  ];
  return (
    <div className={classes.mainBlock}>
      <div className={classes.upperTriangle}></div>
      <div className={classes.head}>
        <div className={classes.innerHead}>
          <div>Start Earning in 3 Easy Steps</div>
          <div className={classes.innertext}>
            We have create the app the make your earning easy
          </div>
        </div>
      </div>
      {/* <div className={classes.slides}>
        <Carousel slides={slides} />
      </div>
      <div className={classes.lowerTriangle}></div> */}
    </div>
  );
};
export default Steps;
