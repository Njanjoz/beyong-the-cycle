import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img 
            src="/logos/logo-icon.png" 
            alt="Beyond the Cycle" 
            className="footer-logo-img"
          />
          <h3>Beyond the Cycle</h3>
          <p>Breaking stigma, building strength</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#programs">Programs</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaEnvelope /> contact@beyondthecycle.org</p>
          <p>📍 Campus Address Here</p>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beyond the Cycle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;