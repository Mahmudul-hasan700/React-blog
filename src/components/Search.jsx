// Search.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getBlogs } from "../blogData.js";
import { getAuthors } from "../Authors.js";
import AllSearchResults from "./AllSearchResults.jsx";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearchTerm = queryParams.get("term") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const termFromQueryParams = queryParams.get("term") || "";

    if (termFromQueryParams !== searchTerm) {
      setSearchTerm(termFromQueryParams);
    }
  }, [searchTerm, queryParams]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredBlogs([]);
      return;
    }

    const filteredBlogs = getBlogs().filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredBlogs(filteredBlogs);
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    navigate(`/search?term=${encodeURIComponent(newSearchTerm)}`);
  };

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
        Search
      </h2>
      <div className="flex items-center justify-center">
        <input
          type="text"
          className="border border-gray-300 p-2 mr-2 outline-none rounded-md w-full focus:border-blue-500"
          placeholder="Enter your search"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/blog/${blog.id}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="mb-2 rounded-md h-32 w-full object-cover"
              />
              <p className="text-lg font-semibold text-gray-900 hover:underline line-clamp-3 text-ellipsis">
                {blog.title}
              </p>
              <div className="flex items-center mb-2">
                {blog.categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full mr-2"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <div className="flex items-center mb-4">
                <img
                  src={
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.image
                  }
                  alt={
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.Name
                  }
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-sm text-gray-500">
                  {
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.Name
                  }{" "}
                  | {blog.createdDate}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center mt-4">
          {Array.from({
            length: Math.ceil(filteredBlogs.length / blogsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 bg-indigo-500 text-white rounded ${
                currentPage === index + 1 ? "bg-indigo-600" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center mt-4">
          <Link to={`/search/all/${searchTerm}`} className="text-indigo-500">
            View All Results
          </Link>
        </div>
      )}
    </div>
  );
};

export default Search;
