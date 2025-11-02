
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <div className="w-24 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
