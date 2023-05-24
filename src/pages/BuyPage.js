import React from "react";
import Header from "../components/Header/Header";
import "../styles/buy-page/buy-page.css";

function BuyPage() {
  return (
    <div className="buy-page-container">
      <Header />
      <div className="buy-text-container">
        <p>Don't Miss Out on Our Exclusive Limited Drop!</p>
        <p>
          Get back here on <span>June 10th, 0:00 CET.</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default BuyPage;
