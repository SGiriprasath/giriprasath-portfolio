import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  const skillCategoryVariants = {
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
      id="skills"
      className="skills-section"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2>SKILLS</h2>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 0 * 0.1 }}
      >
        <h3>Programming Languages:</h3>
        <p>Python, HTML, CSS.</p>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 1 * 0.1 }}
      >
        <h3>Tools:</h3>
        <p>Visual Studio, GitHub, Google Colab, JupyterLab, Canva, Photoshop, Figma.</p>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 2 * 0.1 }}
      >
        <h3>AI Tools:</h3>
        <p>Cursor, Windsurf.</p>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 3 * 0.1 }}
      >
        <h3>Libraries:</h3>
        <p>NumPy, Pandas, Matplotlib, OpenCV, Face-recognition.</p>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 4 * 0.1 }}
      >
        <h3>Cloud:</h3>
        <p>AWS, Supabase.</p>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 5 * 0.1 }}
      >
        <h3>Soft Skills:</h3>
        <p>Leadership, Communication, Teamwork.</p>
      </motion.div>
      <motion.div 
        className="skill-category"
        variants={skillCategoryVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        transition={{ delay: 6 * 0.1 }}
      >
        <h3>Languages:</h3>
        <p>Tamil, English, Japanese.</p>
      </motion.div>
    </motion.section>
  );
}

export default Skills; 