
import React from 'react';
import Section from './Section';
import { EXPERIENCE_DATA } from '../constants';
import { MdWork } from 'react-icons/md';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Experience">
            <div className="relative border-l-2 border-light-accent dark:border-dark-accent ml-4">
                {EXPERIENCE_DATA.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="mb-10 ml-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-light-accent rounded-full -left-4 ring-8 ring-light-card dark:ring-dark-card dark:bg-dark-accent">
                            <MdWork className="text-white" />
                        </span>
                        <h3 className="flex items-center mb-1 text-xl font-semibold">
                            {exp.role} <span className="text-light-accent dark:text-dark-accent mx-2">•</span> {exp.company}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{exp.period}</time>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
