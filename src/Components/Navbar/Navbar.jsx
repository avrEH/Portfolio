import React from 'react'
import './Navbar.css'
import logo from '../../assets/Avr.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" style={{ height: "60px", width: "auto" }}/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar