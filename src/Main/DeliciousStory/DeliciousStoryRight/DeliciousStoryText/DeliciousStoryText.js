import React from 'react'
import './DeliciousStoryText.css'
 function DeliciousStoryText(props) {
  return (
    <div>
      <p className="deliciousStoryText">
     {props.text} 
      </p>
    </div>
  )
}


export default DeliciousStoryText