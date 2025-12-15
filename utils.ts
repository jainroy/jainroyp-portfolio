import React from 'react';

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMenu?: () => void) => {
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

      if (closeMenu) {
        closeMenu();
      }
    }
};