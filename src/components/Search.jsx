// src/components/Search.jsx
import React, { useState } from "react";
import BlogList from "./BlogList.jsx";
import { getBlogs } from "../blogData.js";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    const blogs = getBlogs();
    const filteredBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchError(filteredBlogs.length === 0);
    setFilteredBlogs(filteredBlogs);

    // Add logic to handle search, you can update the URL or filter blogs directly
  };

  return (
    <div>
      <form className="mb-4" onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Blogs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <div className="absolute right-0 top-0">
            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 rounded-md absolute right-0 top-0 m-1 flex items-center justify-center"
            >
              <svg
                className="w-4 h-4 text-white"
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
          </div>
        </div>
      </form>
      {searchError && (
        <p className="text-red-500">
          No blogs found matching the search criteria. Please try a different
          search term.
        </p>
      )}
      <BlogList filteredBlogs={searchError ? [] : filteredBlogs} />
    </div>
  );
};

export default Search;