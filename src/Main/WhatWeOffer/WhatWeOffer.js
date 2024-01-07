import React from 'react'
import './WhatWeOffer.css'

import WhatWeOfferInfo from './WhatWeOfferInfo/WhatWeOfferInfo'
import WhatWeOfferCards from './WhatWeOfferCards/WhatWeOfferCards'
 function WhatWeOffer() {
  return (
    <div className='whatWeOffer'>
      <WhatWeOfferInfo/>
      <WhatWeOfferCards/>
    </div>
  )
}


export default WhatWeOffer