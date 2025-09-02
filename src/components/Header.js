import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <motion.a 
          href="#hero" 
          className="logo"
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src="/assets/Logo.png" alt="Inventure Logo" />
        </motion.a>

        <nav className="nav">
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={() => scrollToSection('about')}>
                About Us
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </a>
            </li>
            <li>
              <a href="#sectors" onClick={() => scrollToSection('sectors')}>
                Clients
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </a>
            </li>
            <li>
              <a href="#stats" onClick={() => scrollToSection('stats')}>
                Candidates
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection('contact')}>
                Sectors
                <svg className="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </a>
            </li>
          </ul>
          
          <div className="nav-icons">
            <motion.button 
              className="nav-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </motion.button>
            
            <motion.button 
              className="nav-icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </motion.button>
          </div>
          
          <motion.a 
            href="#contact" 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.a>
        </nav>

        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      <motion.div 
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="nav-links">
          <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
          <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>Clients</a></li>
          <li><a href="#stats" onClick={() => scrollToSection('stats')}>Candidates</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Sectors</a></li>
        </ul>
        <a href="#contact" className="cta-button" onClick={() => scrollToSection('contact')}>
          Get in touch
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
