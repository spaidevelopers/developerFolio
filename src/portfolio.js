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
      key: "Minimize-Website-Loadtime",
      image: require("./assets/images/website-speed.jpg"),
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "Some Cool features of Laravel 8",
      description:
          "Laravel 8 introduces enhanced maintenance mode, a flexible rate limiter, and Laravel Octane for improved performance with Swoole server. It also features job batching, Laravel Jetstream for project scaffolding, migration squashing, and improved route caching.",
      heading: "Steps to minimize website load time",
      data: `
        <p>Think slow response time of your website doesn’t matter? Think again.</p>
        <p>A 1-second delay in page load time yields:</p>
        <ul>
            <li>11% fewer page views</li>
            <li>16% decrease in customer satisfaction</li>
            <li>7% loss in conversions (source: Aberdeen Group)</li>
        </ul>

        <h2>Minimize HTTP Requests</h2>
        <p>For your production site, it is better to combine all your CSS files into one. This minimizes multiple HTTP requests into a single one, thereby reducing load time.</p>

        <h2>Minify/Compress CSS and JavaScripts</h2>
        <p>Use online tools to minify and compress CSS and JavaScript scripts. This can decrease the size of files by 70% to 80%, boosting your website's performance.</p>

        <h2>Move JavaScript to the Footer</h2>
        <p>Moving JavaScript to the footer ensures that your page loads first, followed by the script rendering, potentially decreasing your website's bounce rate.</p>

        <h2>Enable Browser Caching</h2>
        <p>Browser caching stores elements of a webpage on the user's hard drive, reducing the need for repeated HTTP requests and speeding up page loads on subsequent visits.</p>

        <h2>Optimize Images</h2>
        <p>Optimizing images is crucial. Compress and crop images before uploading to reduce load times and enhance user experience.</p>

        <h2>Avoid Inline CSS</h2>
        <p>Avoiding inline CSS can reduce the chances of code duplication and make your codebase cleaner.</p>

        <h2>Add LazyLoad to Your Images</h2>
        <p>LazyLoad allows images to load only as they come into the viewer's browser window, speeding up initial page loads and saving bandwidth.</p>

        <p>These common issues can significantly impact page load time. For further optimization, consider reading my post on Database Query Optimization.</p>

        <h2>Use Memcache</h2>
        <p>Memcache is an effective strategy to avoid direct database calls, aiming to retrieve data from RAM first, reducing load times significantly.</p>`
    },
    {
      key: "J2Pay",
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "J2Pay",
      description:
        "A fantastic library for Java developers to integrate with multiple merchants hassle-free. Authored by me, a developer, and created with love for developers.",
    data: `<h1>J2Pay: Simplifying Multi-Gateway Payment Processing in Java</h1>
        <p>J2Pay is an open source multi-gateway payment processing library for Java. It provides a simple and generic API for many gateways, reducing the effort required by developers to write individual code for each gateway or merchant. The flexibility to write code once for all gateways is a key feature, along with the exclusion of efforts in reading documentation for each individual gateway. Currently, J2Pay supports 9 merchants, but it allows easy addition of more.</p>

        <h2>Why Use J2Pay?</h2>
        <ul>
            <li>Multi-gateway support in your application.</li>
            <li>Avoid the time-consuming process of learning individual payment gateways' documentation, which can often be poorly documented.</li>
            <li>Support multiple payment gateways without worrying about the implementation of each.</li>
            <li>Use a single API for all gateways.</li>
            <li>No need to write separate logic for each gateway.</li>
            <li>Generic Request/Response handling.</li>
        </ul>
        
        <p>One of the main problems developers face when working with multiple gateways are the varying API parameter names. For example:</p>
        <ul>
            <li>Some gateways might refer to the first name as 'fname', 'first_name', etc.</li>
            <li>Card number might be referred to as 'CardNumber', 'Card_Number', or 'card'.</li>
        </ul>
        <p>J2Pay eliminates these inconsistencies and provides classes for customer details and customer cards that remain the same across all gateways.</p>

        <p>Similarly, parsing gateway responses can be problematic. Different gateways might return a transaction ID as:</p>
        <ul>
            <li>'transaction_id'</li>
            <li>'transId'</li>
            <li>'trans_tag', and so on.</li>
        </ul>
        <p>However, with J2Pay, you will consistently receive 'transactionId'.</p>

        <p>For more information, you can view the <a href="https://github.com/tranxactive/J2PAY">official J2Pay documentation and contributors' guide on GitHub</a>.</p>`
    },
    {
      key: "MySQL-Optimization",
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "MySQL Optimization",
      description: "A fantastic library for Java developers to integrate with multiple merchants hassle-free. Authored by me, a developer, and created with love for developers.",
      heading: "22 QUICK STEPS FOR MYSQL OPTIMIZATION",
      data: `<h1>Optimizing MySQL and MariaDB for Large Databases: Best Practices</h1>
        <p>In the world of database management, MySQL and MariaDB stand out as popular choices. However, as databases grow into sizes of gigabytes, terabytes, or even petabytes, simply upgrading hardware to improve performance becomes a short-term fix. A more sustainable solution lies in optimizing your queries and schema design.</p>

        <h2>Slow Response Could Be Due To:</h2>
        <ul>
            <li>Hardware configuration of the server.</li>
            <li>Network setup of the server.</li>
            <li>Your query (source code) or schema design.</li>
        </ul>

        <p>Here we will focus on the last reason, which is the most common cause of performance issues.</p>

        <p><strong>Note:</strong> It is recommended to perform these optimizations on a backup database before applying them to a live environment.</p>

        <h2>1. Right Data Types for Table Columns:</h2>
        <ul>
            <li>Use <code>enum</code> instead of <code>varchar</code> for fields with limited valid string entries.</li>
            <li>Opt for <code>INT</code> over <code>BIGINT</code> if your table size is not huge.</li>
            <li>Limit <code>VARCHAR</code> sizes appropriately, e.g., <code>VARCHAR(100)</code> instead of <code>VARCHAR(255)</code>.</li>
            <li>Prefer <code>TIMESTAMP</code> over <code>DATETIME</code> as it consumes less space.</li>
        </ul>

        <h2>2. Efficient Data Retrieval:</h2>
        <p>Avoid using <code>SELECT * FROM table</code>. Fetch only the necessary columns. Minimize the number of columns in busy tables, possibly by breaking down a large table into smaller ones.</p>

        <h2>3. Proper Use of Indexes:</h2>
        <p>Apply indexes judiciously to avoid slowing down insertions or updates. Ensure that joins involve columns of the same size and type.</p>
        <code>SELECT * FROM t1 JOIN t2 ON t1.x = t2.x</code>

        <h2>4. Query Design Best Practices:</h2>
        <p>Avoid mixing <code>ASC</code> and <code>DESC</code> in queries. Match the key used in the <code>WHERE</code> clause with the one in the <code>ORDER BY</code> clause.</p>
        <code>SELECT * FROM t1 WHERE key2 = constant ORDER BY key2</code>

        <h2>5. Additional Performance Tips:</h2>
        <ul>
            <li>Use <code>LIKE 'string%'</code> or <code>'%string'</code> instead of <code>'%string%'</code> for better performance.</li>
            <li>Consistently format queries to utilize caching effectively.</li>
            <li>Utilize memory tables for fast session storage.</li>
            <li>Create summary tables for frequent <code>COUNT</code> or <code>SUM</code> operations.</li>
            <li>Increase buffer sizes if required.</li>
            <li>Avoid using the <code>HAVING</code> clause, as it can be slow.</li>
            <li>Use <code>OPTIMIZE TABLE table_name</code> to reorganize indexes and reclaim space.</li>
            <li>Analyze queries with the <code>EXPLAIN</code> keyword to ensure efficient index usage.</li>
        </ul>

        <h2>6. Choosing the Right Storage Engine:</h2>
        <p>MyISAM and InnoDB are the most common storage engines. MyISAM offers table-level locking and is generally faster, but lacks relation features. InnoDB provides row-level locking and supports relations but uses more resources.</p>

        <h2>7. Effective Query Limitation:</h2>
        <p>Use <code>LIMIT</code> in queries to reduce memory usage and increase speed.</p>

        <h2>Conclusion:</h2>
        <p>Optimizing MySQL or MariaDB databases goes beyond hardware upgrades and network configurations. Effective query and schema design are crucial for sustaining high performance in large databases. By applying these best practices, you can ensure your database operates efficiently, even as it scales.</p>`
    },
    {
      key: "Coding-Standards",
      url: "https://www.linkedin.com/pulse/basic-coding-standards-tousif-khan/",
      title: "Coding Standards",
      description:
        "Basic coding standards for quality product, which even some senior developers don't follow.",
      data: `<h1>Understanding Code Conventions: PSR-1 Standards</h1>
        <p>Code conventions are important to programmers for a number of reasons:</p>
        <ul>
            <li>40%–80% of the lifetime cost of a piece of software goes to maintenance.</li>
            <li>Hardly any software is maintained for its whole life by the original author.</li>
            <li>Code conventions improve the readability of the software, allowing engineers to understand new code more quickly and thoroughly.</li>
            <li>If you ship your source code as a product, you need to make sure it is as well packaged and clean as any other product you create.</li>
        </ul>
        <p>Sadly, a very large number of developers don't follow coding standards. When going through a file built by multiple developers, irregular naming, spacing, and parenthesis usage are often evident, making it difficult to work on.</p>

        <h2>Extended Guidelines from PSR-1 Coding Standards:</h2>
        <ul>
            <li>Files must use only <code>&lt;?php</code> tags.</li>
            <li>Class names MUST be declared in StudlyCaps.</li>
            <li>Class constants MUST be declared in all upper case with underscore separators.</li>
            <li>Opening braces for classes and methods MUST go on the next line, and closing braces MUST go on the next line after the body.</li>
            <li>Method names MUST be declared in camelCase.</li>
            <li>Code MUST use 4 spaces for indenting, not tabs.</li>
            <li>There MUST be one blank line after the namespace declaration, and there MUST be one blank line after the block of use declarations.</li>
            <li>Lines SHOULD NOT be longer than 80 characters; lines longer than that SHOULD be split into multiple subsequent lines.</li>
            <li>There MUST NOT be trailing whitespace at the end of non-blank lines.</li>
            <li>Blank lines MAY be added to improve readability and to indicate related blocks of code.</li>
            <li>There MUST NOT be more than one statement per line.</li>
            <li>The PHP constants <code>true</code>, <code>false</code>, <code>null</code> MUST be in lower case.</li>
            <li>In method arguments, there MUST NOT be a space before each comma, and there MUST be one space after each comma.</li>
        </ul>

        <h3>Example:</h3>
        <code>
            &lt;?php<br>
            namespace Vendor\\Package;<br><br>
            use FooInterface;<br>
            use BarClass as Bar;<br>
            use OtherVendor\\OtherPackage\\BazClass;<br><br>
            class Foo extends Bar implements FooInterface<br>
            {<br>
                public function sampleFunction($a, $b = null)<br>
                {<br>
                    if ($a === $b) {<br>
                        bar();<br>
                    } elseif ($a &gt; $b) {<br>
                        $foo-&gt;bar($arg1);<br>
                    } else {<br>
                        BazClass::bar($arg2, $arg3);<br>
                    }<br>
                }<br>
            }
        </code>

        <p>For further details on PSR-1 standards, visit the following URLs:</p>
        <ul>
            <li><a href="http://www.php-fig.org/psr/psr-2/">PSR-2 Coding Style Guide</a></li>
            <li><a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md">PSR-1 Basic Coding Standard</a></li>
        </ul>`
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
        "Relief your database and shift some load on memcache as it is faster (because data is coming from RAM instead of HDD) and your application will be available for more traffic",
      data: `<h1>Maximizing Application Performance with Memcache</h1>
        <p>An application having many products and options with large number of traffic may need to cache the most-used data. This is essential for delivering the data efficiently while using minimal resources. Typically, web applications request data from the database for each user request, which can slow down the site as visitor numbers increase. Memcache can speed up website performance by up to 95% in some cases.</p>

        <h2>What is Memcache?</h2>
        <p>Memcache is an in-memory, distributed cache. The primary commands of Memcache are SET(key, value) and GET(key) operations. It can be distributed across multiple servers, maintaining constant-time operations.</p>

        <h2>Performance</h2>
        <p>Memcache significantly reduces page load time, providing users with a faster and better experience. Without Memcache, each page load requires numerous database queries, which can be time-consuming. Memcache queries are much faster, returning in milliseconds.</p>

        <h2>Scalability</h2>
        <p>By using Memcache, applications avoid frequent database and disk access, which is crucial for scaling out databases. Without Memcache, apps might hit their database limits too often, creating performance bottlenecks.</p>

        <h2>How Memcache Works</h2>
        <ul>
            <li>Memcache first checks if a result hash from a select query is cached. If not, the query executes against the database and the result is then stored in Memcache for future requests.</li>
            <li>Subsequent identical queries find the result hash in Memcache, delivering it directly from RAM without querying the database again.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Memcache is ideal for enhancing page load speeds and application scalability. Integrating Memcache from the early stages of development can simplify the process and prepare the application for future scaling needs.</p>
    </div>`
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
