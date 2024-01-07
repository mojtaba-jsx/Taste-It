import React from 'react'
import MainInfo from './MainInfo/MainInfo'
import DeliciousStory from './DeliciousStory/DeliciousStory'
import Menu from './Menu/Menu'
import Testimonial from './Testimonial/Testimonial'
import MainImage from './MainImage/MainImage'
import Offers from './Offers/Offers'
import PopularMenu from './PopularMenu/PopularMenu'
import WhatWeOffer from './WhatWeOffer/WhatWeOffer'
 function Main() {
  return (
    <div className='main-section'>
      <MainInfo/> 
      <DeliciousStory/>
      <Menu/>
      <Testimonial/>
      <MainImage/>
      <Offers/>
      <PopularMenu/>
      <WhatWeOffer/>
    </div>
  )
}


export default Main