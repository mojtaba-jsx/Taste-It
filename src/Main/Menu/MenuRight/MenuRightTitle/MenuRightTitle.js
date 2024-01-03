import React from 'react'
import './MenuRightTitle.css'
 function MenuRightTitle(props) {
  return (
    <div>
      <h2 className='menuRightTitle-title'>
      {props.name}
      </h2>
    </div>
  )
}

export default MenuRightTitle
