// src/components/BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { getAuthors } from "../blogData.js";
import { useTheme } from "../ThemeContext.jsx";

const BlogList = ({ filteredBlogs }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {filteredBlogs.map((blog) => (
        <div
          key={blog.id}
          className={`p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer ${
            isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
          }`}
        >
          <Link to={`/blog/${blog.id}`}>
            <img
              src={blog.image}
              alt={blog.title}
              className="mb-4 rounded-md h-40 w-full object-cover"
            />
            <p className="text-lg font-semibold hover:underline mb-2 line-clamp-3 text-ellipsis">
              {blog.title}
            </p>
          </Link>

          {/* Displaying category */}
          <div className="flex items-center mb-2">
            {blog.categories.map((category, index) => (
              <span
                key={index}
                className={`text-sm ${
                  isDarkMode ? "text-black" : "text-indigo-500"
                } bg-indigo-100 px-2 py-1 rounded-full mr-2`}
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
                getAuthors().find((author) => author.id === blog.authorId)?.Name
              }
              className="w-8 h-8 rounded-full mr-2"
            />
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {getAuthors().find((author) => author.id === blog.authorId)?.Name}{" "}
              | {blog.createdDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
