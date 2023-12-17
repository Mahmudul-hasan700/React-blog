import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogs } from "../blogData.js";

const Home = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;

  const filteredBlogs = getBlogs().filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedBlogs = filteredBlogs.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const countBlogsPerCategory = () => {
    const blogCountPerCategory = {};

    getBlogs().forEach((blog) => {
      blog.categories.forEach((category) => {
        if (blogCountPerCategory[category]) {
          blogCountPerCategory[category]++;
        } else {
          blogCountPerCategory[category] = 1;
        }
      });
    });

    return blogCountPerCategory;
  };

  const blogCountPerCategory = countBlogsPerCategory();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        LATEST ARTICLES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-2 pb-2.5 rounded-lg md:shadow-md"
          >
            <Link
              key={blog.id}
              to={`/blog/${blog.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="flex cursor-default md:flex md:flex-col md:gap-4 md:p-4 md:text-base grid grid-cols-[150px,1fr] gap-2"
            >
              <div className="md:w-full md:overflow-hidden md:rounded-md w-[150px] rounded-md">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="cursor-pointer md:w-full md:h-auto w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900 hover:underline line-clamp-2 md:line-clamp-3 text-ellipsis">
                  {blog.title}
                </p>
                <div className="flex items-center mb-2 hidden md:block">
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
                <div className="flex items-center mb-2 gap-1">
                  <Link
                    to={`/author/${
                      getAuthors().find((author) => author.id === blog.authorId)
                        ?.Name
                    }`}
                    className="flex"
                  >
                    <p className="text-blue-400 font-medium">
                      {
                        getAuthors().find(
                          (author) => author.id === blog.authorId,
                        )?.Name
                      }{" "}
                    </p>
                  </Link>
                  -
                  <p className="text-gray-600 text-[14px]">
                    {blog.createdDate}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handlePrevPage}
          className={`flex items-center justify-center gap-2 px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg ${
            currentPage === 1
              ? "bg-gray-200 text-gray-700 cursor-not-allowed"
              : "bg-[#4db1eb] text-white border-none"
          }`}
          disabled={currentPage === 1}
          aria-label="Go to Previous Page"
        >
          {" "}
          <i className=" fas fa-arrow-left"></i> Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#4db1eb] text-white border-none"
                : "bg-gray-200 text-gray-700"
            }`}
            aria-label={`Go to Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`flex items-center justify-center gap-2 px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-700 cursor-not-allowed"
              : "bg-[#4db1eb] text-white border-none"
          }`}
          disabled={currentPage === totalPages}
          aria-label="Go to Next Page"
        >
          Next <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <div className="mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
          CATEGORIES
        </h2>
        <div className="w-full md:grid md:grid-cols-2 md:gap-2 flex flex-wrap justify-center gap-4">
          {Object.keys(blogCountPerCategory).map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="text-indigo-500 hover:underline text-[17px]"
            >
              {category} ({blogCountPerCategory[category]})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
