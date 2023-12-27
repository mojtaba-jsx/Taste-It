import React from 'react'
import './Header.css'
import BrandSection from './BrandSection/BrandSection'
import Navbar from './Navbar/Navbar'

 function Header() {
  return (
    <div className='Header-section'>
        <BrandSection/>
        <Navbar/>
        
    </div>
  )
}


export default  Header