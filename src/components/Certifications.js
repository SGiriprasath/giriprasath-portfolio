import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    type: 'achievement',
    icon: '🥇',
    title: '1st Prize — IoT Home Automation',
    org: 'Karpagam College',
    color: 'gold',
  },
  {
    type: 'certification',
    icon: '📜',
    title: 'Python Course Completion',
    org: 'GUVI',
    color: 'primary',
  },
  {
    type: 'certification',
    icon: '☁️',
    title: 'AWS Certificate of Completion',
    org: 'Coursera',
    color: 'secondary',
  },
  {
    type: 'achievement',
    icon: '🏅',
    title: '4th Place — State Level Kho Kho Tournament',
    org: 'Kongu Alumni Trophy',
    color: 'gold',
  },
  {
    type: 'participation',
    icon: '🔐',
    title: 'PeCan+ Capture the Flag (CTF)',
    org: 'Edith Cowan University by Pals',
    color: 'accent',
  },
  {
    type: 'participation',
    icon: '🛡️',
    title: 'Yukthi CTF',
    org: 'Tamil Nadu Police',
    color: 'accent',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="certifications-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="section-header">
        <h2 className="section-title">Certifications &amp; Achievements</h2>
        <p className="section-subtitle">Awards, certificates &amp; participations</p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={`cert-card cert-card--${cert.color}`}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-content">
              <span className={`cert-type-badge cert-type-badge--${cert.type}`}>
                {cert.type === 'achievement' ? 'Achievement'
                  : cert.type === 'certification' ? 'Certificate'
                  : 'Participation'}
              </span>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-org">{cert.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;
