import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeScene from './components/ThreeScene';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Smoothly fade out the HTML preloader once the React app has mounted
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.remove('loading');
        // Fully remove the loader markup from the DOM after the opacity transition ends
        setTimeout(() => {
          preloader.remove();
        }, 900);
      }, 1800); // Gives users enough time to appreciate the premium loading animation
    }
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <ThreeScene />
      <Navbar />
      <main className="main-content">
        <Header />
        <Education />
        <Skills />
        <Internship />
        <Projects />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
