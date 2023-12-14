// AllSearchResults.jsx
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogs } from "../blogData.js";

const AllSearchResults = () => {
  const { term } = useParams();
  const [searchTerm, setSearchTerm] = useState(term);
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 7;

  useEffect(() => {
    const filteredBlogs = getBlogs().filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setAllBlogs(filteredBlogs);
  }, [searchTerm]);

  // Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
        All Search Results for: {searchTerm}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
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
      {allBlogs.length > blogsPerPage && (
        <div className="flex justify-center mt-4">
          {Array.from({
            length: Math.ceil(allBlogs.length / blogsPerPage),
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
    </div>
  );
};

export default AllSearchResults;
