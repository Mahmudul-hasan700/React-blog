// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../ThemeContext.jsx";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className={`flex ${isDarkMode ? "dark" : ""}`}>
      <nav
        id="sideNav"
        className={`z-50 flex flex-col h-full text-white w-64 fixed top-0 left-0 transform bg-${
          isDarkMode ? "gray-800" : "white"
        } text-${
          isDarkMode ? "white" : "gray-800"
        } flex-shrink-0 py-6 pr-4 pl-2 transition-transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" className="ml-2">
          <img
            src={
              isDarkMode
                ? "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb32b39e1bbe3fff055cc7682026556a2a960c8a3-132x52.svg%3Fw%3D132%26auto%3Dformat&w=1080&q=75"
                : "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg%3Fw%3D132%26auto%3Dformat&w=1080&q=75"
            }
            alt="Logo"
            className="h-8"
          />
        </Link>

        <ul className="mt-4">
          <li className="nav-item">
            <Link
              to="/"
              className={`py-2 mt-2 flex items-center gap-2 ${
                isDarkMode
                  ? "text-white bg-gray-800"
                  : "text-black bg-slate-200"
              } px-2 font-semibold rounded-md`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`py-2 mt-2 flex items-center gap-2 ${
                isDarkMode
                  ? "text-white hover:bg-slate-600"
                  : "text-black hover:bg-slate-200"
              } px-2 font-semibold rounded-md`}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`py-2 mt-2 flex items-center gap-2 ${
                isDarkMode
                  ? "text-white hover:bg-slate-600"
                  : "text-black hover:bg-slate-200"
              } px-2 font-semibold rounded-md`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/Blog"
              className={`py-2 mt-2 flex items-center gap-2 ${
                isDarkMode
                  ? "text-white hover:bg-slate-600"
                  : "text-black hover:bg-slate-200"
              } px-2 font-semibold rounded-md`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          className={`bg-${
            isDarkMode ? "gray-800" : "white"
          } border-b border-gray-300 h-20 p-4 flex items-center justify-between`}
        >
          <div className="flex items-center justify-center">
            <Link to="/" className="ml-2">
              <img
                src={
                  isDarkMode
                    ? "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb32b39e1bbe3fff055cc7682026556a2a960c8a3-132x52.svg%3Fw%3D132%26auto%3Dformat&w=1080&q=75"
                    : "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg%3Fw%3D132%26auto%3Dformat&w=1080&q=75"
                }
                alt="Logo"
                className="h-8"
              />
            </Link>
          </div>
          <div
            className={`flex items-center gap-1 ${isDarkMode ? "dark" : ""}`}
          >
            <button
              className={`mr-[3px] p-2 ${
                isDarkMode ? "dark:text-white" : "text-gray-800"
              }`}
              id="search"
              onClick={handleSearchClick}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
            <button
              id="menuToggle"
              className={`menu hamburger relative inline-flex items-center justify-center rounded-md p-2 ${
                isDarkMode ? "dark:text-white" : "text-gray-800"
              } ${isNavOpen ? "active" : ""}`}
              onClick={toggleNav}
            >
              <div>
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </div>
            </button>
            <button
              className={`ml-2 p-2 ${
                isDarkMode ? "dark:text-white" : "text-gray-800"
              }`}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
