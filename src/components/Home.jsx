// src/components/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogs } from "../blogData.js";

const Home = ({ searchTerm }) => {
  const pageSize = 10; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  // Get filtered blogs based on the search term
  const filteredBlogs = getBlogs().filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate the start and end index of blogs for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
        Latest Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.map((blog) => (
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
                    to={`/category/${category}`} // Link to the category page
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

      {/* Pagination */}
      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
            currentPage === 1
              ? "bg-gray-200 text-gray-700 cursor-not-allowed"
              : "bg-[#4db1eb] text-white border-none"
          }`}
          disabled={currentPage === 1}
        >
          {" "}
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
              currentPage === index + 1
                ? "bg-[#4db1eb] text-white border-none"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-700 cursor-not-allowed"
              : "bg-[#4db1eb] text-white border-none"
          }`}
          disabled={currentPage === totalPages}
        >
          Next{" "}
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
