
import React from 'react';
import Section from './Section';
import { EDUCATION_DATA } from '../constants';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {EDUCATION_DATA.map((edu, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 p-4 bg-light-card dark:bg-dark-card rounded-lg shadow-md border-l-4 border-light-accent dark:border-dark-accent"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FaGraduationCap className="text-4xl text-light-accent dark:text-dark-accent mt-1" />
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.period}</p>
              <p className="text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
