// ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve theme preference from local storage
    const storedTheme = localStorage.getItem('theme');
    setIsDarkMode(storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    // Toggle theme
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    // Save theme preference to local storage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };