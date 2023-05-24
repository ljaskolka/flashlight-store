import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/home-page/home-page.css";
import Header from "../components/Header/Header.js";
import lightbackground from "../assets/images/light-background.png";
import Intro from "../components/Intro/Intro";
import Durability from "../components/Durability/Durability";
import Functionality from "../components/Functionality/Functionality";
import Statistics from "../components/Statistics/Statistics";
import Outro from "../components/Outro/Outro";
import Footer from "../components/Footer/Footer";

function HomePage() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const backgroundElement = backgroundRef.current;

    gsap.fromTo(
      backgroundElement,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          backgroundElement.style.backgroundImage = `url(${lightbackground})`;
        },
      }
    );
  }, []);

  return (
    <div className="home-page transitioning-background" ref={backgroundRef}>
      <Header />
      <Intro />
      <Durability />
      <Functionality />
      <Statistics />
      <Outro />
      <Footer />
    </div>
  );
}

export default HomePage;
