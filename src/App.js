import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import logo from "./assets/logo.png";
import wardrobe from "./assets/wardrobe.jpeg";
import rocket from "./assets/Rocket.gif";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.svg";

import "./styles.css";

const App = () => {
  return (
    <section className="page">
      <img className="logo" src={logo} width={300} height={150}></img>
      <div className="tagline1">connect . collect . customise</div>
      <div
        className="tagline2"
        style={{ position: "absolute", bottom: "2.25rem", left: "1rem" }}
      >
        #NFTREVOLUTION
      </div>
      <div
        className="tagline3"
        style={{ position: "absolute", bottom: "2.25rem", right: "1rem" }}
      >
        Your NFTs, Your Choice
      </div>

      {/* <img
        src={wardrobe}
        width={200}
        height={200}
        style={{ position: "relative", bottom: "10%" }}
      ></img> */}
      <div className="page__content">
        {/* <h1>Launching Soon</h1> */}
        <FlipClockCountdown
          className="flip-clock"
          to={1687430903000 + 86400000 * 25}
        />
      </div>
      {/* <div
        style={{
          display: "flex",
          position: "relative",
          top: "20%",
          fontSize: "1.75rem",
        }}
      >
        <span style={{}}>A revolution is coming</span>
        <img
          src={rocket}
          style={{ position: "relative", left: "1rem", bottom: "0.25rem" }}
        ></img>
      </div> */}
      <div className="social-icons">
        <a
          className="block m-0 text-white underline"
          href="https://twitter.com/thewardr0be"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={twitter}
            height={20}
            width={35}
            style={{ marginRight: "1rem" }}
          />
        </a>
        <a
          className="block ml-8"
          href="https://discord.gg/vCCm5gDv7w"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discord} height={20} width={35} />
        </a>
      </div>
    </section>
  );
};

export default App;
