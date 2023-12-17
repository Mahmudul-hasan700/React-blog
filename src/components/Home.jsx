import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogs } from "../blogData.js";

const Home = ({ searchTerm }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const myStyle = {
    fontFamily: "Inter, sans-serif",
  };

  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

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

  const shouldShowPagination = totalPages > 1;
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3;

    const startPage =
      currentPage <= Math.floor(maxVisiblePages / 2)
        ? 1
        : Math.min(
            currentPage - Math.floor(maxVisiblePages / 2),
            totalPages - maxVisiblePages + 1,
          );

    const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`flex items-center justify-center p-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-sm ${
            currentPage === i
              ? "text-black border border-gray-300"
              : "text-gray-700 border-none"
          }`}
        >
          {i}
        </button>,
      );
    }

    return pageNumbers.map((button, index) => (
      <span key={index}>{button}</span>
    ));
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center" style={myStyle}>
        LATEST ARTICLES
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-2 pb-2.5 rounded-lg md:shadow-md"
          >
            <Link
              to={`/blog/${blog.id}`}
              className="flex cursor-default md:flex md:flex-col md:gap-4 md:p-4 md:text-base grid grid-cols-[150px,1fr] gap-2"
            >
              <div
                className={`md:w-full md:overflow-hidden md:rounded-md w-[150px] rounded-md overflow-hidden ${
                  imageLoaded ? "opacity-100" : "animate-pulse"
                }`}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`cursor-pointer md:w-full md:h-auto w-full h-auto rounded-md hover:scale-110 ease-in-out duration-300 ${
                    imageLoaded ? "opacity-100" : "hidden"
                  }`}
                  onLoad={handleImageLoad}
                />
              </div>
              <div className="flex-1">
                <p
                  className="text-lg font-semibold text-gray-900 hover:underline line-clamp-2 md:line-clamp-3 text-ellipsis"
                  style={myStyle}
                >
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

      {shouldShowPagination && (
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handlePrevPage}
            className={`flex items-center justify-center gap-2 px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-sm disabled:opacity-0 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                : "bg-gray-200 text-black border-none"
            }`}
            disabled={currentPage === 1}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNextPage}
            className={`flex items-center justify-center gap-2 px-3 h-8 me-3 text-sm font-medium text-gray-500 border border-gray-300 rounded-sm disabled:opacity-0 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-700 cursor-not-allowed"
                : "bg-gray-200 text-black border-none"
            }`}
            disabled={currentPage === totalPages}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      <div className="mt-8 w-full">
        <div className="mb-4 w-full border-b-2 border-black flex items-start">
          <p className="text-xl font-semibold bg-black text-white inline px-2 py-1">
            CATEGORIES
          </p>
        </div>
        <div className="w-full gap-4">
          {Object.keys(blogCountPerCategory).map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="w-full flex items-center justify-between block text-black hover:text-[#4db1eb] hover:underline text-[17px]"
            >
              <span>{category}</span>
              <span>{blogCountPerCategory[category]}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
