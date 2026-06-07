import React from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

const leadershipItems = [
  {
    role: 'Sports Captain',
    org: 'Velalar College of Engineering and Technology',
    icon: '🏆',
    description: 'Led and organized sports activities, represented the college in inter-collegiate events.',
  },
  {
    role: 'Senior Designer',
    org: 'Tech Crew (Department Club)',
    icon: '🎨',
    description: 'Created visual designs and branding materials for department events and technical fests.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

function Leadership() {
  return (
    <motion.section
      id="leadership"
      className="leadership-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="section-header">
        <h2 className="section-title">Leadership</h2>
        <p className="section-subtitle">Roles &amp; responsibilities</p>
      </div>

      <div className="leadership-grid">
        {leadershipItems.map((item, index) => (
          <motion.div
            key={index}
            className="leadership-card"
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="leadership-icon">{item.icon}</div>
            <div className="leadership-content">
              <h3 className="leadership-role">{item.role}</h3>
              <p className="leadership-org">{item.org}</p>
              <p className="leadership-desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Leadership;