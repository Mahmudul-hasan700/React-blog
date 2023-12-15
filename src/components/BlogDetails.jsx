// src/components/BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogById, getBlogs } from "../blogData.js";
import hljs from "highlight.js";
import "highlight.js/styles/default.css"; // Include the desired Highlight.js style

const BlogDetails = () => {
  const myStyle = {
    fontFamily: "Inter, sans-serif",
  };

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

  React.useEffect(() => {
    const codeContainers = document.querySelectorAll(".code-container");

    codeContainers.forEach((container) => {
      const codeElement = container.querySelector("code");

      // Add syntax highlighting
      hljs.highlightBlock(codeElement);

      // Create and append the copy button
      const copyButton = document.createElement("button");
      copyButton.className = "copy-button";
      copyButton.textContent = "Copy";
      copyButton.addEventListener("click", () => {
        const textArea = document.createElement("textarea");
        textArea.value = codeElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        copyButton.textContent = "Copied!";
      });

      container.appendChild(copyButton);
    });
  }, []);

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
        <h2
          className="text-lg font-semibold text-gray-900 mb-2 md:text-2xl md:font-bold"
          style={myStyle}
        >
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
          className="mb-4 rounded-md h-auto w-full object-cover"
        />
        <div className="flex items-center mb-2">
          {blog.categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category}`}
              className="text-sm text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full mr-2 md:text-lg"
            >
              {category}
            </Link>
          ))}
        </div>
        <div
          className="text-[16px] md:text-xl"
          style={myStyle}
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <div className="mt-8 flex items-center justify-center w-full">
        <Link to="/">
          <button className="bg-transparent  text-indigo-500 font-semibold py-2 px-4 rounded flex items-center justify-center gap-1 hover:underline">
            <i className="fas fa-arrow-left"></i>
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
                className="py-1 px-2 text-sm text-indigo-500 bg-gray-100 px-2 py-1 rounded mr-2 md:text-lg lg:text-xl"
              >
                {tag}
              </Link>
            ))}
        </div>
        <div className="py-8 border-b border-gray-100 flex items-center justify-center gap-2">
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="bg-gray-100 text-black font-semibold py-2 px-4 rounded">
              <i class="fas fa-share-nodes text-lg"></i>
            </div>
            <button
              onClick={shareOnTwitter}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            >
              <i className="fa-brands fa-twitter"></i>
            </button>
            <button
              onClick={shareOnFacebook}
              className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button
              onClick={shareOnWhatsApp}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded"
            >
              <i className="fa-brands fa-whatsapp"></i>
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
