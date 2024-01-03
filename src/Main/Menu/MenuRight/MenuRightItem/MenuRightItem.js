import React from "react";
import "./MenuRightItem.css";
function MenuRightItem(props) {
  return (
    <div className="menuRightItem">
      <div className="MenuRightItem-left">
        <img
          src={props.image}
          alt="image"
          className="MenuRightItem-left-image"
        />
      </div>

      <div className="MenuRightItem-right">
        <div className="MenuRightItem-right-top">
          <h4 className="MenuRightItem-right-top-title">
            {props.name}
          </h4>
        </div>

        <div className="MenuRightItem-right-bottom">
          <p className="MenuRightItem-right-bottom-text">
            {props.info}
          </p>
          <svg
          className="MenuRightItem-right-bottom-line"
            width="261"
            height="3"
            viewBox="0 0 261 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.65625"
              y="0.65625"
              width="259.734"
              height="2"
              fill="#AAAAAA"
            />
          </svg>
          <span className="MenuRightItem-right-bottom-price">{props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default MenuRightItem;
