import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import '../styles/pages/About.css';

const AboutPage = ({ setCurrentPage }) => {
  const team = [
    {
      name: 'Jane Kimani',
      role: 'Founder & Executive Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'David Omondi',
      role: 'Programs Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Emily Kipchoge',
      role: 'Community Outreach Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Kiplagat',
      role: 'Finance Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
  ];

  const partners = [
    'UN Global Goals',
    'Global Fund',
    'World Bank',
    'UNICEF',
    'Red Cross',
    'Médecins Sans Frontières'
  ];

  return (
    <div className="about-page">
      <button className="back-btn" onClick={() => setCurrentPage('home')}>
        <FiArrowLeft size={20} /> Back
      </button>

      {/* Our Story */}
      <section className="story-section">
        <h1>Our Story</h1>
        <div className="story-content">
          <div className="story-text">
            <h2>Breaking Generational Poverty</h2>
            <p>
              Beyond the Cycle was founded in 2015 with a simple vision: to break the cycle of poverty that traps millions of children in developing nations. What started as a small initiative in rural Kenya has grown into a comprehensive movement reaching over 12,000 lives.
            </p>
            <p>
              We believe that every child deserves access to quality education, nutrition, and opportunity. By combining direct aid with community empowerment, we're not just giving fish—we're teaching entire communities to fish for generations to come.
            </p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=400&fit=crop" alt="Community" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🤝 Compassion</h3>
            <p>We lead with empathy and genuine care for every individual we serve</p>
          </div>
          <div className="value-card">
            <h3>🎯 Impact</h3>
            <p>Every action is measured and designed for lasting, meaningful change</p>
          </div>
          <div className="value-card">
            <h3>🔍 Transparency</h3>
            <p>We operate with complete openness about our finances and results</p>
          </div>
          <div className="value-card">
            <h3>🌱 Sustainability</h3>
            <p>We build solutions that empower communities long-term</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <h2>Our Partners</h2>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner} className="partner-logo">
              {partner}
            </div>
          ))}
        </div>
      </section>

      {/* Transparency & Impact */}
      <section className="transparency-section">
        <h2>Financial Transparency</h2>
        <div className="transparency-content">
          <div className="budget-breakdown">
            <h3>Where Your Money Goes</h3>
            <div className="budget-item">
              <div className="budget-label">
                <span>Programs & Outreach</span>
                <span className="budget-percent">70%</span>
              </div>
              <div className="budget-bar">
                <div className="budget-fill" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="budget-item">
              <div className="budget-label">
                <span>Administrative</span>
                <span className="budget-percent">15%</span>
              </div>
              <div className="budget-bar">
                <div className="budget-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className="budget-item">
              <div className="budget-label">
                <span>Fundraising</span>
                <span className="budget-percent">15%</span>
              </div>
              <div className="budget-bar">
                <div className="budget-fill" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>

          <div className="certifications">
            <h3>Certifications & Awards</h3>
            <ul>
              <li>✓ Registered NGO - Kenya Cabinet</li>
              <li>✓ 4-Star Rating - Global Charity Watchdog</li>
              <li>✓ ISO 9001 Certified</li>
              <li>✓ UN SDG Verified Partner</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h2>Join Our Mission</h2>
        <p>Be part of the movement breaking generational poverty</p>
        <div className="cta-buttons">
          <button 
            className="cta-btn donate"
            onClick={() => setCurrentPage('donate')}
          >
            Donate
          </button>
          <button 
            className="cta-btn volunteer"
            onClick={() => alert('Volunteer form - coming soon!')}
          >
            Volunteer
          </button>
          <button 
            className="cta-btn partner"
            onClick={() => alert('Corporate partnerships - contact us!')}
          >
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
