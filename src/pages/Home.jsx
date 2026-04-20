import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Testimonial from '../components/Testimonial';
import '../styles/Home.css';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <Hero setCurrentPage={setCurrentPage} />
      
      {/* Impact Stats Section */}
      <section className="impact-stats" id="impact">
        <div className="stats-container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">12,450</h3>
              <p className="stat-label">Children Supported</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">50K+</h3>
              <p className="stat-label">Meals Served</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">85%</h3>
              <p className="stat-label">School Retention</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">$2.5M</h3>
              <p className="stat-label">Funds Raised</p>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Programs />
      
      {/* Merch Preview Section */}
      <section className="merch-preview" id="merch-preview">
        <div className="merch-container">
          <h2 className="section-title">Support with Purpose</h2>
          <p className="merch-subtitle">Every purchase funds our mission</p>
          <div className="merch-preview-grid">
            <div className="merch-card">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop" alt="T-shirt" />
              <h3>Exclusive T-Shirt</h3>
              <p>$25 - Feeds 1 child for 1 week</p>
            </div>
            <div className="merch-card">
              <img src="https://images.unsplash.com/photo-1556821552-7f41c5d440db?w=300&h=300&fit=crop" alt="Hoodie" />
              <h3>Heritage Hoodie</h3>
              <p>$45 - Feeds 2 children for 1 week</p>
            </div>
            <div className="merch-card">
              <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop" alt="Bracelet" />
              <h3>Impact Bracelet</h3>
              <p>$15 - Feeds 1 child for 3 days</p>
            </div>
          </div>
          <button 
            className="view-shop-btn"
            onClick={() => setCurrentPage('shop')}
          >
            EXPLORE FULL SHOP
          </button>
        </div>
      </section>

      <Testimonial />

      {/* Main CTA Section */}
      <section className="main-cta" id="cta">
        <div className="cta-content">
          <h2>Ready to Make a Difference?</h2>
          <p>Choose your way to support our mission</p>
          <div className="cta-buttons">
            <button 
              className="cta-donate"
              onClick={() => setCurrentPage('donate')}
            >
              💰 Donate Now
            </button>
            <button 
              className="cta-shop"
              onClick={() => setCurrentPage('shop')}
            >
              🛍️ Shop & Support
            </button>
            <button 
              className="cta-projects"
              onClick={() => setCurrentPage('projects')}
            >
              📍 View Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
