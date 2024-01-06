import React from "react";
import "./PopularMenuCard.css";
function PopularMenuCard(props) {
  return (
    <div className="popularMenuCard">
      <div className="popularMenuCard__wrapper">
        <div className="popularMenuCard__image">
          <img
            src={props.image}
            alt=""
            className="popularMenuCard__image-img"
          />
        </div>

        <div className="popularMenuCard__title-price">
          <span className="popularMenuCard__title">{props.name}</span>
          <span className="popularMenuCard__price">{props.price}</span>
        </div>

        <div className="popularMenuCard__line">
          <svg
            className="popularMenuCard__line-svg"
            width="280"
            height="2"
            viewBox="0 0 464 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.65625" width="464" height="1" fill="#797E89" />
          </svg>
        </div>

        <div className="popularMenuCard__text">
          <p className="popularMenuCard__text-info">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopularMenuCard;
