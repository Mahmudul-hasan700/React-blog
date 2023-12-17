// src/blogData.jsx
const blogs = [
  {
    id: 11,
    title: "The Future of Mobile Apps",
    content:
      "Learn about the future of mobile apps using React Native in this blog post.",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F0043b5f6-684a-4d28-a54b-9f4dec8bf091%252Fdog.webp%3Ftable%3Dblock%26id%3De0a6af26-cc40-4d91-8311-fc8dbe3963c0%26cache%3Dv2&w=2048&q=75",
    categories: ["Coding"],
    createdDate: "2023-12-13",
    tags: ["Html-css-js", "Web Development", "React"],
    authorId: 1,
  },
  {
    id: 12,
    title: "Another Blog Title",
    content:
      "Content of another blog post goes here. You can customize it as needed.",
    image:
      "https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F0043b5f6-684a-4d28-a54b-9f4dec8bf091%252Fdog.webp%3Ftable%3Dblock%26id%3De0a6af26-cc40-4d91-8311-fc8dbe3963c0%26cache%3Dv2&w=2048&q=75",
    categories: ["Development"],
    createdDate: "2023-12-14",
    tags: ["JavaScript", "Frontend"],
    authorId: 2,
  },
  // Add more blog entries as needed
];

export const getBlogs = () =>
  blogs.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

export const getBlogByTitle = (title) => {
  return blogs.find((blog) => blog.title.toLowerCase() === title.toLowerCase());
};

export const getRecentBlogs = (limit) => blogs.slice(0, limit);

export const getOlderBlogs = (limit) => blogs.slice(-limit);

export default blogs;