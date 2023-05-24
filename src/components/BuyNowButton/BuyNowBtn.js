import React from "react";
import "../../styles/buynowbtn/buynow-btn.css";
import { Link } from "react-router-dom";

function BuyNowBtn() {
  return (
    <Link to={"/buy"} className="buynow-btn">
      <button className="buy-now-btn">BUY NOW</button>;
    </Link>
  );
}

export default BuyNowBtn;
