import React from 'react'
import './ReservationInputs.css'

 function ReservationInputs() {
  return (
    <div className='reservationInputs'>
      <div className='reservationInputs__wrapper'>
        <form action="#" className='reservationInputs-form'>
          <input type="text" placeholder='Name' />
          <input type="Email" placeholder='Email' />
          <input type="text" placeholder='Persons' />
          <input type="text" placeholder='Timing' />
          <input type="text" placeholder='Date' />
        </form>
      </div>
    </div>
  )
}

export default ReservationInputs
