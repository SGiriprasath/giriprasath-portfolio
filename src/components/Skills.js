import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    id: 'langs',
    icon: '💻',
    title: 'Programming Languages',
    color: 'primary',
    skills: ['Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'tools',
    icon: '🛠️',
    title: 'Tools & IDEs',
    color: 'secondary',
    skills: ['VS Code', 'GitHub', 'Google Colab', 'JupyterLab', 'Canva', 'Photoshop', 'Figma'],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI Tools',
    color: 'accent',
    skills: ['Antigravity', 'Cursor', 'Windsurf'],
  },
  {
    id: 'libs',
    icon: '📦',
    title: 'Libraries & Frameworks',
    color: 'primary',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'Face Recognition', 'PaddleOCR'],
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Platforms',
    color: 'secondary',
    skills: ['AWS', 'Supabase'],
  },
  {
    id: 'soft',
    icon: '🌟',
    title: 'Soft Skills',
    color: 'accent',
    skills: ['Leadership', 'Communication', 'Teamwork'],
  },
  {
    id: 'langs2',
    icon: '🌏',
    title: 'Languages',
    color: 'gold',
    skills: ['Tamil', 'English', 'Japanese'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 16 },
  },
};

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies &amp; tools I work with</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.id}
            className={`skill-card skill-card--${cat.color}`}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3 className="skill-category-title">{cat.title}</h3>
            </div>
            <div className="skill-badges">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className={`skill-badge skill-badge--${cat.color}`}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;