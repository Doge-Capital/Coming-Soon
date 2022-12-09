import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./styles.css";

// import video
import videoBg from "../src/assets/video.mp4";

const App = () => {
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="page__content">
        <h1>Launching Soon</h1>
        <FlipClockCountdown
          className="flip-clock"
          to={new Date().getTime() + 700 * 3600 * 1000 + 5000}
        />
      </div>
    </section>
  );
};

export default App;
