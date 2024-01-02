import React from 'react'
import './DeliciousStory.css'
import DeliciousStoryLeft from './DeliciousStoryLeft/DeliciousStoryLeft'
import DeliciousStoryRight from './DeliciousStoryRight/DeliciousStoryRight'


 function DeliciousStory() {
  return (
    <div className='deliciousStory'>
      <DeliciousStoryLeft/>
      <DeliciousStoryRight/>
      
    </div>
  )
}


export default DeliciousStory