// src/components/Hero.jsx

import React from 'react';
import '../styles/Hero.css';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-divider"></div>
        <h1 className="hero-title">Breaking the Cycle</h1>
        <p className="hero-subtitle">Building a World of Strength and Safety</p>
        
        <div className="hero-cta-buttons">
          <button className="cta-primary" onClick={() => setCurrentPage('donate')}>Donate Now</button>
          <button className="cta-secondary" onClick={() => setCurrentPage('about')}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;