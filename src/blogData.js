// src/blogData.js
const authors = [
  {
    id: 1,
    Name: "John Doe",
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75",
  },
  {
    id: 2,
    Name: "Erika Oliver",
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75",
  },
  {
    id: 3,
    Name: "Josua Wood",
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=828&q=75",
  },
];

const blogs = [
  {
    id: 1,
    title:
      "Architectural Engineering Wonders of the Modern Era for Your Inspiration",
    content: `
        <b>Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight.</b><br><br>

        Simply understood, brand <a href="https://stablo-template.vercel.app/post/3-meaningful-ways-to-practice-self-care-as-an-introvert" class="underline text-indigo-500 font-semibold">architecture</a> is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, itâ€™s no wonder that companies are considering structural rather than topical solutions to the challenges they face.
    `,
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1080&q=75",
    categories: ["Architecture", "Nature"],
    createdDate: "2023-12-08",
    authorId: 1,
  },

  {
    id: 2,
    title: "This Bread Pudding Will Give You All the Fall Feels",
    content: `
      Reinvention often comes in spurts, after a long period of silence. 
      Just as modern architecture recently enjoyed a comeback, brand architecture, 
      a field with well-established principles for decades, is back in the limelight.

      Simply understood, brand architecture is the art and science of structuring 
      the portfolio to meet your strategic goals, defining the brand number, scope, 
      and relationships needed to compete. Just as Modern Architecture prioritized 
      function, a Brand Architecture is only as good as it is well-suited for the 
      purpose it strives to achieve. Given the disruption observed today across 
      industries and segments, itâ€™s no wonder that companies are considering structural 
      rather than topical solutions to the challenges they face.
    `,
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75",
    categories: ["Travel"],
    createdDate: "2023-12-09", // Add a created date
    authorId: 2, // Link to the author by ID
  },
  {
    id: 3,
    title: "Explore these top 6 programming languages for robotics developer",
    content: `
      In the ever-evolving world of robotics, where machines seamlessly interact with the physical world, the role of a robotics developer is both exciting and challenging. To navigate this dynamic field successfully, developers must be fluent in programming languages that cater to the specific demands of robotics. This article explores six essential programming languages that every robotics developer must master to excel in this cutting-edge domain.<br>
      <ul class="list-decimal mt-2 list-inside">
      <li class="mt-1 font-bold">C/C++: The Foundation of Robotics Programming:</li>
      <p>C and C++ are the bedrock of robotics development, providing a powerful and efficient programming foundation. These languages allow developers to control hardware directly and optimize performance, a crucial aspect in robotics where real-time responsiveness is paramount. From embedded systems to low-level programming, C/C++ is the go-to choice for tasks that demand speed and precision.</p>
      <li class="mt-1 font-bold">Python: The Versatile Scripting Language:</li>
      <p>Pythonâ€™s readability, versatility, and extensive libraries make it a popular choice for robotics developers. While it may not be the first choice for real-time control due to its interpreted nature, Python excels in high-level tasks such as algorithm development, simulation, and data analysis. Frameworks like ROS (Robot Operating System) heavily rely on Python, making it indispensable in the robotics ecosystem.</p>
      <li class="mt-1 font-bold">Java: Building Robust and Scalable Robotic Systems:</li>
      <p>Javaâ€™s platform independence and scalability make it a valuable language for developing large-scale robotic systems. With Java, developers can build robust and modular applications, ensuring scalability and maintainability. While it may not be as close to the hardware as C/C++, Javaâ€™s portability and object-oriented features contribute to efficient robotics software development.</p>
      <li class="mt-1 font-bold">ROS (Robot Operating System) â€“ Not a Language, but Crucial:</li>
      <p>While not a programming language per se, ROS is a middleware framework that facilitates communication between robotic components. It provides a standardized way for different parts of a robotic system to communicate and share data. Understanding and working with ROS is essential for robotics developers as it simplifies the integration of hardware and software components, allowing for more efficient development and collaboration.</p>
      <li class="mt-1 font-bold">MATLAB: Accelerating Algorithm Development:</li>
      <p>MATLAB is widely used in robotics for its powerful mathematical and simulation capabilities. It is especially popular for algorithm development, modelling, and simulation before the code is implemented on a physical robot. MATLABâ€™s extensive toolbox simplifies complex mathematical operations, making it a valuable asset for robotics developers working on algorithms for perception, control, and planning.</p>
      </ul>
      `,
    image:
      "https://www.analyticsinsight.net/wp-content/uploads/2023/12/6-Programming-Languages-Every-Robotics-Developer-Must-Know.jpg",
    categories: ["Technology"],
    createdDate: "2023-12-10",
    authorId: 3,
  },
  {
    id: 4,
    title:
      "â€˜Nobody knows what really happenedâ€™ â€“ Barcelona star still â€˜shockedâ€™ by Lionel Messi exit as Sergi Roberto reacts to rumours of reuniting with Argentine icon at MLS side Inter Miami",
    content: `
      Reinvention often comes in spurts, after a long period of silence.`,
    image:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbb4435364eedb077/65784e43a11649040ae45dca/GOAL_-_Blank_WEB_-_Facebook_-_2023-12-12T121230.076.png?auto=webp&format=pjpg&width=2048&quality=60",
    categories: ["Football", " Messi"],
    createdDate: "2023-12-11", // Add a created date
    authorId: 1,
  },
  {
    id: 5,
    title:
      "Create A Glassmorphism Login Form in HTML and CSS",
    content: `
      You may have seen trendy Glassmorphism effects on login forms, cards, and various components on different websites. As a beginner web developer, have you ever thought about creating your own Login form with Glassmorphism effects?
<br><br>
If you’re unfamiliar, glassmorphism is a user interface design trend that creates the illusion of translucent and blurred glass surfaces. This effect gives the elements a semi-transparent look, making the background and foreground blend smoothly.
<br><br>
In this beginner-friendly blog post, I’ll guide you through the steps of creating a Glassmorphism Login Form in HTML and CSS only. Not only will you learn to create forms with a stunning glass-like effect, but you’ll also learn how to add an engaging floating-label animation.
<br><br>
<h1 class="text-xl font-bold">Steps To Create Glassmorphism Login Form HTML & CSS:<h1>
<br>
To create a Login Form with a glassmorphism effect and floating input label animation using HTML and CSS, follow these simple instructions step-by-step:
<br><br>
<ul class="list-disc list-inside">
<li class="mt-2">Create a folder. You can name this folder whatever you want, and inside this folder, create the mentioned files.</li>
<li class="mt-2">Create an <code>index.html</code> file. The file name must be index and its extension .html</li>
<li class="mt-2">Create a <code>style.css</code> file. The file name must be style and its extension .css</li>
</ul>
<br><br>
To start, add the following HTML codes to your index.html file. These codes include essential HTML elements such as forms, input, links, buttons, and others. For basic form validation, I’ve also included the “required” attribute for the input fields.
<br><br>
<div class="container w-full prose h-96 overflow-y-auto rounded-md">
<pre class="code-block">
<code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;!-- Coding By CodingNepal - www.codingnepalweb.com --&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Glassmorphism Login Form | CodingNepal&lt;/title&gt;
  &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class=&quot;wrapper&quot;&gt;
    &lt;form action=&quot;#&quot;&gt;
      &lt;h2&gt;Login&lt;/h2&gt;
      &lt;div class=&quot;input-field&quot;&gt;
        &lt;input type=&quot;text&quot; required&gt;
        &lt;label&gt;Enter your email&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class=&quot;input-field&quot;&gt;
        &lt;input type=&quot;password&quot; required&gt;
        &lt;label&gt;Enter your password&lt;/label&gt;
      &lt;/div&gt;
      &lt;div class=&quot;forget&quot;&gt;
        &lt;label for=&quot;remember&quot;&gt;
          &lt;input type=&quot;checkbox&quot; id=&quot;remember&quot;&gt;
          &lt;p&gt;Remember me&lt;/p&gt;
        &lt;/label&gt;
        &lt;a href=&quot;#&quot;&gt;Forgot password?&lt;/a&gt;
      &lt;/div&gt;
      &lt;button type=&quot;submit&quot;&gt;Log In&lt;/button&gt;
      &lt;div class=&quot;register&quot;&gt;
        &lt;p&gt;Don't have an account? &lt;a href=&quot;#&quot;&gt;Register&lt;/a&gt;&lt;/p&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>
<br><br>
Next, add the following CSS codes to your style.css file to style our login form, along with the glassmorphism effect and floating label animation. These lines of code include various CSS properties like blur, background, background image, etc. to achieve the desired Glassmorphism effect.
<br><br>
<div class="container w-full prose h-96 overflow-y-auto rounded-md">
<pre class="code-block">
<code class="language-html">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 0 10px;
}

body::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("https://www.codingnepalweb.com/demos/create-glassmorphism-login-form-html-css/hero-bg.jpg"), #000;
  background-position: center;
  background-size: cover;
}

.wrapper {
  width: 400px;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
}

form {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
}

.input-field {
  position: relative;
  border-bottom: 2px solid #ccc;
  margin: 15px 0;
}

.input-field label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 16px;
  pointer-events: none;
  transition: 0.15s ease;
}

.input-field input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
}

.input-field input:focus~label,
.input-field input:valid~label {
  font-size: 0.8rem;
  top: 10px;
  transform: translateY(-120%);
}

.forget {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px 0 35px 0;
  color: #fff;
}

#remember {
  accent-color: #fff;
}

.forget label {
  display: flex;
  align-items: center;
}

.forget label p {
  margin-left: 8px;
}

.wrapper a {
  color: #efefef;
  text-decoration: none;
}

.wrapper a:hover {
  text-decoration: underline;
}

button {
  background: #fff;
  color: #000;
  font-weight: 600;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 3px;
  font-size: 16px;
  border: 2px solid transparent;
  transition: 0.3s ease;
}

button:hover {
  color: #fff;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.15);
}

.register {
  text-align: center;
  margin-top: 30px;
  color: #fff;
}
</pre></code></div>
<br><br>
<br><br>`,
    image:
      "https://www.codingnepalweb.com/wp-content/uploads/2023/07/Create-A-Glassmorphism-Login-Form-in-HTML-and-CSS-1068x601.jpg",
    categories: ["HTML and CSS"],
    tags: ['coding', 'CSS', 'CSS Login Form','Frontend', 'glassmorphism', 'Login Form', 'Html', 'Html login Form'],
    createdDate: "2023-12-14",    
    authorId: 1,
  },
  {
    id: 6,
    title: "How to Create Responsive Fiverr Website in HTML and CSS",
    content: `
      If youâ€™re a beginner web developer, creating a Fiverr website using HTML and CSS is a valuable opportunity to gain real-world experience. By recreating the design of a well-established platform like Fiverr, youâ€™ll not only develop practical skills in HTML and CSS but also demonstrate your ability to replicate existing designs.
<br><br>
In this easy-to-follow blog post, Iâ€™ll show you how to create a responsive Fiverr website using only HTML, CSS, and JavaScript. Youâ€™ll learn how to create an interactive websiteâ€™s homepage with a navigation bar, position elements on the page, and style them to match the Fiverr look and feel.
<br><br>
Throughout the post, weâ€™ll explore a variety of HTML tags and CSS properties to efficiently create our Fiverr-inspired homepage. To create an attractive layout that attracts viewers and ensures a simple interface, weâ€™ll use tags like nav, sections, divs, inputs, links, and other commonly used tags.
<br><br>
<h1 class="text-xl font-bold">Steps To Create Fiverr Website in HTML and CSS:</h1>
<br><br>
To create a responsive Fiverr-inspired Homepage using HTML and CSS, follow these step-by-step instructions:
<br><br>
<ul class="list-disc list-inside">
<li>First, create a folder with any name you like. Then, put the necessary files inside it.</li>
<li>Create a file called <code>index.html</code> to serve as the main file.</li>
<li>Create a file called <code>style.css</code> for the CSS code.</li>
<li>Download and place the <a href="https://www.codingnepalweb.com/custom-projects/fiverr-website-images.zip" class="text-indigo-500">Images</a> folder in your project directory. This folder includes the Fiverr logo and the hero background image.</li>
</ul>
<br><br>
<p class="text-gray-700">To start, add the following HTML codes to your <code>index.html</code> file. These codes include a navigation bar (nav), sections, input fields, links, and various other tags necessary for your webpage. Additionally, this code includes a few lines of JavaScript code to toggle the mobile menu on small screens.</p>
<br><br>
<div class="container w-full prose h-96 overflow-y-auto rounded-md">
<pre class="code-block">
<code class="language-html">
&lt;!DOCTYPE html&gt;
&lt;!-- Coding By CodingNepal - www.codingnepalweb.com --&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Fiverr Homepage Clone | CodingNepal&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
    &lt;!-- Google Icons Link --&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;nav class=&quot;navbar&quot;&gt;
            &lt;a href=&quot;#&quot; class=&quot;logo&quot;&gt;
                &lt;img src=&quot;images/logo.svg&quot; alt=&quot;Fiverr Logo&quot;&gt;
            &lt;/a&gt;
            &lt;ul class=&quot;menu-links&quot;&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Fiverr Business&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Explore&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;language-item&quot;&gt;
                    &lt;a href=&quot;#&quot;&gt;
                        &lt;span class=&quot;material-symbols-outlined&quot;&gt;language&lt;/span&gt; English
                    &lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Become a Seller&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Sign In&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;join-btn&quot;&gt;&lt;a href=&quot;#&quot;&gt;Join Us&lt;/a&gt;&lt;/li&gt;
                &lt;span id=&quot;close-menu-btn&quot; class=&quot;material-symbols-outlined&quot;&gt;close&lt;/span&gt;
            &lt;/ul&gt;
            &lt;span id=&quot;hamburger-btn&quot; class=&quot;material-symbols-outlined&quot;&gt;menu&lt;/span&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    &lt;section class=&quot;hero-section&quot;&gt;
        &lt;div class=&quot;content&quot;&gt;
            &lt;h1&gt;Find the right freelance service, right away&lt;/h1&gt;
            &lt;form action=&quot;#&quot; class=&quot;search-form&quot;&gt;
                &lt;input type=&quot;text&quot; placeholder=&quot;Search for any service...&quot; required&gt;
                &lt;button class=&quot;material-symbols-outlined&quot; type=&quot;submit&quot;&gt;search&lt;/button&gt;
            &lt;/form&gt;
            &lt;div class=&quot;popular-tags&quot;&gt; Popular: &lt;ul class=&quot;tags&quot;&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Webite Design&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Logo Design&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;WordPress&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#&quot;&gt;AI Design&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
    &lt;script&gt;
    const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>
<br><br>
<p>
  Next, add the following CSS codes to your <code>style.css</code> file to make your webpage look like the Fiverr Homepage. These codes include various styles for elements like color, background, border, and even the homepage image. Additionally, they make your webpage responsive using media queries.
</p>
<br><br>
<div class="container w-full prose h-96 overflow-y-auto rounded-md">
  <pre class="code-block">
    <code class="language-css">
/* Importing Google font - Fira Sans */
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

body {
  background: #1B1B1D;
}

header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  padding: 20px;
}

header .navbar {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar .menu-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
}

.navbar .menu-links li a {
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  transition: 0.2s ease;
}

.navbar .menu-links .language-item a {
  display: flex;
  gap: 8px;
  align-items: center;
}

.navbar .menu-links .language-item span {
  font-size: 1.3rem;
}

.navbar .menu-links li a:hover {
  color: #1dbf73;
}

.navbar .menu-links .join-btn a {
  border: 1px solid #fff;
  padding: 8px 15px;
  border-radius: 4px;
}

.navbar .menu-links .join-btn a:hover {
  color: #fff;
  border-color: transparent;
  background: #1dbf73;
}

.hero-section {
  height: 100vh;
  background-image: url("images/hero-img.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  padding: 0 20px;
  align-items: center;
}

.hero-section .content {
  max-width: 1280px;
  margin: 0 auto 40px;
  width: 100%;
}

.hero-section .content h1 {
  color: #fff;
  font-size: 3rem;
  max-width: 630px;
  line-height: 65px;
}

.hero-section .search-form {
  height: 48px;
  display: flex;
  max-width: 630px;
  margin-top: 30px;
}

.hero-section .search-form input {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 1rem;
  border-radius: 4px 0 0 4px;
}

.hero-section .search-form button {
  height: 100%;
  width: 60px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #1dbf73;
  color: #fff;
  border-radius: 0 4px 4px 0;
  transition: background 0.2s ease;
}

.hero-section .search-form button:hover {
  background: #19a463;
}

.hero-section .popular-tags {
  display: flex;
  color: #fff;
  gap: 25px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 25px;
}

.hero-section .popular-tags .tags {
  display: flex;
  gap: 15px;
  align-items: center;
  list-style: none;
}

.hero-section .tags li a {
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 4px 12px;
  border-radius: 50px;
  transition: 0.2s ease;
}

.hero-section .tags li a:hover {
  color: #000;
  background: #fff;
}

.navbar #hamburger-btn {
  color: #fff;
  cursor: pointer;
  display: none;
  font-size: 1.7rem;
}

.navbar #close-menu-btn {
  position: absolute;
  display: none;
  color: #000;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.7rem;
}

@media screen and (max-width: 900px) {
  header.show-mobile-menu::before {
    content: "";
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    backdrop-filter: blur(5px);
  }

  .navbar .menu-links {
    height: 100vh;
    max-width: 300px;
    width: 100%;
    background: #fff;
    position: fixed;
    left: -300px;
    top: 0;
    display: block;
    padding: 75px 40px 0;
    transition: left 0.2s ease;
  }

  header.show-mobile-menu .navbar .menu-links {
    left: 0;
  }

  .navbar .menu-links li {
    margin-bottom: 30px;
  }

  .navbar .menu-links li a {
    color: #000;
    font-size: 1.1rem;
  }

  .navbar .menu-links .join-btn a {
    padding: 0;
  }

  .navbar .menu-links .join-btn a:hover {
    color: #1dbf73;
    background: none;
  }

  .navbar :is(#close-menu-btn, #hamburger-btn) {
    display: block;
  }

  .hero-section {
    background: none;
  }

  .hero-section .content {
    margin: 0 auto 80px;
  }

  .hero-section .content :is(h1, .search-form) {
    max-width: 100%;
  }

  .hero-section .content h1 {
    text-align: center;
    font-size: 2.5rem;
    line-height: 55px;
  }

  .hero-section .search-form {
    display: block;
    margin-top: 20px;
  }

  .hero-section .search-form input {
    border-radius: 4px;
  }

  .hero-section .search-form button {
    margin-top: 10px;
    border-radius: 4px;
    width: 100%;
  }

  .hero-section .popular-tags {
    display: none;
  }
}
</code></pre>
</div>
`,
    image:
      "https://www.codingnepalweb.com/wp-content/uploads/2023/07/How-to-Create-Responsive-Fiverr-Website-in-HTML-CSS-and-JavaScript.jpg",
    categories: ["Coding"],
    createdDate: "2023-12-13",
    tags: ['Html-css-js', 'Web Development', 'React'],
    authorId: 1,
  },
];

export const getBlogs = () =>
  blogs.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
export const getBlogById = (id) => blogs.find((blog) => blog.id === Number(id));
export const getRecentBlogs = (limit) => blogs.slice(0, limit);
export const getOlderBlogs = (limit) => blogs.slice(-limit);
export const getAuthors = () => authors;

export default blogs;
