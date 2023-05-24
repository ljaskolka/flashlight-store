import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import useMousePosition from "../hooks/useMousePosition/useMousePosition.js";
import "../styles/landing-page/landing-page.css";

import flashlight from "../assets/images/cursor-flashlight.png";
import switchmain from "../assets/images/switch.png";
import switchbtn from "../assets/images/switch-btn.png";

function LandingPage() {
  const navigate = useNavigate();

  const { x, y } = useMousePosition();

  const switchBtnRef = useRef(null);
  const opacityRef = useRef(null);
  const opacityRef2 = useRef(null);
  const isSwitchBtnHovered = useRef(false);

  const handleSwitchBtnHover = () => {
    if (!isSwitchBtnHovered.current) {
      gsap.to(switchBtnRef.current, { x: "+=10", duration: 0.4 });
      isSwitchBtnHovered.current = true;
    }
  };

  const handleSwitchBtnLeave = () => {
    if (isSwitchBtnHovered.current) {
      gsap.to(switchBtnRef.current, { x: 0, duration: 0.4 });
      isSwitchBtnHovered.current = false;
    }
  };

  const handleSwitchBtnClick = () => {
    gsap.to(switchBtnRef.current, { x: "+=110", duration: 0.4 });
    gsap.to(opacityRef.current, { opacity: 0, duration: 0.4 });
    gsap.to(opacityRef2.current, { opacity: 0, duration: 0.4 });
    isSwitchBtnHovered.current = false;
    setTimeout(() => {
      navigate("/home");
    }, 350);
  };

  return (
    <div className="landing-page-container">
      <img
        className="flashlight-cursor"
        alt="flashlight cursor"
        src={flashlight}
        style={{
          transform: `translate(${x - 200}px, ${y - 200}px)`,
        }}
      ></img>

      <div className="switch-container" ref={opacityRef}>
        <img
          className="switch-main"
          src={switchmain}
          alt="switch"
          style={{ left: x, top: y }}
        />
        <img
          className="switch-btn"
          ref={switchBtnRef}
          src={switchbtn}
          onMouseEnter={handleSwitchBtnHover}
          onMouseLeave={handleSwitchBtnLeave}
          onClick={handleSwitchBtnClick}
          alt="switch"
        />
      </div>
      <p className="switch-description" ref={opacityRef2}>
        LET THERE BE LIGHT!
      </p>
    </div>
  );
}

export default LandingPage;
