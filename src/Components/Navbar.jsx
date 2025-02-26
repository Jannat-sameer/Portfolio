import React from 'react';
import logo from "../assets/logo.png";
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" /> 
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About me</li>
        <li>Services </li>
        <li>Contact</li>
      </ul>
      
    </div>
  )
}

export default Navbar
