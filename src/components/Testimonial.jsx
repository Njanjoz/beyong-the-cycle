import React from 'react';
import '../styles/Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img 
            src="/images/testimonial-person.jpg" 
            alt="Serah K, Program Participant" 
          />
        </div>
        <div className="testimonial-content">
          <blockquote>
            "Beyond the Cycle gave me the confidence to find my voice and share my story."
            <cite>— Serah K, Program Participant</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;