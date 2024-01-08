import React from 'react'
import './FooterTopContact.css'
 function FooterTopContact() {
  return (
    <div className='footerTopContact'>
      <span className="footerTopContact-title">Contact</span>
      <span className="footerTopContact-address">5 Rue Dalou, 75015 Paris</span>
      <span className="footerTopContact-number">
        <a href="#" className="footerTopContact-number-link">+123 456 789</a>
      </span>
      <span className="footerTopContact-email">
        <a href="#" className="footerTopContact-email-link">
        josefin@mail.com
        </a>
      </span>
    </div>
  )
}

export default FooterTopContact