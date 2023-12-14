// src/components/BlogDetails.jsx
import React from "react";
import { Helmet } from 'react-helmet';
import { useParams, Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogById, getBlogs } from "../blogData.js";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = getBlogById(id);
  const allBlogs = getBlogs();

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const getRandomIndex = (max) => Math.floor(Math.random() * max);

  const getRandomRelatedBlogs = (currentBlogId, totalBlogs, count = 3) => {
    const relatedBlogs = [];
    const excludedIndexes = new Set();

    while (relatedBlogs.length < count) {
      const randomIndex = getRandomIndex(totalBlogs);

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
      <div className="bg-white p-2 rounded-lg shadow-md">
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-4 rounded-md h-40 w-full object-cover"
        />
        <p className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</p>
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
          <p className="text-sm text-gray-500">
            {getAuthors().find((author) => author.id === blog.authorId)?.Name} |{" "}
            {blog.createdDate}
          </p>
        </div>
        <div
          className="text-[15px]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="mt-8 flex items-center justify-center w-full">
        <Link to="/">
          <button className="bg-transparent  text-indigo-500 font-semibold py-2 px-4 rounded flex items-center justify-center gap-1"><svg class="w-5 h-5" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
  </svg>View all posts
          </button>
        </Link>
      </div>

  <div className="mt-8 font-inter border-t border-gray-100 mb-[20px]">
        {/* Displaying tags */}
        <div className="py-8 border-b border-gray-100 flex items-center flex-wrap gap-2">
          <span className="py-1 px-2 bg-black text-white rounded">Tags:</span>
          {blog.tags && blog.tags.map((tag, index) => (
            <Link
              key={index}
              to={`/tag/${tag}`} // Link to the tag page
              className="py-1 px-2 text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded mr-2"
            >
              {tag}
            </Link>
          ))}
        </div>
    <div className="py-8 border-b border-gray-100 flex items-center flex-wrap gap-2">

    </div>
        <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedBlogs.map((relatedBlog) => (
            <div
              key={relatedBlog.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <Link to={`/blog/${relatedBlog.id}`}>
                <img
                  src={relatedBlog.image}
                  alt={relatedBlog.title}
                  className="mb-2 rounded-md h-32 w-full object-cover"
                />
                <p className="text-lg font-semibold text-gray-900 hover:underline line-clamp-3 text-ellipsis">
                  {relatedBlog.title}
                </p>
                <div className="flex items-center mb-2">
                  {relatedBlog.categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/category/${category}`} // Link to the category page
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
      </div>
    </div>
  );
};

export default BlogDetails;
