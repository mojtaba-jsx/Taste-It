import React from 'react'
import './Menu.css'

import MenuLeft from './MenuLeft/MenuLeft'
import MenuRight from './MenuRight/MenuRight'

 function Menu() {
  return (
    <div className='menu'>
        <MenuLeft/>
        <MenuRight/>

    </div>
  )
}

export default Menu
