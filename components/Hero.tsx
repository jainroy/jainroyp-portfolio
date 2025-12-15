import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { handleNavClick } from '../utils';

const Hero: React.FC = () => {
  const headline = "Hi, I’m Jain Roy — a Python/Django Backend Developer passionate about building secure, scalable web applications.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {headline.split("").map((char, index) => {
          // "Hi, I’m " is 8 chars. "Jain Roy" starts at index 8 and ends at 15.
          const isNamePart = index >= 8 && index < 16; 
          return (
            <motion.span
              key={char + "-" + index}
              variants={letter}
              className={isNamePart ? "text-light-accent dark:text-dark-accent" : ""}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
       <motion.p 
        className="text-md md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4 }}
      >
        Currently working onsite at NthIndex Software Solutions, developing and maintaining real-world Django projects with REST APIs and modern backend practices.
      </motion.p>
      <motion.div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4.2 }}
      >
        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="px-8 py-3 bg-light-accent text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 dark:bg-dark-accent dark:hover:bg-blue-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Hire Me
        </a>
        <a 
          href="https://linkedin.com/in/jainroyp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-8 py-3 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border font-semibold rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;