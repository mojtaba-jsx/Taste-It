import React from 'react'
import './Landing.css'

import LandingLeftSection from './LandingLeftSection/LandingLeftSection'
import LandingRightSection from './LandingRightSection/LandingRightSection'


 function Landing() {
  return (
    <div className='landing'>
        <LandingLeftSection/>
        <LandingRightSection/>
    </div>
  )
}

export default Landing
