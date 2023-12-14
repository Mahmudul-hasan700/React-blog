// src/components/BlogDetails.jsx
import React from "react";
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

  // Function to share on Twitter
  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      blog.title,
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(twitterUrl, "_blank");
  };

  // Function to share on Facebook
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href,
    )}`;
    window.open(facebookUrl, "_blank");
  };

  // Function to share on WhatsApp
  const shareOnWhatsApp = () => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
      blog.title,
    )} - ${encodeURIComponent(window.location.href)}`;
    window.location.href = whatsappUrl;
  };

  // Function to count the number of blogs per category
  const countBlogsPerCategory = () => {
    const blogCountPerCategory = {};

    allBlogs.forEach((blog) => {
      blog.categories.forEach((category) => {
        if (blogCountPerCategory[category]) {
          blogCountPerCategory[category]++;
        } else {
          blogCountPerCategory[category] = 1;
        }
      });
    });

    return blogCountPerCategory;
  };

  const blogCountPerCategory = countBlogsPerCategory();

  return (
    <div>
      <div className="bg-white p-2">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {blog.title}
        </h2>
        <div className="flex items-center mb-4">
          By
          <p className="ml-2 text-sm text-blue-500 font-semibold">
            {getAuthors().find((author) => author.id === blog.authorId)?.Name} -{" "}
            {blog.createdDate}
          </p>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="mb-4 rounded-md max-h-52 w-full object-cover"
        />
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
        <div
          className="text-[15px]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="mt-8 flex items-center justify-center w-full">
        <Link to="/">
          <button className="bg-transparent  text-indigo-500 font-semibold py-2 px-4 rounded flex items-center justify-center gap-1 hover:underline">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
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
            </svg>
            View all posts
          </button>
        </Link>
      </div>

      <div className="mt-8 font-inter border-t border-gray-100 mb-[20px]">
        <div className="py-8 border-b border-gray-100 flex items-center flex-wrap gap-1">
          <span className="py-1 px-2 bg-black text-white rounded mr-2">
            Tags:
          </span>
          {blog.tags &&
            blog.tags.map((tag, index) => (
              <Link
                key={index}
                to={`/tag/${tag}`}
                className="py-1 px-2 text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded mr-2"
              >
                {tag}
              </Link>
            ))}
        </div>
        <div className="py-8 border-b border-gray-100 flex items-center justify-center gap-2">
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="bg-gray-100 text-black font-semibold py-2 px-4 rounded">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.2"
                  d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"
                />
              </svg>
            </div>
            <button
              onClick={shareOnTwitter}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                />
              </svg>
            </button>
            <button
              onClick={shareOnFacebook}
              className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
            >
              <svg
                class="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              onClick={shareOnWhatsApp}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-current"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4 text-center font-inter mt-5">
        RELATED ARTICLES
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

      {/* Blog Categories */}
      <div className="mt-8 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center font-inter">
          CATEGORIES
        </h2>
        <div className="w-full md:grid md:grid-cols-2 md:gap-2 flex flex-wrap justify-center gap-4">
          {Object.keys(blogCountPerCategory).map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="text-indigo-500 hover:underline"
            >
              {category} ({blogCountPerCategory[category]})
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
