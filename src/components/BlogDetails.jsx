// src/components/BlogDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById, getAuthors, getBlogs } from "../blogData.js";
import { useTheme } from "../ThemeContext.jsx";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = getBlogById(id);
  const allBlogs = getBlogs();
  const { isDarkMode } = useTheme();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  // Function to get a random number within a range
  const getRandomIndex = (max) => Math.floor(Math.random() * max);

  // Function to get a random set of related blogs
  const getRandomRelatedBlogs = (currentBlogId, totalBlogs, count = 3) => {
    const relatedBlogs = [];
    const excludedIndexes = new Set();

    while (relatedBlogs.length < count) {
      const randomIndex = getRandomIndex(totalBlogs);

      // Avoid adding the current blog and duplicates
      if (randomIndex !== currentBlogId && !excludedIndexes.has(randomIndex)) {
        relatedBlogs.push(allBlogs[randomIndex]);
        excludedIndexes.add(randomIndex);
      }
    }

    return relatedBlogs;
  };

  const relatedBlogs = getRandomRelatedBlogs(blog.id, allBlogs.length);

  return (
    <div>
      <div
        className={`p-6 rounded-lg shadow-md ${
          isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
        }`}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-4 rounded-md h-40 w-full object-cover"
        />
        <p className="text-xl font-semibold mb-2">{blog.title}</p>

        {/* Displaying categories */}
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
        <div className="flex items-center mb-4">
          <img
            src={
              getAuthors().find((author) => author.id === blog.authorId)?.image
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
            {getAuthors().find((author) => author.id === blog.authorId)?.Name} |{" "}
            {blog.createdDate}
          </p>
        </div>

        {/* Displaying HTML content */}
        <div
          className="text-[15px]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="mt-[50px] flex items-center justify-center w-full">
        <Link to="/">
          <button
            className={`bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center gap-2`} >
            <svg
              className="w-6 h-6 text-white"
              ariahidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>{" "}
            View all posts
          </button>
        </Link>
      </div>

      {/* Related Articles Section */}
      <div
        className={`mt-[80px] font-inter ${isDarkMode ? "" : ""}`}
      >
        <h2
          className={`text-2xl font-semibold mb-4 text-center ${
            isDarkMode ? "dark:text-white" : "text-gray-900"
          } font-inter`}
        >
          You May Also Like
        </h2>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
            isDarkMode ? "dark:text-white" : "text-gray-900"
          }`}
        >
          {relatedBlogs.map((relatedBlog) => (
            <div
              key={relatedBlog.id}
              className={`p-4 rounded-lg shadow-md ${
                isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
              }`}
            >
              <Link to={`/blog/${relatedBlog.id}`}>
                <img
                  src={relatedBlog.image}
                  alt={relatedBlog.title}
                  className="mb-2 rounded-md h-32 w-full object-cover"
                />
                <p
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-900"
                  } hover:underline line-clamp-3 text-ellipsis`}
                >
                  {relatedBlog.title}
                </p>
                {/* Displaying categories */}
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
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
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
      </div>
    </div>
  );
};

export default BlogDetails;
