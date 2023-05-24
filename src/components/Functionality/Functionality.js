import React from "react";
import flashlightfunctionality from "../../assets/images/flashlight-functionality.png";
import "../../styles/functionality/functionality.css";

function Functionality() {
  return (
    <div className="functionality-container">
      <img
        src={flashlightfunctionality}
        alt="flashlight in terrain"
        className="functionality-img"
      ></img>
      <div className="functionality-text-container">
        <p className="functionality-text-title">Versatile Functionality</p>
        <p className="functionality-text-description">
          The Hellabright Flashlight offers more than just incredible
          brightness. With adjustable focus and multiple lighting modes
          including high, low, strobe, and SOS, it adapts to various situations
          effortlessly. Whether you need a wide beam for broad coverage or a
          focused beam for long-range visibility, the Hellabright Flashlight
          delivers the versatility you demand.
        </p>
      </div>
    </div>
  );
}

export default Functionality;
