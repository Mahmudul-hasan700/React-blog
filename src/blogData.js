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
      "â€˜Emiliano MartÃ­nez speaks on this Argentina team in history, World Cup, psychologist",
    content: `
      Emiliano MartÃ­nez spoke about this Argentina teamâ€™s place in history, winning the World Cup and using a psychologist.
<br><br>
MartÃ­nez has won everything there is to win with the Argentina national team. He won the Copa America while also being named as the best goalkeeper, he won the Finalissima and won the biggest prize there is to win which is the World Cup.
<br><br>
The Argentine was also named the best goalkeeper at the World Cup to continue to cement his legacy in Argentine football. MartÃ­nez spoke to ESPN about the current Argentina teamâ€™s place in history. Here is what he had to say:
<br><br>
â€œI want to win one more Copa America and say: â€˜this team is going to be the best in history.
<br>
What I enjoyed the most and I still enjoy it every day and when I die I will enjoy it too, is that we have one more star in the team.
<br><br>
â€œIt is not only â€˜ah, I won the Cupâ€™ but also â€˜I generated this for the next generationâ€™. They are going to say Argentina has 3 stars and not this generation won the World Cup.
<br><br>
â€œWe generated a standard for the next generation to win the fourth, because in the end, football in Argentina is union, it is passionâ€.
<br><br>
He also commented on the World Cup and speaking to his psychologist after losing to Saudi Arabia in the first match:
<br><br>
â€œI used my psychologist a lot those three days, after Saudi Arabia. I told him: â€˜Look, I think that if I lose to Mexico, Iâ€™m going home, itâ€™s killing meâ€™. I would go to sleep and sometimes I would wake up and say: â€˜If I lose to Mexico, Iâ€™m going homeâ€™.
<br><br>
â€œI was in the room aloneâ€¦ I set up my room for a month. I put pictures of my kids, their favorite dolls, everything. I took the PlayStation, I set it up like at home and I said â€˜I canâ€™t go to Argentina in 10 days, it must be devastatingâ€™.
<br><br>
â€œI have the World Cup in my studio, where I play and have my meetings.
<br><br>
â€œIt is upstairs, and I have it with lights. Sometimes I go in at night and itâ€™s elevated and with light blue lights, I look at it and smile.â€
<br><br>
Dibu also spoke about his performance in the World Cup final:
<br><br>
â€œAgainst France I saved badly, they came at me three times and they were three goals. The one against MbappÃ©, I was in a bad position, I touched it and it beat me.
<br><br>
â€œI didnâ€™t feel I saved well in that final. They see the final save or the penalties, but for me I didnâ€™t save well.â€
<br><br>
Argentinaâ€™s number one goalkeeper commented on his team mates:
<br><br>
â€œI know the virtue of Cuti (Cristian Romero) and Ota (NicolÃ¡s Otamendi). Either the ball passes or the player passes, not both. That gives me life.
<br><br>
â€œIn the final against France, Cuti went with both feet to MbappÃ©, I grabbed him by the shirt at halftime and told him: â€˜if you get kicked out, Iâ€™ll beat you up after the gameâ€™.
<br>
â€œI have to tell Cuti to please stop hitting. He plays like that. But they are impressive.â€.`,
    image:
      "https://mundoalbiceleste.com/wp-content/uploads/2023/12/emiliano-martinez-world-cup-trophy-comments.jpg",
    categories: ["Football", "Emi martinez"],
    createdDate: "2023-12-12",
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
<pre><code class="language-html">
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
    createdDate: "2023-12-13", // Add a created date
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
