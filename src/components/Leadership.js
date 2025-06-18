import React from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

function Leadership() {
  const leadershipItemVariants = {
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
      id="leadership"
      className="leadership-section"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <h2>LEADERSHIP</h2>
      <motion.div 
        className="leadership-item"
        variants={leadershipItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 0 * 0.1 }}
      >
        <ul>
          <li>Sports Captain at Velalar College of Engineering and Technology</li>
          <li>Senior Designer at Tech crew(Department club)</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}

export default Leadership; 