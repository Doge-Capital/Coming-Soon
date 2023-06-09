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
      <img
        src={logo}
        width={300}
        height={150}
        style={{ position: "absolute", top: "-1rem", left: "-1rem" }}
      ></img>
      <div style={{ position: "absolute", top: "2.25rem", right: "1rem" }}>
        connect . collect . customise
      </div>
      <div style={{ position: "absolute", bottom: "2.25rem", left: "1rem" }}>
        #NFTREVOLUTION
      </div>
      <div style={{ position: "absolute", bottom: "2.25rem", right: "1rem" }}>
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
          to={new Date().getTime() + 700 * 3600 * 1000 + 5000}
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
      <div style={{ display: "flex", position: "absolute", bottom: "2rem" }}>
        <a
          className="block m-0 text-white underline"
          href="https://twitter.com/thedogecapital"
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
