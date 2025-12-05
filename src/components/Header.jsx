import React from 'react';
import '../styles/Header.css';

const Header = () => {
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
        
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
          <button className="donate-btn">DONATE NOW</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;