import React from 'react'
import './OffersBoxes.css'
import OffersBox from './OffersBox/OffersBox'
 function OffersBoxes() {
  return (
    <div className='offersBoxes'>
      <OffersBox backGround ={'./images/offers-background1.png'} foodImage={'./images/burger-offers.png'} textColor={'white'} color={'#fff'} price={'$10'} name={'Chicken Burger'} text={'Chicken burger with the tasty toppings and leaves.'}/>

      <OffersBox backGround ={'./images/offers-background2.png'} foodImage={'./images/pizza-offers.png'} textColor={'black'} color={' #292E36'} price={'$9'} name={'Chicken Pizza'} text={'Pizza with multiple flavor and the toping are mixed.'}/>
    </div>
  )
}

export default OffersBoxes
