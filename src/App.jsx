// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from "./components/Home.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import Search from "./components/Search.jsx";
import CategoryPage from "./components/CategoryPage.jsx"; // Import the CategoryPage component
import { getBlogs } from "./blogData.js";
import "./App.css";
import "./index.css";

const App = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div>
        <Navbar onSearch={handleSearch} />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/search" element={<Search onSearch={handleSearch} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:category" element={<CategoryPage />} /> {/* New route for category pages */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;