import React from 'react'
import './DeliciousStoryTitle.css'

 function DeliciousStoryTitle(props) {
  return (
    <div>
      <h3 className='deliciousStoryTitle'>
      {props.title}
      </h3>
    </div>
  )
}

export default DeliciousStoryTitle
