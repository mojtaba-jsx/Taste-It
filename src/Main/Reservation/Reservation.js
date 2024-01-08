import React from "react";
import "./Reservation.css";

import ReservationInfo from "./ReservationInfo/ReservationInfo";
import ReservationInputs from "./ReservationInputs/ReservationInputs";
import ReservationButton from "./ReservationButton/ReservationButton";
function Reservation() {
  return (
    <div className="reservation">
      <div className="reservation__wrapper">
        <ReservationInfo />
        <ReservationInputs />
        <ReservationButton />
      </div>
    </div>
  );
}

export default Reservation;
