import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>Beyond the Stigma</h2>
          <p>
            We provide support, advocacy, and empowerment to break the cycle of stigma 
            for individuals in our campus community. Our mission is to create a safe space 
            where everyone can thrive without judgment or barriers.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="/images/team-photo.jpg" 
            alt="Our team working together" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;