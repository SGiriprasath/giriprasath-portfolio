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
    link: 'https://github.com/SGiriprasath/Marathon',
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
    link: 'https://github.com/SGiriprasath/Recognition',
  },
  {
    title: 'Sri Velmurugan Website and ERP',
    description: [
      'Developed a responsive, modern business website and ERP system using React and EmailJS to showcase services and handle user inquiries.',
      'Designed and integrated ERP modules for inventory, sales, and finance to streamline business operations and data tracking.',
      'Leveraged Supabase for secure, scalable database management and authentication, ensuring robust data privacy and operations.'
    ],
    image: '/images/velmurugan-project.png',
    technologies: ['React', 'EmailJS', 'Supabase', 'Cursor', 'Windsurf'],
    link: 'https://www.srivelmurugan.in/',
  },
  {
    title: 'Megaoverseas',
    description: [
      'Built a fast and responsive study abroad consultancy website for MegaOverseas using React and EmailJS.',
      'Designed a clean, modern user interface featuring a mobile-first design for enhanced user engagement.',
      'Integrated a seamless enquiry form to streamline client communication and improve business lead capturing.'
    ],
    image: '/images/megaoverseas-project.png',
    technologies: ['React', 'EmailJS', 'Cursor', 'Antigravity'],
    link: 'https://www.megaoverseas.com/',
  },
  {
    title: 'Meditech Solution Website',
    description: [
      'Developed a modern, responsive website for Meditech Solution to highlight advanced medical equipment and services.',
      'Implemented a clean, professional user interface prioritizing performance and optimized loading times.',
      'Prioritized a mobile-first approach, enhancing search visibility and customer accessibility.'
    ],
    image: '/images/meditech-project.png',
    technologies: ['React', 'EmailJS', 'Cursor', 'Windsurf'],
    link: 'https://www.meditechsolution.co.in/',
  },
  {
    title: 'Bharath Engineerings Website',
    description: [
      'Built a high-performance, mobile-first website for Bharath Engineerings using React and EmailJS.',
      'Designed a clean, professional user interface showcase customized for industrial and feed machinery manufacturing.',
      'Implemented a smooth, responsive inquiry form for quick client communication and lead generation.'
    ],
    image: '/images/bharath-project.png',
    technologies: ['React', 'EmailJS', 'Cursor', 'Windsurf'],
    link: 'https://www.bharathengineerings.in/',
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
        {projects.map((project, index) => {
          const isExternal = project.link && project.link !== '#';
          return (
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
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  {isExternal && (
                    <div className="project-actions">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-btn"
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {project.link.includes('github.com') ? (
                          <>
                            <i className="fab fa-github" />
                            <span>View Code</span>
                          </>
                        ) : (
                          <>
                            <i className="fas fa-globe" />
                            <span>Visit Live Site</span>
                          </>
                        )}
                      </motion.a>
                    </div>
                  )}
                </div>
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
          );
        })}
      </div>
    </motion.section>
  );
}

export default Projects;