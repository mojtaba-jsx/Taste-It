import React from 'react'
import './Landing.css'

import LandingLeftSection from './LandingLeftSection/LandingLeftSection'
import LandingRightSection from './LandingRightSection/LandingRightSection'


 function Landing() {
  return (
    <div>
        <LandingLeftSection/>
        <LandingRightSection/>
    </div>
  )
}

export default Landing
