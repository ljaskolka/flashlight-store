import React from "react";
import logo from "../../assets/images/logo.png";
import "../../styles/header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <Link to={"/"}>
        <img src={logo} className="header-logo" alt="logo"></img>
      </Link>
      <div className="header-links-container">
        <Link to={"/"} className="header-link">
          HOME
        </Link>
        <Link to={"/buy"} className="header-link">
          BUY
        </Link>
      </div>
    </div>
  );
}

export default Header;
