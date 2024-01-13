import React from 'react'
import './MainInfo.css'
import MainInfoBox from './MainInfoBox/MainInfoBox'



 function MainInfo() {
  return (
    <div className='mainInfo'>
        <MainInfoBox text={'Riverside 25, San Diego, California'} title={'Locate Us'} image={'./images/MainInfo/location.png'}/>
        <MainInfoBox text={'Mon To Fri 9:00 AM - 9:00 PM'} title={'Open Hours'} image={'./images/MainInfo/hours.png'}/>
        <MainInfoBox text={'restaurantate@gmail.com'} title={'Reservation'} image={'./images/MainInfo/reservation.png'}/>
    </div>
  )
}
 
export default MainInfo
