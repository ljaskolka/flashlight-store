import React from "react";
import "../../styles/footer/footer.css";

function Footer() {
  const emailSubmit = () => {};

  return (
    <div className="footer-container">
      <p className="footer-text">
        Light Up Your Inbox with Exclusive Newsletter Updates
      </p>
      <form className="email-form" id="email-form">
        <input
          type="email"
          id="email-submit"
          placeholder="Your e-mail"
          className="email-input"
          required
        ></input>
        <button type="button" className="submit-button" onClick={emailSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Footer;
