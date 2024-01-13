import React from 'react'
import './PopularMenuCards.css'
import PopularMenuCard from './PopularMenuCard/PopularMenuCard'
 function PopularMenuCards() {
  return (
    <div className='popularMenuCards'>
      <PopularMenuCard image={'./images/PopularMenu/popularMenu-1.png'} name={'Chicken Manjoori'} price={'$15'} text={'Dish relished by all age groups as a starter dish at parties.'}/>
      <PopularMenuCard image={'./images/PopularMenu/popularMenu-2.png'} name={'Hotdog'} price={'$10'} text={'Grilled sausage served in the slit of a partially sliced bun.'}/>
      <PopularMenuCard image={'./images/PopularMenu/popularMenu-3.png'} name={'Fresh Salmon'} price={'$5'} text={'Beat the health blues with our Super Immune Blue Juice Recipe.'}/>
      <PopularMenuCard image={'./images/PopularMenu/popularMenu-4.png'} name={'Veg Burger'} price={'$10'} text={'Burgers may be made from ingredients like beans.'}/>
    </div>
  )
}

export default PopularMenuCards
