import React, { useState } from 'react';
import Section from './Section';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const softSkills = [
  'Problem-solving', 'Debugging', 'Adaptability', 
  'Teamwork', 'Learning Mindset'
];

const About: React.FC = () => {
  // Use state to handle image fallback logic
  // Attempts: 1. /profile.jpg (lowercase) -> 2. /Profile.jpg (Capitalized) -> 3. UI Avatars
  const [imgSrc, setImgSrc] = useState('/profile.jpg');

  const handleImgError = () => {
    if (imgSrc === '/profile.jpg') {
      setImgSrc('/Profile.jpg');
    } else if (imgSrc === '/Profile.jpg') {
      setImgSrc("https://ui-avatars.com/api/?name=Jain+Roy+P&background=0D8ABC&color=fff&size=400");
    }
  };

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <motion.div 
          className="md:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={imgSrc}
            alt="Jain Roy P" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-light-accent/50 dark:border-dark-accent/50" 
            onError={handleImgError}
          />
        </motion.div>
        <div className="md:col-span-2 text-left space-y-6">
          <p className="text-lg leading-relaxed">
            I’m an MCA graduate and backend developer focused on creating efficient, production-grade Django applications. My work involves designing REST APIs, handling authentication, integrating payment systems, and collaborating closely with frontend teams.
          </p>
          <p className="text-lg leading-relaxed">
            I enjoy learning modern backend technologies like DRF, FastAPI, and AWS, continuously improving to become an industry-ready backend engineer.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Competencies:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {softSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-light-accent dark:text-dark-accent mr-2" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;