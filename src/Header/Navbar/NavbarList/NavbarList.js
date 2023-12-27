import React from 'react'
import './NavbarList.css'
 function NavbarList() {
  return (
    <div className='Navbar-List'>
      <ul className="NavbarList-list">
        <li className="NavbarList-list-item">
          <a href="#" className="NavbarList-list-link link-active">
            Home
          </a>
        </li>
        <li className="NavbarList-list-item">
          <a href="#" className="NavbarList-list-link">
            About Us
          </a>
        </li>
        <li className="NavbarList-list-item">
          <a href="#" className="NavbarList-list-link">
            Our Menu
          </a>
        </li>
        <li className="NavbarList-list-item">
          <a href="#" className="NavbarList-list-link">
            Pages
          </a>
        </li>
        <li className="NavbarList-list-item">
          <a href="#" className="NavbarList-list-link">
            Blog
          </a>
        </li>
        <li className="NavbarList-list-item">
          <a href="#" className="NavbarList-list-link">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavbarList
