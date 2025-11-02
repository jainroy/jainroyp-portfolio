import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-card dark:bg-dark-card mt-16 border-t border-light-border dark:border-dark-border">
            <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Jain Roy P. All Rights Reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/jainroy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/in/jainroyp" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;