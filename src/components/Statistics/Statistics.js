import React from "react";
import ellipse from "../../assets/images/ellipse.png";
import hoursellipse from "../../assets/images/hours-ellipse.png";
import brightnessellipse from "../../assets/images/brightness-ellipse.png";
import waterproofellipse from "../../assets/images/waterproof-ellipse.png";
import distancesellipse from "../../assets/images/distance-ellipse.png";
import "../../styles/statistics/statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="statistics-container">
        <div className="hours-container">
          <p className="hours-text statistics-text">Hours of Work</p>
          <img
            className="hours-img statistics-img"
            src={hoursellipse}
            alt="120 hours of work"
          ></img>
        </div>
        <div className="brightness-container">
          <p className="brightness-text statistics-text">Brightness</p>
          <img
            className="brightness-img statistics-img"
            src={brightnessellipse}
            alt="2000 lumens"
          ></img>
        </div>
        <div className="beam-container">
          <p className="beam-text statistics-text">Beam Distance</p>
          <img
            className="beam-img statistics-img"
            src={distancesellipse}
            alt="300 meters beam"
          ></img>
        </div>
        <div className="waterproof-container">
          <p className="waterproof-text statistics-text">Waterproof Rating</p>
          <img
            className="waterproof-img statistics-img"
            src={waterproofellipse}
            alt="ipx8 rating"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
