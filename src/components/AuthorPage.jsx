import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogs } from "../blogData.js";

const AuthorPage = () => {
  const { authorName } = useParams();
  const author = getAuthors().find((author) => author.Name === authorName);
  const allBlogs = getBlogs(); // Retrieve the list of blogs

  const BlogGrid = ({ authorId }) => {
    // Filter blogs based on author's id
    const authorBlogs = allBlogs.filter((blog) => blog.authorId === authorId);

    // Pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = authorBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    return (
      <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="flex details mb-4">
            <Link
              to={`/blog/${blog.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="flex cursor-pointer"
            >
              <div className="thumbnail">
                <img
                  className="mr-2 max-w-md h-24 cursor-pointer"
                  src={blog.image}
                  alt={blog.title}
                />
              </div>
              <div className="title ml-4">
                <h2 className="text-xl font-semibold line-clamp-2 cursor-pointer">
                  {blog.title}
                </h2>
                <div className="flex">
                  <Link
                    to={`/author/${
                      getAuthors().find(
                        (author) => author.id === blog.authorId
                      )?.Name
                    }`}
                  >
                    <p className="text-blue-400 font-medium">
                      {getAuthors()
                        .find((author) => author.id === blog.authorId)
                        ?.Name}
                    </p>
                  </Link>
                  <p className="text-gray-600">- {blog.createdDate}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  useEffect(() => {
    setCurrentPage(1); // Reset current page when author changes
  }, [authorName, allBlogs]);

  if (!author) {
    // Handle the case where the author is not found
    return (
      <div>
        <p>Author not found</p>
      </div>
    );
  }

  // Function to handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-2">{author.Name}</h1>
        <img
          src={author.image}
          alt={author.Name}
          className="rounded-full h-24 w-24 mb-4"
        />
        <p className="text-gray-600 mb-8">{author.bio}</p>
      </div>

      {/* Display blog posts or additional information about the author */}
      <div>
        <div className="blog-section">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Blog Posts by{" "}
            <span className="text-blue-500 font-semibold">{author.Name}</span>
          </h2>
          <BlogGrid authorId={author.id} />
        </div>
      </div>

      {/* Pagination */}
      {allBlogs.filter((blog) => blog.authorName === author.Name).length >
        blogsPerPage && (
        <div className="flex justify-center mt-4">
          {/* Previous Button */}
          <button
            className={`px-4 py-2 bg-white text-black border border-gray-300 shadow-md rounded-l-md flex gap-1 items-center justify-center ${
              currentPage === 1 ? "opacity-50" : ""
            }`}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="fa fa-chevron-left"></i>Previous
          </button>

          {/* Next Button */}
          <button
            className={`px-4 py-2 bg-white text-black border border-gray-300 shadow-md rounded-r-md flex gap-1 items-center justify-center ${
              currentBlogs.length < blogsPerPage ? "opacity-50" : ""
            }`}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentBlogs.length < blogsPerPage}
          >
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthorPage;