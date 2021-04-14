/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Neelesh Shekhar",
  title: "Hi all, I'm Neelesh",
  subTitle: emoji(
    "A passionate Web Developer and UI/UX enthusiast 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks. "
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/13yVTJEKQgRexwHltQqlm0sYEHyTpGYn_?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NeeleshShekhar",
  linkedin: "https://www.linkedin.com/in/neelesh-shekhar-59a038143/",
  gmail: "nilesh.shekhar1@gmail.com",
  spotify: "https://open.spotify.com/user/q0lpi2dqvn9rwgebueb6463pq?si=8EAyNkJMTEmX9IqHHGTz7Q",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/neeleshshekhar_/",
  twitter: "https://twitter.com/NeeleshShekhar1",
  // Instagram and Twitter are also supported in the links!
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
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kalinga Institute of Industrial Technology",
      logo: require("./assets/images/harvardLogo.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2018 - April 2022",
      desc: "Current CGPA: 9.09.",
      descBullets: [
        "Secratary of college ACM Chapter",
        "2nd prize in IIIT Bhubaneshwar Fest"
      ]
    },
    {
      schoolName: "Delhi Public School Ranchi",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Class 12th",
      duration: "May 2016 - May 2018",
      desc:
        "Fecilitated by the school principal and Cheif Cecratary of Jharkhand as Academic Achiever ",
      descBullets: [
        "Participated in debates",
        "Took part in Musical Competitions",
    ]
    },
    {
      schoolName: "Prayag Sangit Samiti",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Diploma, Indian Classical Music",
      duration: "",
      desc:
        "Prayag Sangeet Samiti is an institute imparting education in Hindustani Classical music, in Allahabad, India.",
      descBullets: [
        "Secured Distiction in Diploma"
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Secratary",
      company: "ACM, Association for Computer Machinery",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "December 2019 – Present",
      desc:
        "Previosuly Served as the Web Lead with managing over 10+ Web Developers and innumerous projects. ",
      descBullets: [
        "Developed a discussion forum based on React.js for the ACM Team to interact",
        "Organised various college level events and also conducted various UI/UX workshops"
      ]
    },
    {
      role: "Front-End Developer",
      company: "JAP-IT, Jharkhand",
      companylogo: require("./assets/images/quora.jpg"),
      date: "June 2019 – July 2019",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "UI/UX Freelance",
      company: "UI/UX",
      companylogo: require("./assets/images/free.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Marketing Intern",
      company: "Gilehrio",
      companylogo: require("./assets/images/gilehrio.png"),
      date: "February 2015 – Present",
      desc:
        "Developed various Marketing and sales strategy to increase the sales for the company.",
      descBullets: [
          "Developed a Full-fledged Sales Plan for the company",
          "Used Branding Techniques and digital marketing techniques to increase brand awareness"
        ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "All my learning as projects",
  projects: [
    {
      image: require("./assets/images/blockchain.jpg"),
      projectName: "Cold Chain Vaccine distribution System using Blockchain",
      projectDesc: "Implemented the concept of blockchain using ethereum-solidity to for safe and secure vaccine distribution which could be easily monitored using the featured provided on the application Technology used: Html, CSS, Javascript, Ethereum Solidity, Bootstrap,MySql",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/NeeleshShekhar/Supply-Chain-Management-BlockChain-UseCase"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/vle.jpg"),
      projectName: "VLE details",
      projectDesc: "Web application using the .NET framework. Used c# for backend and sql server as database Technology Used: .NET Framework, C#, MySql, Bootstrap4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/NeeleshShekhar/Village-Level-Entrepreneur-Registraion-Portal"
        }
      ]
    },
    {
      image: require("./assets/images/company.png"),
      projectName: "Company Bill Management system using React",
      projectDesc: "A one stop platform to process and manage bills for a large audience with features like infinite scroll Technology Used: React.js, CSS, Material UI, Javascript, Python",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/resturaunt.png"),
      projectName: "Resturaunt Web App",
      projectDesc: "A Full stack web appluation for a resturaunt using React js for frontend and Node js as backend with moongoDb as database",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/uius.png"),
      projectName: "Kitaabvala",
      projectDesc: "UI/UX project for designing an app to sell and buy books online using all the UI/UX principles",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
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
      title: "Runner up in IIIT Bhubaneshwar Fest",
      subtitle:
        "Among all 70 colleges our band stood second in the annual fest organised by IIIT Bhubaneshwar",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
      ]
    },
    {
      title: "Academic Achiever ",
      subtitle:
        "Fecilitated by the school principal and the Cheif secratary of Jharkhand for academic excellence",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Frontend Development using react",
      subtitle: "Completed Certifcation Frontend react on coursera",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
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

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
  subtitle:
    "Discuss a project or just want to catch up for a cup of coffee ? My Inbox is open for all.",
  number: "+91-9818869681",
  email_address: "nilesh.shekhar1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
