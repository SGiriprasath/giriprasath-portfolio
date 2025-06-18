import React from 'react';
import { motion } from 'framer-motion';
import './Education.css'; // We'll create this file next

function Education() {
  const educationItemVariants = {
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
      id="education"
      className="education-section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2>EDUCATION</h2>
      <motion.div 
        className="education-item"
        variants={educationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 0 * 0.1 }}
      >
        <h3>Velalar College of Engineering and Technology</h3>
        <p>BE Computer Science (CGPA - 7.89)</p>
        <p className="education-year">2021 - 2025</p>
      </motion.div>
      <motion.div 
        className="education-item"
        variants={educationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 1 * 0.1 }}
      >
        <h3>HSC - 87%</h3>
        <p className="education-year">2020 - 2021</p>
      </motion.div>
      <motion.div 
        className="education-item"
        variants={educationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 2 * 0.1 }}
      >
        <h3>SSLC - 83%</h3>
        <p className="education-year">2018 - 2019</p>
      </motion.div>
    </motion.section>
  );
}

export default Education; 