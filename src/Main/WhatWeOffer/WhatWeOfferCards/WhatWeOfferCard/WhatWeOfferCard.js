import React from 'react'
import './WhatWeOfferCard.css'
 function WhatWeOfferCard(props) {
  return (
    <div className='whatWeOfferCard'>
      <div className='WhatWeOfferCard-top'>
        <img src={props.image} alt="image" />
      </div>
      <div className='WhatWeOfferCard-bottom'>
      {props.text}
      </div>
    </div>
  )
}

export default WhatWeOfferCard
