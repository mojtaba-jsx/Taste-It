import React from 'react'
import './BrandSection.css'
import ReserveBtn from './ReserveBtn/ReserveBtn'
import Logo from './Logo/Logo'
import CallInfo from './CallInfo/CallInfo'
 function BrandSection() {
  return (
    <div className='BrandSection'>
        <CallInfo/>
        <Logo/>
        <ReserveBtn/>
    </div>
  )
}

export default BrandSection
