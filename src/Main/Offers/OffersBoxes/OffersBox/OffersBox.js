import React from "react";
import "./OffersBox.css";
function OffersBox(props) {
  return (
    <div className="offersBox">
      <img src={props.backGround} alt="" className="offersBox-image" />
      <div className="offersBox__wrapper">
      <div className="offersBox__left">
          <div className="offersBox__left-top">
            <span className="offersBox__left-top-text">Only {props.price}</span>
            <svg
              className="offersBox__left-top-svg"
              width="151"
              height="96"
              viewBox="0 0 151 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69.8347 2.50826C72.3557 -0.0255384 78.2747 -0.0255384 80.7957 2.50826C82.9086 4.63198 87.5898 5.05115 90.578 3.38415C94.1431 1.39528 99.8225 2.4338 101.095 5.30723C102.162 7.71573 106.463 8.93916 110.085 7.86397C114.405 6.58115 119.385 8.57403 119.305 11.5544C119.24 14.0524 122.813 15.9811 126.774 15.5848C131.501 15.1119 135.377 17.8978 133.953 20.7435C132.76 23.1288 135.315 25.6064 139.296 25.9211C144.044 26.2966 146.503 29.6496 143.849 32.1303C141.625 34.2094 142.957 37.0354 146.634 38.0356C151.019 39.2289 151.862 42.8775 148.194 44.792C145.119 46.3968 145.119 49.342 148.194 50.9467C151.862 52.8612 151.019 56.5098 146.634 57.7032C142.957 58.7034 141.625 61.5293 143.849 63.6085C146.503 66.0891 144.044 69.4421 139.296 69.8176C135.315 70.1324 132.76 72.6101 133.953 74.9953C135.377 77.841 131.501 80.6271 126.774 80.1538C122.813 79.7574 119.24 81.6867 119.305 84.1842C119.385 87.1648 114.405 89.1574 110.085 87.8747C106.463 86.7993 102.162 88.0232 101.095 90.4318C99.8225 93.3053 94.1431 94.3438 90.578 92.3542C87.5898 90.6872 82.9086 91.107 80.7957 93.2307C78.2747 95.7644 72.3557 95.7644 69.8347 93.2307C67.7218 91.107 63.0406 90.6872 60.0524 92.3542C56.4873 94.3438 50.808 93.3053 49.5355 90.4318C48.4689 88.0232 44.1669 86.7993 40.5457 87.8747C36.2252 89.1574 31.2457 87.1648 31.3248 84.1842C31.391 81.6867 27.8168 79.7574 23.8557 80.1538C19.13 80.6271 15.2538 77.841 16.6779 74.9953C17.8715 72.6101 15.3145 70.1324 11.3347 69.8176C6.58649 69.4421 4.1276 66.0891 6.78144 63.6085C9.00569 61.5293 7.67332 58.7034 3.99702 57.7032C-0.388968 56.5098 -1.23134 52.8612 2.43714 50.9467C5.512 49.342 5.512 46.3968 2.43714 44.7921C-1.23134 42.8775 -0.388968 39.2289 3.99702 38.0356C7.67332 37.0354 9.00569 34.2094 6.78144 32.1303C4.1276 29.6496 6.58649 26.2966 11.3347 25.9211C15.3145 25.6064 17.8715 23.1288 16.6779 20.7435C15.2538 17.8978 19.13 15.1119 23.8557 15.5848C27.8168 15.9811 31.391 14.0524 31.3248 11.5544C31.2457 8.57403 36.2252 6.58115 40.5457 7.86397C44.1669 8.93916 48.4689 7.71573 49.5355 5.30723C50.808 2.43379 56.4873 1.39528 60.0524 3.38415C63.0406 5.05115 67.7218 4.63198 69.8347 2.50826Z"
                fill={props.color}
              />
            </svg>
          </div>

          <div className="offersBox__left-bottom">
            <span className="offersBox__left-bottom-offer">
              50% Offer Going
            </span>
            <h6 className="offersBox__left-bottom-title">{props.name}</h6>
            <p className="offersBox__left-bottom-text">
              {props.text}
            </p>
          </div>
        </div>

        <div className="offersBox__right">
          <img src={props.foodImage} alt="image" />
        </div>
      </div>

    </div>
  );
}

export default OffersBox;