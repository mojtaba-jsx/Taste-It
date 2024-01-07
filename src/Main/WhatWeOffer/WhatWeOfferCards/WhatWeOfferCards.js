import React from 'react'
import './WhatWeOfferCards.css'

import WhatWeOfferCard from './WhatWeOfferCard/WhatWeOfferCard'
 function WhatWeOfferCards() {
  return (
    <div className='whatWeOfferCards'>
      <WhatWeOfferCard image={'./images/what-we-offer-1.png'} text={'Opened 24/7'}/>
      <WhatWeOfferCard image={'./images/what-we-offer-2.png'} text={'Special Menus'}/>
      <WhatWeOfferCard image={'./images/what-we-offer-3.png'} text={'Home Delivery'}/>
    </div>
  )
}

export default WhatWeOfferCards
