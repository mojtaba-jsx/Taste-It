import React from "react";
import "./TestimonialCard.css";
function TestimonialCard(props) {
  return (
    <div className="testimonialCard">
      <div className="testimonialCard__wrapper">
        <div className="testimonialCard-top">
          <div className="testimonialCard-top-right">
            <img
              src={props.image}
              alt="image"
              className="testimonialCard-top-right-image"
            />
            <span className="testimonialCard-top-right-comma">
              <svg
                width="10"
                height="10"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.52117 10.5804C3.22247 10.2794 3.83463 9.82201 4.35764 9.20807C4.88065 8.59414 5.19564 7.96816 5.30262 7.33015C5.36205 6.99309 5.39177 6.70418 5.39177 6.46342C5.39177 6.18654 5.36205 5.95782 5.30262 5.77725C4.74395 6.36711 4.0367 6.66204 3.18087 6.66204C2.32504 6.66204 1.62968 6.40925 1.09478 5.90365C0.559882 5.39806 0.292435 4.69986 0.292435 3.80905C0.292436 2.96639 0.577712 2.28023 1.14827 1.75056C1.70694 1.22089 2.42013 0.956055 3.28785 0.956055C4.4765 0.956055 5.34422 1.38942 5.891 2.25615C6.14062 2.62933 6.33675 3.08677 6.47939 3.62848C6.62203 4.18222 6.69334 4.74801 6.69334 5.32583C6.69334 6.58982 6.37241 7.74546 5.73053 8.79276C5.08866 9.84007 4.13179 10.6586 2.85993 11.2485L2.52117 10.5804ZM10.0454 10.5804C10.7467 10.2794 11.3588 9.82201 11.8818 9.20807C12.4048 8.59414 12.7198 7.96816 12.8268 7.33015C12.8862 6.99309 12.916 6.70418 12.916 6.46342C12.916 6.18654 12.8862 5.95782 12.8268 5.77725C12.2681 6.36711 11.5609 6.66204 10.7051 6.66204C9.84922 6.66204 9.15386 6.40925 8.61897 5.90365C8.08407 5.39806 7.81662 4.69986 7.81662 3.80905C7.81662 2.96639 8.1019 2.28023 8.67245 1.75056C9.23112 1.22089 9.94432 0.956055 10.812 0.956055C12.0007 0.956055 12.8684 1.38942 13.4152 2.25615C13.6648 2.62933 13.8609 3.08677 14.0036 3.62848C14.1462 4.18222 14.2175 4.74801 14.2175 5.32583C14.2175 6.58982 13.8966 7.74546 13.2547 8.79276C12.6128 9.84007 11.656 10.6586 10.3841 11.2485L10.0454 10.5804Z"
                  fill="#292E36"
                />
              </svg>
            </span>
          </div>

          <div className="testimonialCard-top-left">
            <span className="testimonialCard-top-left-name">{props.name}</span>
            <span className="testimonialCard-top-left-text">{props.city}</span>
          </div>
        </div>

        <div className="testimonialCard-line">
          <svg
            className="testimonialCard-line-svg"
            width="340"
            height="2"
            viewBox="0 0 464 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.65625" width="464" height="1" fill="#797E89" />
          </svg>
        </div>

        <div className="testimonialCard-bottom">
          <p className="testimonialCard-bottom-text">
          {props.comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
