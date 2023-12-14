// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleSearchClick = () => {
    // Navigate to the search page when the search button is clicked
    navigate("/search");
  };

  return (
    <div className="flex">
      <nav
        id="sideNav"
        className={`z-50 flex flex-col h-full text-white w-72 md:w-80 fixed top-0 left-0 transform bg-gray-50 text-gray-800 flex-shrink-0 py-6 pr-4 pl-2 transition-transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/" className="ml-2">
          <img
            src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe8fa4f57a95067e838d7aa5a4f80042137d9f5b6-132x52.svg%3Fw%3D132%26auto%3Dformat&w=1080&q=75"
            alt="Logo"
            className="h-8"
          />
        </Link>

        <ul className="mt-4">
          <li className="nav-item">
            <Link
              to="/"
              className="py-2 mt-2 flex items-center gap-2 text-black bg-slate-200 px-2 font-semibold rounded-md"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="py-2 mt-2 flex items-center gap-2 text-black hover:bg-slate-200 hover:text-slate-900 px-2 font-semibold rounded-md"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="py-2 mt-2 flex items-center gap-2 text-black hover:bg-slate-200 hover:text-slate-900 px-2 font-semibold rounded-md"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/Blog"
              className="py-2 mt-2 flex items-center gap-2 text-black hover:bg-slate-200 hover:text-slate-900 px-2 font-semibold rounded-md"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-300 h-20 p-4 flex items-center justify-between">
          <div className="flex items-center justify-center">
            <Link to="/" className="ml-2">
              <img
                src="https://www.codingnepalweb.com/wp-content/uploads/2023/01/codingnepal-navbar-logo-544x180-blue-transparent.png"
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>
          <div className="gap-3">
            <button
              className="mr-[3px] p-2"
              id="search"
              onClick={handleSearchClick}
            >
              <svg
                className="w-5 h-5 text-gray-800"
                ariahidden="true"
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
                isNavOpen ? "active" : ""
              }`}
              onClick={toggleNav}
            >
              <div>
                <svg
                  className="w-5 h-5 fill-current text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <rect y="4" width="24" height="2" rx="1" />
                  <rect y="11" width="24" height="2" rx="1" />
                  <rect y="18" width="24" height="2" rx="1" />
                </svg>
              </div>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
