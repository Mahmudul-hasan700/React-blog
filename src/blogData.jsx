// src/blogData.jsx
const blogs = [
  {
    id: 1,
    title: 'Architectural Engineering Wonders of the modern era for your Inspiration',
    content: `
      Reinvention often comes in spurts, after a long period of silence. 
      Just as modern architecture recently enjoyed a comeback, brand architecture, 
      a field with well-established principles for decades, is back in the limelight.

      Simply understood, brand architecture is the art and science of structuring 
      the portfolio to meet your strategic goals, defining the brand number, scope, 
      and relationships needed to compete. Just as Modern Architecture prioritized 
      function, a Brand Architecture is only as good as it is well-suited for the 
      purpose it strives to achieve. Given the disruption observed today across 
      industries and segments, it’s no wonder that companies are considering structural 
      rather than topical solutions to the challenges they face.
    `,
    image: 'https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1080&q=75',
  },
  {
    id: 2,
    title: 'State Management in Redux',
    content: 'Learn about state management in React using Redux with this blog post.',
    image: 'https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F146854f0-c8f3-4c9b-8c5a-02f2a6c1ac5f%252Fzetong-li-cn-CJo_9DQ0-unsplash.jpg%3Ftable%3Dblock%26id%3D23352c43-f2d0-4373-bffe-b768f180dabc%26cache%3Dv2&w=2048&q=75',
  },
  {
    id: 3,
    title: 'Responsive Web Design with CSS Grid',
    content: 'Explore the principles of responsive web design using CSS Grid in this blog post.',
    image: 'https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F0043b5f6-684a-4d28-a54b-9f4dec8bf091%252Fdog.webp%3Ftable%3Dblock%26id%3De0a6af26-cc40-4d91-8311-fc8dbe3963c0%26cache%3Dv2&w=2048&q=75',
  },
  {
    id: 4,
    title:'The Future of Mobile Apps',
    content: 'Learn about the future of mobile apps using React Native in this blog post.',
    image: 'https://notion-blog-wildcatco.vercel.app/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F0043b5f6-684a-4d28-a54b-9f4dec8bf091%252Fdog.webp%3Ftable%3Dblock%26id%3De0a6af26-cc40-4d91-8311-fc8dbe3963c0%26cache%3Dv2&w=2048&q=75',
  },
];

export const getBlogs = () => blogs;

export const getRecentBlogs = (limit) => blogs.slice(0, limit);

export const getOlderBlogs = (limit) => blogs.slice(-limit);

export default blogs;