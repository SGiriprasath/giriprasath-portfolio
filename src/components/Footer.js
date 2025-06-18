import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <p>&copy; {currentYear} Giriprasath S. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer; 