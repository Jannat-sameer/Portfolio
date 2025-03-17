import React, { createContext } from "react";
import { useTheme } from "../Context/ThemeContext";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navbar ${theme}`}>
      <img src={logo} alt="Logo" />

      <ul className="nav-menu">
        <li onClick={() => scrollToSection("profile")}>Home</li>
        <li onClick={() => scrollToSection("about-me")}>About Me</li>
        <li onClick={() => scrollToSection("Resume")}>Resume</li>
        <li onClick={() => scrollToSection("Skills")}>Skills</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

     
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default Navbar;

export const ThemeContext=createContext();
