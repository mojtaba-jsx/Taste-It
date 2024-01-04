import React from 'react'
import './Testimonial.css'

import TestimonialInfo from './TestimonialInfo/TestimonialInfo'
import TestimonialCards from './TestimonialCards/TestimonialCards'

 function Testimonial() {
  return (
    <div className='testimonial'>
      <TestimonialInfo/>
      <TestimonialCards/>
    </div>
  )
}

export default Testimonial
