import React from 'react';
import { motion } from 'framer-motion';
import './Internship.css';

const internshipData = [
  {
    company: 'NediVeil Technologies',
    role: 'Python Developer',
    period: 'Jan 2025 – Apr 2025',
    icon: '🏢',
    achievements: [
      'Developed and deployed an AI-powered chatbot, integrating APIs to facilitate seamless and dynamic user interactions.',
      'Implemented marathon image classification using PaddleOCR, OpenCV, and AWS, enabling automated text and bib number recognition for efficient data retrieval and event analysis.',
    ],
    techStack: ['Python', 'PaddleOCR', 'OpenCV', 'AWS', 'APIs'],
  },
  {
    company: 'NediVeil Technologies',
    role: 'Web Developer',
    period: 'Sep 2024 – Dec 2024',
    icon: '🏢',
    achievements: [
      'Built and optimized responsive front-end user interfaces using HTML, CSS, and JavaScript, improving layout responsiveness and client-side load time.',
      'Collaborated on website redesigns, translating design mockups into interactive components and ensuring cross-browser compatibility.',
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
  },
];

function Internship() {
  return (
    <motion.section
      id="internship"
      className="internship-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-header">
        <h2 className="section-title">Internship</h2>
        <p className="section-subtitle">Professional experience</p>
      </div>

      {internshipData.map((item, index) => (
        <motion.div
          key={index}
          className="internship-card"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <div className="internship-card-header">
            <div className="company-info">
              <span className="company-icon">{item.icon}</span>
              <div>
                <h3 className="company-name">{item.company}</h3>
                <span className="role-badge">
                  <i className="fas fa-code" /> {item.role}
                </span>
              </div>
            </div>
            <span className="internship-period">{item.period}</span>
          </div>

          <ul className="internship-achievements">
            {item.achievements.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div className="internship-tech">
            {item.techStack.map((tech, i) => (
              <span key={i} className="internship-tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

export default Internship;