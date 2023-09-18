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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with PHP / Python / Flutter / React and some other cool libraries and frameworks."
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
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Flutter web application development"),
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
      imageAlt: "Google Code-In Logo",
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
      imageAlt: "Google Assistant Action Logo",
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
      imageAlt: "PWA Logo",
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@tousifhasanzai/j2pay-f9c9c379b125",
      title: "J2Pay",
      description:
        "A fantastic library for Java developers to integrate with multiple merchants hassle-free. Authored by me, a developer, and created with love for developers."
    },
    {
      url: "https://www.linkedin.com/pulse/22-quick-steps-mysql-optimization-tousif-khan/",
      title: "MySQL Optimization",
      description:
        "I have discussed here most common reasons for MySQL performance issues and how to fix them."
    },
    {
      url: "https://www.linkedin.com/pulse/basic-coding-standards-tousif-khan/",
      title: "Coding Standards",
      description:
        "Basic coding standards for quality product, which even some senior developers don't follow."
    },
    {
      url: "https://www.linkedin.com/pulse/steps-minimize-website-load-time-tousif-khan/",
      title: "Steps to minimize website load time",
      description:
        "Search engines like google and yahoo don't like slow response time of websites or Applications, slow response means losing potential customer"
    },
    {
      url: "https://www.linkedin.com/pulse/why-we-should-use-memcache-tousif-khan/",
      title: "Memcache",
      description:
        "Relief your database and shift some load on memcache as it is faster (because data is coming from RAM instead of HDD) and your application will be available for more traffic"
    },
    {
      url: "https://www.linkedin.com/in/tousifhasanzai/recent-activity/articles/",
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
  title: emoji("Stack Overflow"),
  subtitle: "I LOVE TO SHARE PROGRAMMING KNOWLEDGE IN MY SPARE TIME, CHECKOUT MY RATINGS! 😅",
  //image: animationStackoverflow,
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3103434345",
  email_address: "tousifhasanzai@gmail.com",
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
  isHireable
};
