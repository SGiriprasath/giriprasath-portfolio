import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home',           label: 'Home' },
    { id: 'education',      label: 'Education' },
    { id: 'skills',         label: 'Skills' },
    { id: 'internship',     label: 'Internship' },
    { id: 'projects',       label: 'Projects' },
    { id: 'leadership',     label: 'Leadership' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact',        label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 88;
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const scrollPos = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]); // eslint-disable-line

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
    >
      <div className="nav-content">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          <span>GS</span>
        </motion.div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'} />
        </div>

        <div className={isOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;