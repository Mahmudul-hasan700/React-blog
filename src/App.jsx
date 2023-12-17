// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import { getBlogById, getBlogs } from "./blogData.js";
import Search from "./components/Search.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import TagPage from "./components/TagPage.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsConditions from "./components/TermsConditions.jsx";
import AllSearchResults from "./components/AllSearchResults.jsx";
import AuthorPage from "./components/AuthorPage.jsx"; // Import the new component
import "./App.css";
import "./index.css";
import "./styles/App.css";
import "./styles/prism.css";

const App = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
        <div className="w-full p-4">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/tag/:tag" element={<TagPage />} />
            <Route path="/search/all/:term" element={<AllSearchResults />} />
            <Route
              path="/search"
              element={<Search searchTerm={searchTerm} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/author/:authorName" element={<AuthorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
