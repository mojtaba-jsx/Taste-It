import React from 'react'
import './Navbar.css'
import NavbarList from './NavbarList/NavbarList'
import NavbarIcons from './NavbarIcons/NavbarIcons'

function Navbar() {
  return (
    <div>
      <NavbarIcons/>
      <NavbarList/>
    </div>
  )
}

export default Navbar