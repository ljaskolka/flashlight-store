import React from "react";
import flashlightdurability from "../../assets/images/flashlight-durability.png";
import "../../styles/durability/durability.css";

function Durability() {
  return (
    <div className="durability-container">
      <div className="durability-text-container">
        <p className="durability-text-title">Superior Durability</p>
        <p className="durability-text-description">
          Built to withstand the toughest environments, the Hellabright
          Flashlight is constructed with high-quality materials, making it
          exceptionally durable. Its rugged design ensures reliable performance
          even in extreme conditions, ensuring it can handle any adventure you
          embark upon.
        </p>
      </div>
      <img
        src={flashlightdurability}
        alt="flashlight in terrain"
        className="durability-img"
      ></img>
    </div>
  );
}

export default Durability;
