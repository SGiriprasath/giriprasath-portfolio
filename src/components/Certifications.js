import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

function Certifications() {
  const certificationItemVariants = {
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
      id="certifications"
      className="certifications-section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <h2>CERTIFICATIONS</h2>
      <motion.div 
        className="certification-item"
        variants={certificationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 0 * 0.1 }}
      >
        <h3>🎯1st Prize for presenting the project ”IoT- Home Automation” at Karpagam College</h3>
        <p></p>
        <p className="certification-date"></p>
      </motion.div>
      <motion.div 
        className="certification-item"
        variants={certificationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 1 * 0.1 }}
      >
        <h3>🎯Python Course Completion, GUVI</h3>
        <p></p>
        <p className="certification-date"></p>
      </motion.div>
      <motion.div 
        className="certification-item"
        variants={certificationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 2 * 0.1 }}
      >
        <h3>🎯Certificate of Completion, Coursera: AWS</h3>
        <p></p>
        <p className="certification-date"></p>
      </motion.div>
      <motion.div 
        className="certification-item"
        variants={certificationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 2 * 0.1 }}
      >
        <h3>🎯4th Place, State Level Kho Kho Tournament, Kongu Alumni Trophy</h3>
        <p></p>
        <p className="certification-date"></p>
      </motion.div>
      <motion.div 
        className="certification-item"
        variants={certificationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 2 * 0.1 }}
      >
        <h3>🎯Participant, PeCan+ Capture the Flag (CTF), Edith Cowan University by Pals</h3>
        <p></p>
        <p className="certification-date"></p>
      </motion.div>
      <motion.div 
        className="certification-item"
        variants={certificationItemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 2 * 0.1 }}
      >
        <h3>🎯Certificate of Participation, Yukthi CTF, organized by Tamil Nadu Police</h3>
        <p></p>
        <p className="certification-date"></p>
      </motion.div>
    </motion.section>
  );
}

export default Certifications;
