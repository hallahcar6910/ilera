import { useState } from "react";
import "./NavBar.css";
import { FaUser, FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { Link } from 'react-scroll'; // Import smooth scroll

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  // Toggle mobile menu open/close
  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="ai">ILERA</span>AI
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu items with smooth scrolling */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li className="navbar-item">
          <Link to="about-us" smooth={true} duration={500} onClick={toggleMenu}>About us</Link>
        </li>
        <li className="navbar-item">
          <Link to="benefits" smooth={true} duration={500} onClick={toggleMenu}>Benefits</Link>
        </li>
        <li className="navbar-item">
          <Link to="contact-us" smooth={true} duration={500} onClick={toggleMenu}>Contact Us</Link>
        </li>
      </ul>

      {/* Login Button */}
      <div className="navbar-login">
        <button className="login-btn">
          <FaUser className="user-icon" />
          Log in account
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
