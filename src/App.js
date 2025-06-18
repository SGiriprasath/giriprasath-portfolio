import React from 'react';
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

function App() {
  return (
    <div className="app">
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
        <Footer />
      </main>
    </div>
  );
}

export default App;
