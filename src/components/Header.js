import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      }
    }
  };

  return (
    <motion.header
      id="home"
      className="header-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="header-content">
        <motion.div className="header-text" variants={itemVariants}>
          <motion.div className="name-container" variants={itemVariants}>
            <motion.span className="greeting">Hello, I'm</motion.span>
            <motion.h1 variants={itemVariants}>
              GIRIPRASATH S
            </motion.h1>
          </motion.div>
          <motion.p className="tagline" variants={itemVariants}>
            Aspiring Software Engineer | ML Enthusiast
          </motion.p>
          <motion.p className="description" variants={itemVariants}>
            Passionate about creating innovative solutions and exploring the intersection of software engineering and machine learning. 
            Dedicated to building impactful applications that make a difference.
          </motion.p>
        </motion.div>

        <div className="contact-links">
          <motion.a 
            href="mailto:giriprasathshks@gmail.com" 
            className="contact-link"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px #53025a" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <i className="fas fa-envelope"></i>
            <span>giriprasathshks@gmail.com</span>
          </motion.a>
          <motion.a 
            href="tel:+917904602922" 
            className="contact-link"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(2, 93, 121, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <i className="fas fa-phone"></i>
            <span>+91 7904602922</span>
          </motion.a>
          <motion.span 
            className="contact-link"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(2, 93, 121, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            <i className="fas fa-map-marker-alt"></i>
            <span>chennai, Tamil Nadu</span>
          </motion.span>
        </div>

        <div className="social-links-header">
          <motion.a 
            href="https://linkedin.com/in/giriprasath-s/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            whileHover={{ scale: 1.15, boxShadow: "0 8px 25px rgba(2, 93, 121, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a 
            href="https://github.com/SGiriprasath" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            whileHover={{ scale: 1.15, boxShadow: "0 8px 25px rgba(2, 93, 121, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            variants={itemVariants}
          >
            <i className="fab fa-github"></i>
          </motion.a>
        </div>

        <motion.div className="download-button-container" variants={buttonVariants}>
          <motion.button 
            className="download-resume-btn"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 30px rgba(228, 88, 88, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('/giriprasath_resume.pdf', '_blank');
            }}
          >
            <span>View Resume</span>
            <i className="fas fa-external-link-alt"></i>
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;