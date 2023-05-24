import React from "react";
import flashlightintro from "../../assets/images/flashlight-intro.png";
import "../../styles/intro/intro.css";
import BuyNowBtn from "../BuyNowButton/BuyNowBtn";

function Intro() {
  return (
    <div className="intro-container">
      <img src={flashlightintro} alt="flashlight" className="intro-img"></img>
      <div className="intro-text-container">
        <p className="intro-text-title">The Ultimate Illuminator</p>
        <p className="intro-text-description">
          Unleash the Power of Light with the Hellabright Flashlight. Illuminate
          your path, conquer the darkness, and be prepared for any adventure.
          It's time to shine bright with the brightest flashlight on the market.
        </p>
        <BuyNowBtn />
      </div>
    </div>
  );
}

export default Intro;
