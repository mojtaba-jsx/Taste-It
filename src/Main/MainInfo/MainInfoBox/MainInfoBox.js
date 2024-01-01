import React from "react";
import "./MainInfoBox.css";
function MainInfoBox(props) {
  return (
    <div className="mainInfoLocation">
      <div className="mainInfoLocation__wrapper">
        <div className="mainInfoLocation__left">
          <img
            className="mainInfoLocation__left-image"
            src={props.image}
            alt="location"
          />
        </div>
        {/* ! /////////////////////////////// */}
        <div className="mainInfoLocation__right">
          <span className="mainInfoLocation__right-title">{props.title}</span>
          <span className="mainInfoLocation__right-text">
            {props.text}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainInfoBox;
