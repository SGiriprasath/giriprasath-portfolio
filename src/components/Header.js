import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const ROLES = [
  'Python Developer',
  'AI Enthusiast',
  'Cloud Engineer',
  'Problem Solver',
];

function Header() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 },
    },
  };

  return (
    <motion.header
      id="home"
      className="header-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="header-content">
        {/* Greeting */}
        <motion.div className="greeting-row" variants={itemVariants}>
          <span className="greeting-wave">👋</span>
          <span className="greeting-text">Hello, I'm</span>
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero-name" variants={itemVariants}>
          GIRIPRASATH S
        </motion.h1>

        {/* Role cycling */}
        <motion.div className="role-container" variants={itemVariants}>
          <span className="role-prefix">I'm a </span>
          <span className="role-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                className="role-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="cursor-blink">|</span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p className="hero-description" variants={itemVariants}>
          Passionate about building intelligent applications with Python, AI, and Cloud technologies.
          I enjoy turning ideas into impactful solutions through innovation and continuous learning.
        </motion.p>

        {/* Contact chips */}
        <motion.div className="contact-chips" variants={itemVariants}>
          <motion.a
            href="mailto:giriprasathsks@gmail.com"
            className="contact-chip"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <i className="fas fa-envelope" />
            <span>giriprasathsks@gmail.com</span>
          </motion.a>
          <motion.a
            href="tel:+917904602922"
            className="contact-chip"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
          >
            <i className="fas fa-phone" />
            <span>+91 7904602922</span>
          </motion.a>
          <motion.span
            className="contact-chip"
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <i className="fas fa-map-marker-alt" />
            <span>Chennai, Tamil Nadu</span>
          </motion.span>
        </motion.div>

        {/* Social + Resume row */}
        <motion.div className="hero-actions" variants={itemVariants}>
          <div className="social-icons-row">
            <motion.a
              href="https://linkedin.com/in/giriprasath-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </motion.a>
            <motion.a
              href="https://github.com/SGiriprasath"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </motion.a>
          </div>

          <motion.button
            className="resume-btn"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open('/giriprasath_resume.pdf', '_blank')}
          >
            <span>View Resume</span>
            <i className="fas fa-external-link-alt" />
            <div className="btn-shimmer" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </motion.div>
    </motion.header>
  );
}

export default Header;