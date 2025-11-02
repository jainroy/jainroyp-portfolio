
import React from 'react';
import Section from './Section';
import { CERTIFICATIONS_DATA } from '../constants';
import { FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="space-y-4">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <motion.div 
            key={index}
            className="flex items-center bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <FaCertificate className="text-2xl text-light-accent dark:text-dark-accent mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-semibold">{cert.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
