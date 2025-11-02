
import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category, index) => (
          <motion.div 
            key={category.title}
            className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-light-border dark:border-dark-border"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{category.title}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-3 bg-light-bg dark:bg-dark-bg/50 rounded-lg">
                  <skill.icon className="text-4xl mb-2 text-light-accent dark:text-dark-accent" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
