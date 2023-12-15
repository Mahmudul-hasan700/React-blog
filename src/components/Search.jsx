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
              <div className="flex items-center gap-1 mb-2">
                By
                <Link
                  to={`/author/${
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.Name
                  }`}
                  className="flex"
                >
                  <p className="text-blue-400">
                    {
                      getAuthors().find((author) => author.id === blog.authorId)
                        ?.Name
                    }{" "}
                  </p>
                </Link>
                -<p className="text-gray-600">{blog.createdDate}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center mt-4">
          {/* Previous Button */}
          <button
            className={`px-4 py-2 bg-white text-black border border-gray-300 shadow-md rounded-l-md flex gap-1 items-center justify-center ${
              currentPage === 1 ? "opacity-50" : ""
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fa fa-chevron-left"></i>
            Previous
          </button>

          {/* Next Button */}
          <button
            className={`px-4 py-2 bg-white text-black border border-gray-300 shadow-md rounded-r-md flex gap-1 items-center justify-center ${
              currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)
                ? "opacity-50"
                : ""
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)
            }
          >
            Next <i className="fa fa-chevron-right"></i>
          </button>
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
