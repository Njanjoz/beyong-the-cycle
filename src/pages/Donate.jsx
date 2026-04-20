import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import '../styles/pages/Donate.css';

const Donate = ({ setCurrentPage }) => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [isRecurring, setIsRecurring] = useState(false);
  const [email, setEmail] = useState('');

  const presetAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonate = (e) => {
    e.preventDefault();
    alert(`Processing ${isRecurring ? 'monthly' : 'one-time'} donation of $${donationAmount}`);
  };

  return (
    <div className="donate-page">
      <button className="back-btn" onClick={() => setCurrentPage('home')}>
        <FiArrowLeft size={20} /> Back
      </button>

      <div className="donate-container">
        <div className="donate-left">
          <h1>Make a Difference Today</h1>
          <p className="donate-intro">
            Your donation directly supports our mission to break poverty cycles and create lasting change.
          </p>

          <div className="impact-info">
            <h3>Your Impact:</h3>
            <ul>
              <li><strong>$10</strong> provides lunch for 2 children</li>
              <li><strong>$25</strong> feeds 1 child for 1 week</li>
              <li><strong>$50</strong> provides school supplies</li>
              <li><strong>$100</strong> funds 1 child for 1 month</li>
              <li><strong>$500</strong> supports 5 children for 1 month</li>
            </ul>
          </div>

          <div className="testimonial-box">
            <p className="quote">
              "Thanks to donors like you, my son now goes to school instead of working on the streets."
            </p>
            <p className="author">— Maria, mother of 3</p>
          </div>
        </div>

        <div className="donate-right">
          <form onSubmit={handleDonate} className="donation-form">
            <h2>Donation Form</h2>

            {/* Amount Selection */}
            <div className="form-section">
              <label>Choose Amount or Enter Custom</label>
              <div className="preset-amounts">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className={`amount-btn ${donationAmount === amount ? 'active' : ''}`}
                    onClick={() => setDonationAmount(amount)}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="1"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="custom-amount"
                placeholder="Enter custom amount"
              />
            </div>

            {/* Donation Type */}
            <div className="form-section">
              <label>Donation Type</label>
              <div className="donation-types">
                <label className="type-option">
                  <input
                    type="radio"
                    checked={!isRecurring}
                    onChange={() => setIsRecurring(false)}
                  />
                  <span>One-Time</span>
                </label>
                <label className="type-option">
                  <input
                    type="radio"
                    checked={isRecurring}
                    onChange={() => setIsRecurring(true)}
                  />
                  <span>Monthly Recurring</span>
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="form-section">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Summary */}
            <div className="donation-summary">
              <p>Total: <strong>${donationAmount}</strong></p>
              {isRecurring && <p className="recurring-note">per month</p>}
            </div>

            {/* Payment Methods */}
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <button type="button" className="payment-option stripe">
                💳 Card Payment
              </button>
              <button type="button" className="payment-option mpesa">
                📱 M-Pesa (Kenya)
              </button>
              <button type="button" className="payment-option paypal">
                🌐 PayPal
              </button>
            </div>

            <button type="submit" className="donate-submit-btn">
              PROCEED TO PAYMENT
            </button>

            <p className="secure-note">
              🔒 All transactions are secure and encrypted
            </p>
          </form>
        </div>
      </div>

      {/* Trust Section */}
      <section className="trust-section">
        <h2>Why Donate to Us?</h2>
        <div className="trust-grid">
          <div className="trust-card">
            <h3>Transparent</h3>
            <p>70% of funds directly support programs</p>
          </div>
          <div className="trust-card">
            <h3>Verified</h3>
            <p>Registered NGO with government oversight</p>
          </div>
          <div className="trust-card">
            <h3>Impactful</h3>
            <p>Real stories, real lives changed</p>
          </div>
          <div className="trust-card">
            <h3>Secure</h3>
            <p>SSL encrypted, no card data stored</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
