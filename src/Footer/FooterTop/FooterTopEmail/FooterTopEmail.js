import React from "react";
import "./FooterTopEmail.css";
function FooterTopEmail() {
  return (
    <div className="footerTopEmail">
      <div className="footerTopEmail-box">
        <input
          type="text"
          className="footerTopEmail-input"
          placeholder="Email"
        />
        <button className="footerTopEmail-btn">Subscribe</button>
      </div>
    </div>
  );
}

export default FooterTopEmail;
