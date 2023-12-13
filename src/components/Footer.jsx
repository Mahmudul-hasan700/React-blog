import React from 'react';
import { useTheme } from '../ThemeContext.jsx';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`py-4 text-center border-t border-gray-200 mt-5 mb-5 ${
        isDarkMode ? 'dark:text-white' : 'text-gray-800'
      }`}
    >
      <div className="container mx-auto">
        <p>Copyright © 2023 Stablo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;