// src/components/Hero.jsx

import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    // The image will be applied as a background to this <section>
    <section className="hero" id="home">
      <div className="hero-content">
        {/* The overlay text and buttons */}
        <h1 className="hero-title">Breaking the Cycle</h1>
        <p className="hero-subtitle">Building a World of Strength and Safety</p>
        
        {/* You can add a second button like the example website */}
        <div className="hero-cta-buttons">
            <button className="cta-primary">Donate Now</button>
            <button className="cta-secondary">Read More</button>
        </div>
      </div>
      {/* 
        The separate <div className="hero-image"> is removed. 
        The image path must still be correct in your public/images folder: 
        /images/hero-group-photo.jpg 
      */}
    </section>
  );
};

export default Hero;