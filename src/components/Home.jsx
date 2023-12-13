import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList.jsx";
import { getBlogs, getAuthors } from "../blogData.js";
import { useTheme } from '../ThemeContext.jsx';

const PAGE_SIZE = 15;

const Home = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleBlogClick = (blog) => {
    navigate(`/blog/${blog.id}`);
  };

  const renderBlogList = (blogList) => (
    <BlogList
      filteredBlogs={blogList}
      renderBlogList={(blogs) => (
        <div>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`bg-${isDarkMode ? 'gray-800' : 'white'} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer mb-4`}
              onClick={() => handleBlogClick(blog)}
            >
              <h2 className={`text-xl font-semibold text-${isDarkMode ? 'white' : 'gray-900'} mb-2`}>
                {blog.title}
              </h2>
              {/* Displaying categories */}
              <div className="flex items-center mb-2">
                {blog.categories.map((category, index) => (
                  <span
                    key={index}
                    className={`text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full mr-2`}
                  >
                    {category}
                  </span>
                ))}
              </div>
              {/* Displaying author information */}
              <div className="flex items-center">
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
                <p className={`text-sm text-gray-500`}>
                  {
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.Name
                  }{" "}
                  | {blog.createdDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    />
  );

  const allBlogs = getBlogs();
  const filteredBlogs = allBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalBlogs = filteredBlogs.length;
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={`bg-${isDarkMode ? 'gray-900' : 'gray-100'} text-${isDarkMode ? 'white' : 'gray-800'}`}>
      <div className="mb-4">
        {/* Search input field (you can add your search input component here) */}
      </div>
      {renderBlogList(paginatedBlogs)}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`mx-2 px-4 py-2 bg-indigo-500 text-white rounded-md ${
                page + 1 === currentPage ? "bg-indigo-700" : ""
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;