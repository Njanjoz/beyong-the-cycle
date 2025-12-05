import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Identity Section - Aligned with Article I & XVII */}
        <div className="footer-branding">
          <img 
            src="/logos/btc-logo-official.png" // Updated to reference official logo per Article XVII
            alt="Beyond the Cycle Official Logo" 
            className="footer-logo-img"
          />
          <div className="footer-identity">
            <h3>Beyond the Cycle (BTC)</h3>
            <p className="tagline">Breaking Stigma, Building Strength</p>
            <p className="mission-excerpt">
              A student-led organization eradicating menstrual health stigma 
              and addressing period poverty through education, advocacy, and supply distribution.
            </p>
          </div>
        </div>
        
        {/* Quick Links - Updated with actual page references */}
        <div className="footer-section">
          <h4>Organization</h4>
          <nav className="footer-nav">
            <a href="/about" aria-label="About BTC">About Us</a>
            <a href="/leadership" aria-label="Leadership Team">Leadership</a>
            <a href="/membership" aria-label="Membership Information">Join BTC</a>
            <a href="/code-of-conduct" aria-label="Code of Conduct">Code of Conduct</a>
            <a href="/constitution" aria-label="BTC Constitution">Constitution</a>
          </nav>
        </div>
        
        {/* Programs and Outreach - Aligned with Articles II & XVIII */}
        <div className="footer-section">
          <h4>Our Work</h4>
          <nav className="footer-nav">
            <a href="/education" aria-label="Education Programs">Menstrual Education</a>
            <a href="/supply-distribution" aria-label="Supply Distribution">Resource Distribution</a>
            <a href="/advocacy" aria-label="Advocacy Efforts">Policy Advocacy</a>
            <a href="/volunteer" aria-label="Volunteer Opportunities">Volunteer Programs</a>
            <a href="/partnerships" aria-label="Partnerships">Partnerships</a>
          </nav>
        </div>
        
        {/* Contact and Compliance - Aligned with Article X */}
        <div className="footer-section">
          <h4>Connect & Support</h4>
          <div className="footer-contact">
            <p className="contact-item">
              <FaEnvelope aria-label="Email icon" /> 
              <a href="mailto:">beyondthecyclenet1@gmail.com</a>
            </p>
            <p className="contact-item">
              <span role="img" aria-label="Location">📍</span> 
              0794375449
            </p>
            <p className="contact-item">
              <a href="/whistleblower" aria-label="Whistleblower Policy">
                Report Concerns
              </a>
            </p>
            <p className="contact-item">
              <a href="/privacy-policy" aria-label="Privacy Policy">
                Privacy Policy
              </a>
            </p>
          </div>
          
          {/* Social Media - Aligned with Article XX */}
          <div className="footer-social">
            <h5>Follow Our Mission</h5>
            <div className="social-icons" role="group" aria-label="Social media links">
              <a 
                href="https://instagram.com/beyondthecycle" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com/beyondthecycle" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://twitter.com/beyondthecycle" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Twitter/X"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://linkedin.com/company/beyondthecycle" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom - Legal and Compliance Information */}
      <div className="footer-bottom">
        <div className="legal-info">
          <p>
            &copy; {currentYear} Beyond the Cycle (BTC). All rights reserved. | 
            <a href="/terms" aria-label="Terms of Use"> Terms of Use</a> | 
            <a href="/compliance" aria-label="Legal Compliance"> Legal Compliance</a>
          </p>
          <p className="compliance-statement">
            BTC operates in accordance with all applicable laws and regulations. 
            We are committed to transparency, ethical conduct, and data protection 
            as outlined in our Constitution.
          </p>
          {/* Optional: Add Faculty Advisor contact for serious matters per Article XV */}
          <p className="advisor-contact">
            Faculty Advisor Contact: 
            <a href="mailto:beyondthecyclenet1@gmail.com"> beyondthecyclenet1@gmail.com</a>
          </p>
        </div>
        
        {/* Sustainability Message - Aligned with Article XXI */}
        <div className="sustainability-message">
          <p>
            Building a sustainable legacy in menstrual health advocacy since {currentYear > 2025 ? '2025' : currentYear}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;