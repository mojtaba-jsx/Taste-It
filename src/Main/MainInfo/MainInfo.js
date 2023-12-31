import React from 'react'
import MainInfoHours from './MainInfoHours/MainInfoHours'
import MainInfoLocation from './MainInfoLocation/MainInfoLocation'
import MainInfoReservation from './MainInfoReservation/MainInfoReservation'


 function MainInfo() {
  return (
    <div>
        <MainInfoHours/>
        <MainInfoLocation/>
        <MainInfoReservation/>
    </div>
  )
}
 
export default MainInfo
