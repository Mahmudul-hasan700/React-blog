// src/components/TagPage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogs } from "../blogData.js";

const TagPage = () => {
  const { tag } = useParams();
  const blogsWithTag = getBlogs().filter((blog) =>
    blog.tags && blog.tags.includes(tag)
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
        Blogs with Tag: {tag}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogsWithTag.map((blog) => (
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagPage;