import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80; // Offset for the sticky header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isOpen) {
        setIsOpen(false);
      }
    }
  };


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-bold text-light-accent dark:text-dark-accent cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Jain Roy P
        </motion.a>
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)} 
              className="text-base font-medium hover:text-light-accent dark:hover:text-dark-accent transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-light-border dark:hover:bg-dark-border transition-colors">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full hover:bg-light-border dark:hover:bg-dark-border transition-colors">
                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="z-50">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-light-card dark:bg-dark-card absolute top-full left-0 w-full shadow-lg"
        >
          <nav className="flex flex-col items-center p-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="py-2 text-lg font-medium hover:text-light-accent dark:hover:text-dark-accent transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;