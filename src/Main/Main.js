import React from 'react'
import MainInfo from './MainInfo/MainInfo'
import DeliciousStory from './DeliciousStory/DeliciousStory'
import Menu from './Menu/Menu'
 function Main() {
  return (
    <div className='main-section'>
      <MainInfo/> 
      <DeliciousStory/>
      <Menu/>
    </div>
  )
}


export default Main