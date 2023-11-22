/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
//import animationStackoverflow from './animation_stackoverflow.json';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tousif K.",
  title: "Hi all, I'm Tousif",
  subTitle: emoji(
    // "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with PHP / Python / Flutter / React and some other cool libraries and frameworks.",
    //   "From Idea to Reality | Tousif Khan - Your Web & Mobile App Development Partner"
  "Transform your business ideas into reality 🚀 your trusted partner for complete web and mobile app development services. From concept to deployment, I will bring your vision to life."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1febIs-U8qsl17zBVLQAiR_B64-H1u4qq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/spaidevelopers?tab=repositories",
  linkedin: "https://www.linkedin.com/in/tousifhasanzai/",
  gmail: "tousifhasanzai@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/1830063/tousif",
  fiverr: "https://www.fiverr.com/tousifkhan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy full stack developer who wants to explore every tech stack",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend and backend for your web and mobile applications"
    ),
    emoji("⚡ Flutter web application development"),
    emoji("⚡ Advanced web scrapping using Python and selenium"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Participated in Computer Vision research project.",
      duration: "September 2021 - April 2022",
       desc: "Participated in following projects",
      descBullets: [
        "Use Computer vision in the field of Agriculture",
        "Use Computer vision in eCommerce Store Inventory Management",
      ]
    },
    {
      schoolName: "University of Karachi",
      logo: require("./assets/images/uok.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Jan 2008 - Dec 2011",
      desc: "Ranked top 1st in Alogrithms and logic designing.",
      descBullets: [
        "Student of the year",
        "Contributed to open-source projects",
        "Published research papers in reputable conferences"]
    }
  ]
};

//credibility section
const credibilityInfo = {
  display: true, // Set false to hide this section, defaults to true
  cred1:
    {
      name: "Stack Overflow",
      subHeader: "Free time hobby!",
      desc: "Not very active on stack overflow but sometimes I do help others in comments or directly",
      descBullets: [
        "Use Computer vision in the field of Agriculture",
        "Use Computer vision in eCommerce Store Inventory Management",
      ]
    },
  cred2:
    {
      name: "Fiverr",
      subHeader: "Level 2 Seller on Fiverr",
      duration: "Jan 2008 - Dec 2011",
      desc: "Ranked top 1st in Alogrithms and logic designing.",
      descBullets: [
        "Maintain 4.9 ratings since 2015",
        "Never delayed my project",
        "Completed 70+ big projects",
        "Worked on eCommerce, custom PHP, devOps and Scrapping related projects mostly",
        "Never received any warning"

      ]
    },
  cred3:
      {
        name: "Trust Pilot",
        subHeader: "Rising Star on Trust Pilot",
        desc: "Ranked top 1st in Alogrithms and logic designing.",
        descBullets: [
          "Maintain 4.9 ratings since 2015",
          "Never delayed my project",
          "Completed 70+ big projects",
          "Worked on eCommerce, custom PHP, devOps and Scrapping related projects mostly",
          "Never received any warning"

        ]
      }
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TeamEda",
      companylogo: require("./assets/images/eda-logo.png"),
      url: "https://teameda.com/",
      date: "Jan 2023 - Present",
      desc: "Pioneering integrated software license management and optimization for engineering applications, some of our clients include:",
      descBullets: [
        "Nasa",
        "Sony",
        "LG",
        "Walt Disney",
        "US Air Force",
      ]
    },
    {
      role: "Engineering Manager",
      company: "Trango Tech",
      companylogo: require("./assets/images/trangotech-logo.jpeg"),
      url: "https://trangotech.com/",
      date: "Jan 2022 - Jan 2023",
      desc: "A Digital Transformation Company that offers unmatched IT services, business, and digital solutions to strengthen, simplify and transform client’s businesses, allowing them to grow."
    },
    // {
    //   role: "Full-stack Engineer",
    //   company: "Khaity",
    //   companylogo: require("./assets/images/khaity-logo.jpeg"),
    //   url: "https://khaity.pk/",
    //   date: "Oct 2018 - May 2020",
    //   desc: "Khaity Technologies, based in Pakistan, is an AI-tech company that offers a range of services to support the agricultural industry. These services include advisory support, crop monitoring via drones, automation to aid farmers in selling their produce, and assistance with input procurement."
    // },
    {
      role: "Engineering Manager",
      company: "Eplanet Global",
      companylogo: require("./assets/images/eplanet-global-logo.jpeg"),
      url: "https://eplanetglobal.com/",
      date: "Jan 2015 - Jan 2023",
      desc: "Worked on enterprise applications, call center solutions, BPO, 2nd Largest eCommerce Applications, WMS, FMS and many more!"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/khaity-big-logo.png"),
      projectName: "Khaity",
      // projectDesc: "Khaity Technologies, based in Pakistan, is an AI-tech company that offers a range of services to support the agricultural industry. These services include advisory support, crop monitoring via drones, automation to aid farmers in selling their produce, and assistance with input procurement.",
      projectDesc: "Khaity Technologies is an AI-empowered tech company in Pakistan, helping farmers maximize their yields, sell smarter, and achieve a streamlined supply",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://khaity.pk/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cnc-logo2.jpg"),
      projectName: "Click n Collect",
      projectDesc: "An AI and geo-fencing powered app designed to boost online business by providing its platform to small and medium-scale grocery stores",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eplanetglobal.com/"
        }
      ]
    },
    {
      image: require("./assets/images/spreedly1.webp"),
      projectName: "Spreedly",
      projectDesc: "Spreedly is the world's leading Payments Orchestration Platform that lets you connect to payment services in over 100 countries with a single API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://eplanetglobal.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Tousif's Google Code-In Finalist Certificate",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1uYcERlgHRAGAvtVCOx4r3SU1Bab_7W87/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "IBM",
      subtitle:
        "Python for Data Sciences",
      image: require("./assets/images/Python_101_Data_Science.png"),
      imageAlt: "Tousif's IBM Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/5e130337-a960-4d75-835b-74c8780edc84"
        }
      ]
    },

    {
      title: "Hacker Rank",
      subtitle: "In my spare time I like to solve problems on Hacker Rank",
      image: require("./assets/images/hacker-rank1.png"),
      imageAlt: "Tousif's Hacker Rank Certifications",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/fa7728f2e6ce"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      key: "J2Pay",
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "J2Pay",
      description:
        "A fantastic library for Java developers to integrate with multiple merchants hassle-free. Authored by me, a developer, and created with love for developers."
    },
    {
      key: "MySQL-Optimization",
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "MySQL Optimization",
      description: "A fantastic library for Java developers to integrate with multiple merchants hassle-free. Authored by me, a developer, and created with love for developers.",
      heading: "22 QUICK STEPS FOR MYSQL OPTIMIZATION",
      data: `<div><p>MySQL and MariaDB are popular choices for database management systems, now a days database sizes reaches to GB, TB or even to PB. Most of the time people use to upgrade their hardware once their web application takes longer time to load although it resolve the issue for the time due to high specifications of hardware but this is not a permanent solution if your query or schema structure is not good you will again face same issue after a while</p><p>Slow response could be possible due to 3 reasons</p><ol>
        <li>Hardware configuration of the server</li>
        <li>Network setup of the server</li>
        <li>Your query (source code) or schema design </li>
        </ol><p>Here we will see try to resolve the last reason which is most common</p><p><strong>Note: I will not recommend you to perform these steps on live database, it’s better to perform all these steps on backup database once you are done then make it live</strong></p><ul>
        <li>Make sure table column has right data types</li>
        </ul><blockquote>For example<br>i. If there are a limited number of valid entries for a specific field that takes string values, you could use the "enum" type instead of "varchar"<br>ii. Use INT instead of BIGINT if your table size is not huge</blockquote><ul>
        <li>Try to use column size efficiently for example column "NAME" VARCHAR (100) is more than enough instead of VARCHAR (255)</li>
        <li>Use TIMESTAMP instead of DATETIME as TIMESTAMP consume 4 bytes, DATETIME consume 8 bytes</li>
        <li>Never ever use “SELECT * FROM table” instead of that just fetch your required columns</li>
        <li>Use less column in a busy tables (you may breakdown the large table in to small)</li>
        <li>Use indexes properly, you may slow down your insertion or updation if you used unnecessary indexing</li>
        <li>Join work perfectly on same size and type like VARCHAR (10) with VARCHAR (10) not VARCHAR (15), or INT (11) with INT (11).</li>
        </ul><blockquote>For example<br>i. SELECT * FROM t1 JOIN t2 on t1.x=t2.x (where column x from t1 and column x from t2 both should be same data type and size)</blockquote><ul>
        <li>For comparison of string both columns should use same character set like utf8 with utf8</li>
        <li>Do not mix ASC and DESC</li>
        <li>The key used to fetch row must be same as the one in order by</li>
        </ul><blockquote>For example<br>i. SELECT * FROM t1 where key2=constant order by key2 (ok)<br>ii. SELECT * FROM t2 where key1=constant order by key2 (not good)</blockquote><ul>
        <li>Don’t use ORDER BY with term instead of value</li>
        </ul><blockquote>For example<br>i. SELECT * FROM t1 order by ABS(key) (not good)</blockquote><ul>
        <li>Order and group must be same</li>
        <li>use like “string%” or “%string” if possible instead of “%string%”</li>
        <li>“SELECT * FROM table” and “select * from table” both treat as different when using caching so stick with 1st one</li>
        <li>use memory table for storing session as it is very fast</li>
        <li>If you need to calculate COUNT or SUM based on information from a lot of rows, it makes sense to create a separate table and update the counter in real time, which is much faster. Take advantage of using a summary table instead of scanning the entire log table every time.</li>
        <li>increase buffers size if required</li>
        <li>Consider avoiding using of HAVING clause it’s rather slow.</li>
        <li>Use OPTIMIZE TABLE table_name to recreate indexing and reclaim extra spacing.</li>
        <li>You should analyze your queries to ensure that they are using indexes whenever possible by using EXPLAIN keyword</li>
        </ul><blockquote>For example <br>i. EXPLAIN table_name</blockquote><ul>
        <li>To achieve high performance it is necessary to choose storage Engine according to your requirements</li>
        </ul><blockquote>Most common storage engines are MyISAM or InnoDB</blockquote><blockquote>The main difference between them is</blockquote><blockquote>MyISAM offers table-level locking, meaning that when data is being written to the table the whole table is locked, and if there are other writes that must be performed at the same time on the same table, they will have to wait until the first one has finished writing data</blockquote><blockquote>InnoDB, on the other hand, offers row-level locking, meaning that when data is being written to a row, only that particular row is locked; the rest of the table is available for writing.</blockquote><blockquote>You can create a relations in InnoDB while MyISAM has a lack of relations feature</blockquote><blockquote>InnoDB uses more system resources than MyISAM, so MyISAM is faster</blockquote><ul>
        <li>use “limit” in query while fetching data where possible (less memory will consume and we will get more space also process will be fast)</li>
        </ul><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p></div>`
    },
    {
      key: "Coding-Standards",
      url: "https://www.linkedin.com/pulse/basic-coding-standards-tousif-khan/",
      title: "Coding Standards",
      description:
        "Basic coding standards for quality product, which even some senior developers don't follow."
    },
    {
      key: "Minimize-Website-Loadtime",
      image: require("./assets/images/blog_key_2.jpeg"),
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "Minimize website load time",
      description:
      "Search engines like google and yahoo don't like slow response time of websites or Applications, slow response means losing potential customer",
      heading: "Steps to minimize website load time",
      data: `<div><p>Think slow response time&nbsp;of your website doesn’t matter?</p> 
        <p>Think again.</p> 
        <p>1 second delay in page load time yields:</p> 
        <ul> 
         <li>11% fewer page views</li> 
         <li>16% decrease in customer satisfaction</li> 
         <li>7% loss in conversions (source: <a href="http://www.aberdeen.com/Aberdeen-Library/5136/RA-performance-web-application.aspx" target="_blank" rel="nofollow noopener">Aberdeen Group</a>)</li> 
        </ul> 
        <h2>Minimize HTTP requests</h2> 
        <p>for your production site it is better to combine all your CSS files into one instead of multiple for example if you have 5 CSS files included in the header just put them all in 1 file in this way you minimize 5 http request to 1&nbsp;</p> 
        <h2>Minify/ Compress CSS and JAVASCRIPTS&nbsp;</h2> 
        <p>There are a lot of online tools available which minify css and js scripts in this way you decrease the size of file 70% to 80% and ultimately you will see the boost in your website performance here are some tools you can check out&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://cssminifier.com/" target="_blank" rel="nofollow noopener">CSS minifier</a>&nbsp;and&nbsp;<a href="https://javascript-minifier.com/" target="_blank" rel="nofollow noopener">JAVASCRIPT minify</a>&nbsp;you can find alot more just google it</p> 
        <h2>Move Javascript to Footer</h2> 
        <p>if your javascript is included in header your page will not get loaded until all javascript is properly rendered on user's browser, so best approach is to include all javascript in footer in this way your page will be loaded first and then javascript. I am sure this approach will decrease the bounce rate of your website</p> 
        <h2>Enable Browser Caching</h2> 
        <p>When you visit a website, the elements on the page you visit are stored on your hard drive in a cache so the next time you visit the site, your browser can load the page without having to send another HTTP request to the server</p> 
        <h2>Optimize Images</h2> 
        <p>most of the time we ignore to optimization&nbsp;the images but it is a big aspect of slow response time as we upload 2000-px wide image and then set the width parameter to 500-px using CSS. this slow down the page load time and create a bad user experience there are free online tools available we can use them to compress and crop images before uploading to our website</p> 
        <h2>Avoid inline CSS</h2> 
        <p>as it increase the chances of CSS duplication and makes the code ugly</p> 
        <h2>Add LazyLoad to your Images</h2> 
        <p>LazyLoad is the process of having only the images above the fold load (i.e. only the images visible in the visitor’s browser window), then, when reader scrolls down, the other images begin to load, just before they come into view. This will not only speed you page loads, it can also save bandwidth by loading less data for users who don’t scroll all the way down on your pages.</p> 
        <p>These are the most common issues due to which page load time is high, if still your page load time is high have a review of my another post for <a href="https://www.linkedin.com/pulse/22-quick-steps-mysql-optimization-tousif-khan?trk=prof-post" target="_blank">Database Query optimiztion</a>&nbsp;hope you will love that too</p> 
        <h2>Use Memcache</h2> 
        <p>memcache is one of the best strategy to avoid direct calls to the database, by using memcache our aim is to find data in ram first, if our required data is not available in ram then we query to the database and then cached the result in memcache so that it could be found in next call. you can view my detail article on memcache in this <a href="https://www.linkedin.com/pulse/why-we-should-use-memcache-tousif-khan/" target="_blank">url</a></p>
      </div>`
    },
    {
      key: "Memcache",
      url: "https://www.linkedin.com/pulse/why-we-should-use-memcache-tousif-khan/",
      title: "Memcache",
      description:
        "Relief your database and shift some load on memcache as it is faster (because data is coming from RAM instead of HDD) and your application will be available for more traffic"
    },
    {
      key: "Read_More",
      url: "https://www.linkedin.com/today/author/tousifhasanzai",
      title: "Read More!",
      description:
          "Checkout all my articles on LinkedIn, I would love to hear your feedback."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3103434345",
  email_address: "hello@tousif.me",
};

// Twitter Section

const twitterDetails = {
  userName: "spaidevelopers", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  credibilityInfo
};
