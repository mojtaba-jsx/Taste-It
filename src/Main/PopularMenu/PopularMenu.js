import React from 'react'
import './PopularMenu.css'
import PopularMenuInfo from './PopularMenuInfo/PopularMenuInfo'
import PopularMenuCards from './PopularMenuCards/PopularMenuCards'
import PopularMenuButton from './PopularMenuButton/PopularMenuButton'
function PopularMenu() {
  return (
    <div>
      <PopularMenuInfo/>
      <PopularMenuCards/>
      <PopularMenuButton/>
    </div>
  )
}

export default  PopularMenu
