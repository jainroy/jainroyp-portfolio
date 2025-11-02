
import React from 'react';
import Section from './Section';
import { PROJECTS_DATA } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={project.title}
                        className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg flex flex-col h-full border border-light-border dark:border-dark-border transform hover:-translate-y-2 transition-transform duration-300"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-3 text-light-accent dark:text-dark-accent">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-light-border dark:border-dark-border">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                                <FaGithub className="mr-2" /> GitHub
                            </a>
                            {project.liveUrl ? (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                                    <FiExternalLink className="mr-2" /> Live Demo
                                </a>
                            ) : (
                                <span className="flex items-center text-gray-400 dark:text-gray-500 cursor-not-allowed">
                                    <FiExternalLink className="mr-2" /> Live Demo
                                </span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
