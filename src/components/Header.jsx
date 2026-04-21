import React, { useState } from 'react';
import { FiMenu, FiX, FiUser, FiShoppingBag } from 'react-icons/fi';
import '../styles/Header.css';

const Header = ({ setCurrentPage, currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  const handleLoginClick = () => {
    setLoginOpen(true);
    setMenuOpen(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      setIsLoggedIn(true);
      setUserEmail(loginEmail);
      setLoginEmail('');
      setLoginPassword('');
      setLoginOpen(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img 
              src="/logos/logo-main.png" 
              alt="Beyond the Cycle Logo" 
              className="logo-image"
              onClick={() => handleNavClick('home')}
              style={{ cursor: 'pointer' }}
            />
            <span className="logo-text" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>Beyond the Cycle</span>
            <span className="brand-name-mobile" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>Beyond the Cycle</span>
          </div>
          
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => handleNavClick('home')}>Home</a>
            <a href="#about" onClick={() => handleNavClick('about')}>About Us</a>
            <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
            <a href="#shop" onClick={() => handleNavClick('shop')}>Shop</a>
            <a href="#contact" onClick={() => handleNavClick('home')}>Contact</a>
            <button className="donate-btn" onClick={() => handleNavClick('donate')}>DONATE NOW</button>
            {isLoggedIn && (
              <button className="logout-btn" onClick={handleLogout}>LOGOUT</button>
            )}
          </nav>

          <div className="header-actions">
            {isLoggedIn ? (
              <div className="profile-section">
                <div className="profile-icon" title={userEmail}>
                  <FiUser size={20} />
                </div>
              </div>
            ) : (
              <button className="login-btn" onClick={handleLoginClick}>
                <FiUser size={18} />
                <span className="login-text">Login</span>
              </button>
            )}
            
            <div className="menu-icon" onClick={handleMenuToggle}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {loginOpen && (
        <div className="login-modal-overlay" onClick={() => setLoginOpen(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-login" onClick={() => setLoginOpen(false)}>
              <FiX size={24} />
            </button>
            <h2>Sign In</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <button type="submit" className="modal-submit-btn">SIGN IN</button>
            </form>
            <p className="modal-text">Don't have an account? <a href="#signup">Create one</a></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;