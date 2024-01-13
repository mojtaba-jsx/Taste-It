import React from 'react'
import './TestimonialCards.css'
import TestimonialCard from './TestimonialCard/TestimonialCard'
 function TestimonialCards() {
  return (
    <div className='testimonialCards'>
      <TestimonialCard image={'./images/Testimonial/user-1.png'} name={'Natasha D'} city={'Newyork'} comment={'They known for its fabulous taste and food. Anywhere you go your hunger is satisfied. The best chicken & burgers those are yummy.'}/>
      <TestimonialCard image={'./images/Testimonial/user-2.png'} name={'Jack Sparrow'} city={'Salt Lake City'} comment={'I have visited this fantastic restaurant on several occasions, food is absolutely outstanding & attention to detail is in league of its own.'}/>
      <TestimonialCard image={'./images/Testimonial/user-3.png'} name={'Martin'} city={'San Diego'} comment={'Perfectly known for its fabulous taste and food. Anywhere your hunger is satisfied. They give best fried chicken and burgers those are yummy.'}/>
    </div>
  )
}

export default TestimonialCards
