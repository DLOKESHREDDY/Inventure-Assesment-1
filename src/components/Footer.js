import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <motion.div 
              className="footer-logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src="/assets/Logo.png" alt="Inventure Logo" />
            </motion.div>
            <p className="footer-tagline">
              Recruiting Without Limits. Speed and Scale. We're building a new model for recruitment that combines revenue sharing, marketing engine, competitive broker community, and AI-driven learning platform.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>Services</a></li>
              <li><a href="#stats" onClick={() => scrollToSection('stats')}>Stats</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>Revenue Sharing</a></li>
              <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>Marketing Engine</a></li>
              <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>Broker Community</a></li>
              <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>AI Learning Platform</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Get in Touch</a></li>
              <li><a href="#news" onClick={() => scrollToSection('news')}>News</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © 2024 Inventure. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
