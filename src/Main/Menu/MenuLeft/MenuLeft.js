import React from 'react'
import './MenuLeft.css'

import MenuLeftInfo from './MenuLeftInfo/MenuLeftInfo'
import MenuLeftImage from './MenuLeftImage/MenuLeftImage'
import MenuLeftButton from './MenuLeftButton/MenuLeftButton'
function MenuLeft() {
  return (
    <div>
        <MenuLeftInfo/>
        <MenuLeftImage/>
        <MenuLeftButton/>
    </div>
  )
}

export default MenuLeft
