import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="footer-content">
        <div className="footer-social">
          <motion.a
            href="https://linkedin.com/in/giriprasath-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </motion.a>
          <motion.a
            href="https://github.com/SGiriprasath"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </motion.a>
          <motion.a
            href="mailto:giriprasathsks@gmail.com"
            className="footer-social-link"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </motion.a>
        </div>

        <p className="footer-tagline">
          Designed &amp; Coded with <span className="sparkle-icon">⚡</span> and <span className="coffee-icon">☕</span> by <span className="footer-name">Giriprasath S</span>
        </p>

        <p className="footer-copy">
          &copy; {currentYear} Giriprasath S. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;