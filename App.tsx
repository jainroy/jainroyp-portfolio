
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Education />
            <Certifications />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
