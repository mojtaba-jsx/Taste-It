import React from 'react'
import MainInfo from './MainInfo/MainInfo'
import DeliciousStory from './DeliciousStory/DeliciousStory'
import Menu from './Menu/Menu'
import Testimonial from './Testimonial/Testimonial'
import MainImage from './MainImage/MainImage'
import Offers from './Offers/Offers'
 function Main() {
  return (
    <div className='main-section'>
      <MainInfo/> 
      <DeliciousStory/>
      <Menu/>
      <Testimonial/>
      <MainImage/>
      <Offers/>
    </div>
  )
}


export default Main