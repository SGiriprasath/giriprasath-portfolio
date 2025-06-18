import React from 'react';
import { motion } from 'framer-motion';
import './Internship.css';

function Internship() {
  const internshipItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: { scale: 1.02, boxShadow: "0 12px 35px rgba(2, 93, 121, 0.6)" },
    tap: { scale: 0.98 }
  };

  return (
    <motion.section
      id="internship"
      className="internship-section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2>INTERNSHIP</h2>
      <motion.div 
        className="internship-item"
        variants={internshipItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 0 * 0.1 }}
      >
        <h3>NediVeil Technologies</h3>
        <p className="internship-role">Python Developer</p>
        <ul>
          <li>Developed and deployed an AI-powered chatbot, integrating APIs to facilitate seamless and dynamic user interactions.</li>
          <li>Implemented marathon image classification using PaddleOCR, OpenCV, and AWS, enabling automated text and bib number recognition for efficient data retrieval and event analysis.</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Internship; 