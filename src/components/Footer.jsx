import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // Retrieve dark mode preference from local storage or default to false
  const storedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
  const [isDarkMode, setIsDarkMode] = useState(storedDarkMode);

  // Update local storage when dark mode state changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    // Add logic here to update the dark mode styles for the entire website.

    // Dynamically add or remove 'dark' class from html element
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <footer
      className={`text-${isDarkMode ? "white" : "gray"}-800 py-4 text-center border-t border-${
        isDarkMode ? "white" : "gray"
      }-200 mt-5 ${isDarkMode && "dark:bg-gray-800"}`}
    >
      <div className="container mx-auto text-center flex flex-col items-center">
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://www.codingnepalweb.com/wp-content/uploads/2023/01/codingnepal-navbar-logo-544x180-blue-transparent.png"
            alt="logo"
            className="h-8"
          />
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Link
            to="/terms-conditions"
            className="text-sm text-gray-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms & condition
          </Link>
          <span className="text-gray-500">•</span>
          <Link
            to="/privacy-policy"
            className="text-sm text-gray-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Copyright © 2023 CodingNepal. All rights reserved.
        </p>
        {/* Dark Mode Toggle Switch */}
        <label className="relative inline-flex items-center cursor-pointer mt-4">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div
            className={`w-11 bg-indigo-400 h-6 bg-${isDarkMode ? "gray" : "blue"}-200 peer-focus:outline-none rounded-full peer dark:bg-${
              isDarkMode ? "gray" : "blue"
            }-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-${
              isDarkMode ? "gray" : "blue"
            }-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-${
              isDarkMode ? "gray" : "blue"
            }-600 peer-checked:bg-${isDarkMode ? "blue" : "gray"}`}
          ></div>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
