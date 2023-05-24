import React from "react";
import "../../styles/outro/outro.css";
import BuyNowBtn from "../BuyNowButton/BuyNowBtn";

function Outro() {
  return (
    <div className="outro-container">
      <p className="outro-text">Get Your Hellabright Flashlight Now!</p>
      <BuyNowBtn />
    </div>
  );
}

export default Outro;
