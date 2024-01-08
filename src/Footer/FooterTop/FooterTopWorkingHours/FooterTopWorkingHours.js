import React from "react";
import "./FooterTopWorkingHours.css";
function FooterTopWorkingHours() {
  return (
    <div className="footerTopWorkingHours">
      <span className="footerTopWorkingHours-title">Working Hours</span>

      <span className="footerTopWorkingHours-mon">
        7.00am – 6.00pm
        <a href="#" className="footerTopWorkingHours-mon-link">
          Mon – Fri:
        </a>
      </span>

      <span className="footerTopWorkingHours-sat">
        7.00am – 6.00pm
        <a href="#" className="footerTopWorkingHours-link">
          Sat:
        </a>
      </span>

      <span className="footerTopWorkingHours-sun">
        8.00am – 6.00pm
        <a href="#" className="footerTopWorkingHours">
          Sun:
        </a>
      </span>
      
    </div>
  );
}

export default FooterTopWorkingHours;
