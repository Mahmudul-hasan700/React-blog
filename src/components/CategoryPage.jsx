// src/components/CategoryPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogs, getAuthors } from "../blogData.js";

const CategoryPage = () => {
  const { category } = useParams();
  const blogsInCategory = getBlogs().filter(blog => blog.categories.includes(category));

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
        Blogs in Category: {category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogsInCategory.map(blog => (
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
              {/* Displaying categories for related blog */}
              <div className="flex items-center mb-2">
                {blog.categories.map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`} // Link to the category page
                    className="text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full mr-2"
                  >
                    {category}
                  </Link>
                ))}
              </div>
              {/* Displaying author information for related blog */}
              <div className="flex items-center mb-4">
                <img
                  src={getAuthors().find((author) => author.id === blog.authorId)?.image}
                  alt={getAuthors().find((author) => author.id === blog.authorId)?.Name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <p className="text-sm text-gray-500">
                  {getAuthors().find((author) => author.id === blog.authorId)?.Name} | {blog.createdDate}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;