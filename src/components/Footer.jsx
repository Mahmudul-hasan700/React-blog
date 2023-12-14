// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-800 py-4 text-center border-t border-gray-200 mt-5 mb-5">
      <div className="container mx-auto text-center flex flex-col items-center">
        <div className="flex items-center justify-center gap-2">
          <img src="https://www.codingnepalweb.com/wp-content/uploads/2023/01/codingnepal-navbar-logo-544x180-blue-transparent.png"
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
      </div>
    </footer>
  );
};

export default Footer;
