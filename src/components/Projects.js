import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Marathon Image Classification and Retrieval System',
    description: [
      'Developed an OCR-based image retrieval system using PaddleOCR and AWS S3, enabling efficient classification and retrieval of marathon event images.',
      'Designed a web-based interface allowing users to search images using extracted alphanumeric data like bib numbers and text.',
      'Implemented scalable pipelines for image storage and metadata extraction, improving retrieval accuracy and processing efficiency.',
    ],
    image: '/images/marathon-project.png',
    technologies: ['PaddleOCR', 'AWS S3', 'Python', 'OpenCV'],
    link: '#',
  },
  {
    title: 'Image Recognition and Face Recognition System',
    description: [
      'Developed and deployed image recognition and face recognition systems using advanced machine learning techniques.',
      'Designed scalable pipelines for real-time processing, ensuring high accuracy and efficiency in recognition tasks.',
      'Integrated models into applications for seamless user interaction and automated decision-making.',
    ],
    image: '/images/face-recognition.png',
    technologies: ['OpenCV', 'Python', 'Face Recognition'],
    link: '#',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 18 },
  },
};

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
          >
            <motion.div
              className="project-image"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <ul>
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="tech-tag"
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;