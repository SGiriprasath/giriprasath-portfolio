import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Marathon Image Classification and Retrieval System",
      description: [
        "Developed an OCR-based image retrieval system using PaddleOCR and AWS S3, enabling efficient classification and retrieval of marathon event images.",
        "Designed a web-based interface allowing users to search images using extracted alphanumeric data like bib numbers and text.",
        "Implemented scalable pipelines for image storage and metadata extraction, improving retrieval accuracy and processing efficiency."
      ],
      image: "/images/marathon-project.png",
      technologies: ["PaddleOCR", "AWS S3", "Python", "OpenCV"],
      link: "#"
    },
    {
      title: "Image Recognition and Face Recognition System",
      description: [
        "Developed and deployed image Recognition and face recognition systems using advanced machine learning techniques.",
        "Designed scalable pipelines for real-time processing, ensuring high accuracy and efficiency in recognition tasks.",
        "Integrated models into applications for seamless user interaction and automated decision-making."
      ],
      image: "/images/face-recognition.png",
      technologies: ["OpenCV", "Python", "Face Recognition"],
      link: "#"
    }
  ];

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0 18px 45px rgba(2, 93, 121, 0.7)" }}
          >
            <motion.div 
              className="project-image"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(237, 114, 248, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
            <div className="project-content">
              <motion.h3
                whileHover={{ scale: 1.02 }}
              >
                {project.title}
              </motion.h3>
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
                    whileHover={{ translateY: -3, boxShadow: "0 6px 15px rgba(2, 93, 121, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
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