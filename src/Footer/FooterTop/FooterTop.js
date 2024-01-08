import React from "react";
import "./FooterTop.css";

import FooterTopHashtTag from "./FooterTopHashtTag/FooterTopHashtTag";
import FooterTopLogo from "./FooterTopLogo/FooterTopLogo";
import FooterTopSocials from "./FooterTopSocials/FooterTopSocials";
import FooterTopContact from "./FooterTopContact/FooterTopContact";
import FooterTopEmail from "./FooterTopEmail/FooterTopEmail";
import FooterTopWorkingHours from "./FooterTopWorkingHours/FooterTopWorkingHours";
function FooterTop() {
  return (
    <div className="footerTop">
      <div className="footerTop-top">
        <FooterTopHashtTag />
        <FooterTopLogo />
        <FooterTopSocials />
      </div>

      <div className="footerTop-bottom">
        <FooterTopContact />
        <FooterTopEmail />
        <FooterTopWorkingHours />
      </div>
    </div>
  );
}

export default FooterTop;
