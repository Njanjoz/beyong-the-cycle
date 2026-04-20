// src/components/Hero.jsx

import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const handleDonate = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-divider"></div>
        <h1 className="hero-title">Breaking the Cycle</h1>
        <p className="hero-subtitle">Building a World of Strength and Safety</p>
        
        <div className="hero-cta-buttons">
          <button className="cta-primary" onClick={handleDonate}>Donate Now</button>
          <button className="cta-secondary" onClick={handleLearnMore}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;