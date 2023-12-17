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
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
        Blogs in Category: {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogsInCategory.map((blog) => (
          <div key={blog.title} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/blog/${blog.title.replace(/\s+/g, "-").toLowerCase()}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="mb-2 rounded-md h-32 w-full object-cover"
              />
              <p className="text-lg font-semibold text-gray-900 hover:underline line-clamp-3 text-ellipsis">
                {blog.title}
              </p>
              {/* Displaying categories for related blog */}
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
                By
                <Link
                  to={`/author/${
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.Name
                  }`}
                  className="flex ml-2"
                >
                  <p className="text-blue-400">
                    {
                      getAuthors().find((author) => author.id === blog.authorId)
                        ?.Name
                    }{" "}
                  </p>
                </Link>
                -<p className="text-gray-600">{blog.createdDate}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
