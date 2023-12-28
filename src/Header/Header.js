import React from 'react'
import './Header.css'
import BrandSection from './BrandSection/BrandSection'
import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
 function Header() {
  return (
    <div className='Header-section'>
        <BrandSection/>
        <Navbar/>
        <Landing/>
        
    </div>
  )
}


export default  Header