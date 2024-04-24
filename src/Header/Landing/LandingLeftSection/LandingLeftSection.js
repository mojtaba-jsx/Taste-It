import React from 'react'
import './LandingLeftSection.css'

import LandingTitle from './LandingTitle/LandingTitle'
import LandingText from './LandingText/LandingText'
import LandingButton from './LandingButton/LandingButton'


 function LandingLeftSection() {
  return (
    <div className='landing-left-section'>
        <LandingTitle/>
        <LandingText/>
        <LandingButton/>
    </div>
  )
}

export default LandingLeftSection
