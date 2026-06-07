import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
  {
    degree: 'MSc Data Science',
    institution: 'Aston University',
    grade: 'Pursuing',
    gradeIcon: '📖',
    period: '2026 – Present',
    icon: '🎓',
    color: 'primary',
  },
  {
    degree: 'BE Computer Science',
    institution: 'Velalar College of Engineering and Technology',
    grade: 'CGPA — 7.89',
    gradeIcon: '🏆',
    period: '2021 – 2025',
    icon: '🎓',
    color: 'secondary',
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'P K P Swamy Matriculation Higher Secondary School',
    grade: '87%',
    gradeIcon: '🏆',
    period: '2020 – 2021',
    icon: '📚',
    color: 'accent',
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'P K P Swamy Matriculation Higher Secondary School',
    grade: '83%',
    gradeIcon: '🏆',
    period: '2018 – 2019',
    icon: '🏫',
    color: 'primary',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18 },
  },
};

function Education() {
  return (
    <motion.section
      id="education"
      className="education-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic journey</p>
      </div>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`timeline-item timeline-item--${edu.color}`}
            variants={itemVariants}
          >
            <div className="timeline-dot">
              <span>{edu.icon}</span>
            </div>
            <motion.div
              className="timeline-card"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <div className="timeline-card-top">
                <div>
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <p className="timeline-institution">{edu.institution}</p>
                </div>
                <span className="timeline-year">{edu.period}</span>
              </div>
              <div className="timeline-grade">
                <span className="grade-badge">{edu.gradeIcon} {edu.grade}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;