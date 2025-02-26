import React from 'react';
import logo from "../assets/logo.png";
import './Navbar.css';

const Navbar = () => {
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      <ul className='nav-menu'>
        <li onClick={() => scrollToSection('profile')}>Home</li>
        <li onClick={() => scrollToSection('about-me')}>About Me</li>
        <li onClick={() => scrollToSection('Resume')}>Resume</li>
        <li onClick={() => scrollToSection('Skills')}>Skills</li>
        <li onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
