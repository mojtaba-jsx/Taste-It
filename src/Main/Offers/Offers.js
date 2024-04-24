import React from 'react'
import './Offers.css'
import OffersInfo from './OffersInfo/OffersInfo'
import OffersBoxes from './OffersBoxes/OffersBoxes'
 function Offers() {
  return (
    <div className='offers'>
      <OffersInfo/>
      <OffersBoxes/>
      
    </div>
  )
}

export default Offers