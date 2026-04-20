import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img 
            src="/logos/logo-main.png" 
            alt="Beyond the Cycle Logo" 
            className="logo-image"
          />
          <span className="logo-text">Beyond the Cycle</span>
        </div>
        
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About Us</a>
          <a href="#programs" onClick={handleNavClick}>Programs</a>
          <a href="#resources" onClick={handleNavClick}>Resources</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
          <button className="donate-btn" onClick={handleNavClick}>DONATE NOW</button>
        </nav>

        <div className="menu-icon" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;