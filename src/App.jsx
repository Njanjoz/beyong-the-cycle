import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Donate from './pages/Donate';
import ShopPage from './pages/Shop';
import Projects from './pages/Projects';
import AboutPage from './pages/About';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'donate':
        return <Donate setCurrentPage={setCurrentPage} />;
      case 'shop':
        return <ShopPage setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;