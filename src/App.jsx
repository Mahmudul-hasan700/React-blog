// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import Search from './components/Search.jsx';
import { ThemeProvider, useTheme } from './ThemeContext.jsx';
import './App.css';
import './index.css';

const AppContent = ({ searchTerm }) => {
  const { isDarkMode } = useTheme();

  return (
    <Router>
      <div className={`app-root ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

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
    <ThemeProvider>
      <AppContent searchTerm={searchTerm} />
    </ThemeProvider>
  );
};

export default App;