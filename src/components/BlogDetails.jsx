// src/components/BlogDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getAuthors } from "../Authors.js";
import { getBlogById, getBlogs } from "../blogData.js";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

const BlogDetails = () => {
  const myStyle = {
    fontFamily: "Inter, sans-serif",
  };

  const { id } = useParams();
  const blog = getBlogById(id);
  const allBlogs = getBlogs();

  if (!blog) {
    return (
      <div>
        <div className="flex flex-col items-center justify-center my-[100px]">
          <p className="text-lg md:text-xl">Ooops... Error 404</p>
          <p className="text-gray-500">
            The blog you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="mt-[50px] p-2 px-3 rounded md:text-lg text-slate-100 bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            HOMEPAGE
          </Link>
        </div>
        {/* Display other blogs in grid style */}
        <p className="text-center text-gray-500 text-lg md:text:xl font-medium">
          OUR LATEST POSTS
        </p>
        <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-2">
          {allBlogs.slice(0, 5).map((otherBlog) => (
            <div key={otherBlog.id} className="flex details mb-4">
              <Link
                to={`/blogs/${otherBlog.id}`}
                className="flex cursor-default"
              >
                <div className="thumbnail">
                  <img
                    className="mr-2 max-w-md h-24 cursor-pointer"
                    src={otherBlog.image}
                    alt={otherBlog.title}
                  />
                </div>
                <div className="title ml-4">
                  <h2 className="text-xl font-semibold line-clamp-2 cursor-pointer">
                    {otherBlog.title}
                  </h2>
                  <div className="flex">
                    <Link
                      to={`/author/${
                        getAuthors().find(
                          (author) => author.id === otherBlog.authorId,
                        )?.Name
                      }`}
                    >
                      <p className="text-blue-400 font-medium">
                        {
                          getAuthors().find(
                            (author) => author.id === otherBlog.authorId,
                          )?.Name
                        }{" "}
                      </p>
                    </Link>
                    <p className="text-gray-600">- {otherBlog.createdDate}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  React.useEffect(() => {
    const codeContainers = document.querySelectorAll(".code-container");

    codeContainers.forEach((container) => {
      const codeElement = container.querySelector("code");

      hljs.highlightBlock(codeElement);

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

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      blog.title,
    )}&url=${encodeURIComponent(window.location.href)}`;
    window.open(twitterUrl, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href,
    )}`;
    window.open(facebookUrl, "_blank");
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
      blog.title,
    )} - ${encodeURIComponent(window.location.href)}`;
    window.location.href = whatsappUrl;
  };

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
          <Link
            to={`/author/${
              getAuthors().find((author) => author.id === blog.authorId)?.Name
            }`}
            className="flex ml-2"
          >
            <p className="text-blue-400 font-mediun">
              {getAuthors().find((author) => author.id === blog.authorId)?.Name}{" "}
            </p>
          </Link>
          -<p className="text-gray-600">{blog.createdDate}</p>
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
              <i className="fas fa-share-nodes text-lg"></i>
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
        {allBlogs.slice(0, 5).map((relatedBlog) => (
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
                By
                <Link
                  to={`/author/${
                    getAuthors().find((author) => author.id === blog.authorId)
                      ?.Name
                  }`}
                  className="flex ml-1"
                >
                  <p className="text-blue-400 font-medium">
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
