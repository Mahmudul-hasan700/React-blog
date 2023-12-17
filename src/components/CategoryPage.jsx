import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogs } from "../blogData.js";

const CategoryPage = () => {
  const { category } = useParams();
  const [blogsInCategory, setBlogsInCategory] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchBlogs = () => {
      // Filter blogs based on the category
      const blogs = getBlogs().filter((blog) =>
        blog.categories.includes(category),
      );
      setBlogsInCategory(blogs);
    };

    // Handle direct navigation with a category
    const categoryFromQueryParams = new URLSearchParams(location.search).get(
      "category",
    );
    if (categoryFromQueryParams && categoryFromQueryParams !== category) {
      fetchBlogs();
    } else {
      fetchBlogs();
    }
  }, [category, location.search]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter uppercase">
        {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogsInCategory.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-4 md:rounded-lg md:shadow-md"
          >
            <Link
              to={`/blog/${blog.id}`}
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
                    <p className="text-blue-400">
                      {
                        getAuthors().find(
                          (author) => author.id === blog.authorId,
                        )?.Name
                      }{" "}
                    </p>
                  </Link>
                  -<p className="text-gray-600 text-sm">{blog.createdDate}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
