// src/components/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogList from "./BlogList.jsx";
import { getBlogs, getRecentBlogs, getOlderBlogs } from "../blogData.js";

const PAGE_SIZE = 15;

const Home = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

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
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => handleBlogClick(blog)}
            >
              {/* Blog content here */}
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
    <div>
      <div className="mb-4">{/* Search input field */}</div>
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
