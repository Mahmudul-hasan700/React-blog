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

        Simply understood, brand <a href="https://stablo-template.vercel.app/post/3-meaningful-ways-to-practice-self-care-as-an-introvert" class="underline text-indigo-500 font-semibold">architecture</a> is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Architecture prioritized function, a Brand Architecture is only as good as it is well-suited for the purpose it strives to achieve. Given the disruption observed today across industries and segments, it’s no wonder that companies are considering structural rather than topical solutions to the challenges they face.
    `,
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1080&q=75",
    categories: ["Architecture", "Nature"],
    createdDate: "2023-01-15",
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
      industries and segments, it’s no wonder that companies are considering structural 
      rather than topical solutions to the challenges they face.
    `,
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75",
    categories: ["Travel"],
    createdDate: "2023-12-12", // Add a created date
    authorId: 2, // Link to the author by ID
  },
  {
    id: 3,
    title: "Explore these top 6 programming languages for robotics developer",
    content: `
      In the ever-evolving world of robotics, where machines seamlessly interact with the physical world, the role of a robotics developer is both exciting and challenging. To navigate this dynamic field successfully, developers must be fluent in programming languages that cater to the specific demands of robotics. This article explores six essential programming languages that every robotics developer must master to excel in this cutting-edge domain.<br>
      <ul class="list-decimal mt-2">
      <li class="mt-1 font-bold">C/C++: The Foundation of Robotics Programming:</li>
      <p>C and C++ are the bedrock of robotics development, providing a powerful and efficient programming foundation. These languages allow developers to control hardware directly and optimize performance, a crucial aspect in robotics where real-time responsiveness is paramount. From embedded systems to low-level programming, C/C++ is the go-to choice for tasks that demand speed and precision.</p>
      <li class="mt-1 font-bold">Python: The Versatile Scripting Language:</li>
      <p>Python’s readability, versatility, and extensive libraries make it a popular choice for robotics developers. While it may not be the first choice for real-time control due to its interpreted nature, Python excels in high-level tasks such as algorithm development, simulation, and data analysis. Frameworks like ROS (Robot Operating System) heavily rely on Python, making it indispensable in the robotics ecosystem.</p>
      <li class="mt-1 font-bold">Java: Building Robust and Scalable Robotic Systems:</li>
      <p>Java’s platform independence and scalability make it a valuable language for developing large-scale robotic systems. With Java, developers can build robust and modular applications, ensuring scalability and maintainability. While it may not be as close to the hardware as C/C++, Java’s portability and object-oriented features contribute to efficient robotics software development.</p>
      <li class="mt-1 font-bold">ROS (Robot Operating System) – Not a Language, but Crucial:</li>
      <p>While not a programming language per se, ROS is a middleware framework that facilitates communication between robotic components. It provides a standardized way for different parts of a robotic system to communicate and share data. Understanding and working with ROS is essential for robotics developers as it simplifies the integration of hardware and software components, allowing for more efficient development and collaboration.</p>
      <li class="mt-1 font-bold">MATLAB: Accelerating Algorithm Development:</li>
      <p>MATLAB is widely used in robotics for its powerful mathematical and simulation capabilities. It is especially popular for algorithm development, modelling, and simulation before the code is implemented on a physical robot. MATLAB’s extensive toolbox simplifies complex mathematical operations, making it a valuable asset for robotics developers working on algorithms for perception, control, and planning.</p>
      </ul>
      `,
    image:
      "https://www.analyticsinsight.net/wp-content/uploads/2023/12/6-Programming-Languages-Every-Robotics-Developer-Must-Know.jpg",
    categories: ["Technology"],
    createdDate: "December-13-2023",
    authorId: 3,
  },
  {
    id: 4,
    title:
      "‘Nobody knows what really happened’ – Barcelona star still ‘shocked’ by Lionel Messi exit as Sergi Roberto reacts to rumours of reuniting with Argentine icon at MLS side Inter Miami",
    content: `
      Reinvention often comes in spurts, after a long period of silence.`,
    image:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbb4435364eedb077/65784e43a11649040ae45dca/GOAL_-_Blank_WEB_-_Facebook_-_2023-12-12T121230.076.png?auto=webp&format=pjpg&width=2048&quality=60",
    categories: ["Football", " Messi"],
    createdDate: "2023-12-12", // Add a created date
    authorId: 1,
  },
  {
    id: 5,
    title:
      "‘Emiliano Martínez speaks on this Argentina team in history, World Cup, psychologist",
    content: `
      Emiliano Martínez spoke about this Argentina team’s place in history, winning the World Cup and using a psychologist.
<br><br>
Martínez has won everything there is to win with the Argentina national team. He won the Copa America while also being named as the best goalkeeper, he won the Finalissima and won the biggest prize there is to win which is the World Cup.
<br><br>
The Argentine was also named the best goalkeeper at the World Cup to continue to cement his legacy in Argentine football. Martínez spoke to ESPN about the current Argentina team’s place in history. Here is what he had to say:
<br><br>
“I want to win one more Copa America and say: ‘this team is going to be the best in history.
<br>
What I enjoyed the most and I still enjoy it every day and when I die I will enjoy it too, is that we have one more star in the team.
<br><br>
“It is not only ‘ah, I won the Cup’ but also ‘I generated this for the next generation’. They are going to say Argentina has 3 stars and not this generation won the World Cup.
<br><br>
“We generated a standard for the next generation to win the fourth, because in the end, football in Argentina is union, it is passion”.
<br><br>
He also commented on the World Cup and speaking to his psychologist after losing to Saudi Arabia in the first match:
<br><br>
“I used my psychologist a lot those three days, after Saudi Arabia. I told him: ‘Look, I think that if I lose to Mexico, I’m going home, it’s killing me’. I would go to sleep and sometimes I would wake up and say: ‘If I lose to Mexico, I’m going home’.
<br><br>
“I was in the room alone… I set up my room for a month. I put pictures of my kids, their favorite dolls, everything. I took the PlayStation, I set it up like at home and I said ‘I can’t go to Argentina in 10 days, it must be devastating’.
<br><br>
“I have the World Cup in my studio, where I play and have my meetings.
<br><br>
“It is upstairs, and I have it with lights. Sometimes I go in at night and it’s elevated and with light blue lights, I look at it and smile.”
<br><br>
Dibu also spoke about his performance in the World Cup final:
<br><br>
“Against France I saved badly, they came at me three times and they were three goals. The one against Mbappé, I was in a bad position, I touched it and it beat me.
<br><br>
“I didn’t feel I saved well in that final. They see the final save or the penalties, but for me I didn’t save well.”
<br><br>
Argentina’s number one goalkeeper commented on his team mates:
<br><br>
“I know the virtue of Cuti (Cristian Romero) and Ota (Nicolás Otamendi). Either the ball passes or the player passes, not both. That gives me life.
<br><br>
“In the final against France, Cuti went with both feet to Mbappé, I grabbed him by the shirt at halftime and told him: ‘if you get kicked out, I’ll beat you up after the game’.
<br>
“I have to tell Cuti to please stop hitting. He plays like that. But they are impressive.”.`,
    image:
      "https://mundoalbiceleste.com/wp-content/uploads/2023/12/emiliano-martinez-world-cup-trophy-comments.jpg",
    categories: ["Football", "Emi martinez"],
    createdDate: "December-13-2023", 
    authorId: 1,
  },
  {
    id: 6,
    title: "The Best Way to Start Your Business",
    content: `
      Reinvention often comes in spurts, after a long period of silence.`,
    image:
      "https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75",
    categories: ["Travel"],
    createdDate: "2023-12-12", // Add a created date
    authorId: 2,
  },
];

export const getBlogs = () => blogs;
export const getBlogById = (id) => blogs.find((blog) => blog.id === Number(id));

export const getRecentBlogs = (limit) => blogs.slice(0, limit);

export const getOlderBlogs = (limit) => blogs.slice(-limit);

export const getAuthors = () => authors;

export default blogs;
