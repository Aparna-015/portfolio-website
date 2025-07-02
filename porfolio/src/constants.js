// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";

// Experience Section Logo's
import heztaverseLogo from "./assets/company_logo/hezta_logo.png";
import captivo from "./assets/company_logo/captivo.png";
import logo from "./assets/company_logo/NIT-logo.png";
import regional from "./assets/company_logo/regional.jpg";


import cas from "./assets/education_logo/cas.png";
import schoollogo from "./assets/education_logo/SCHOOL.jpg";
import mjschoollogo from "./assets/education_logo/MJSCHOOL.jpg";


// Project Section Logo's
import githubdetLogo from "./assets/work_logo/videostream.jpg";
import islanddays from "./assets/work_logo/islanddays.jpg";
import aiapp from "./assets/work_logo/AIAPP.jpg";


export const SkillsInfo = [
  {
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];




export const experiences = [
  {
    id: 0,
    img: heztaverseLogo,
    role: "Frontend Developer",
    company: "Heztaverse private Ltd",
    date: "November 2024 - Present",
    desc: "Developed dynamic and scalable web applications using React.js. Collaborated with cross-functional teams to build responsive UIs, integrate RESTful APIs, and optimize overall application performance. Translated Figma designs into fully functional, pixel-perfect interfaces that align with user experience best practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Figma",
      "Git"
    ],
  },
  {
    id: 1,
    img: captivo,
    role: "Content writer",
    company: "Captivo, Calicut",
    date: "Sept 2023 - April 2024",
    desc:"Researched, wrote, and edited high-quality content across diverse topics, ensuring accuracy, SEO optimization, and alignment with brand voice and audience needs. Interpreted content briefs to transform ideas into engaging, informative writing, while managing deadlines efficiently and maintaining high standards of quality",

    skills: ["Content writing","word"
     
    ],
  },
  {
    id: 2,
    img: logo,
    role: "Administrative Assistant",
    company: "NIT Calicut",
    date: "April 2022 - March 2023",
    desc: "Offered exceptional administrative support to office staff, contributing to the smooth and efficient execution of daily operations. Provided clerical assistance across departments, ensuring timely and accurate completion of administrative tasks.",
    skills: ["Microsoft Office Suite (Word, Excel, PowerPoint)", "Google Workspace"," email clients"],
  },

   {
    id: 3,
    img:regional,
    role: "Software Associate",
    company: "Regional Technologies, Calicut",
    date: "Dec 2019 - May 2020",
    desc: "Learned software engineering best practices and process improvements while assisting in the design and development of projects, contributing to efficient and maintainable codebases",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
   "Python",
      "Git"
    ],
  },
];







export const education = [
  {
    id: 0,
    img: cas,
    school: "College Of Applied Science, Calicut",
    date: "Sept 2016 - April 2019",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from College of Applied Science, calicut. During the time  , I gained a strong foundation in programming, software development, and computer science principles.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: cas,
    school: "College Of Applied Science, Thamarassery",
    date: "june 2013 - April 2016",
    degree: "Bachelor of Science - BSC (Computer Science)",
  },
  {
    id: 2,
    img:schoollogo ,
    school: "GVHSS Neeleswaram, Mukkam, (Kozhikode), Kerala",
    date: "june 2011 - March 2013",
    degree: "PLUS TWO",
  },
  {
    id: 3,
    img: mjschoollogo,
    school: "MJHSS Elettil,kozhikode",
    date: " March 2011",
   degree: "SSLC",
  },
];








export const projects = [
  {
    id: 0,
    title: "Video Streaming Application",
    description:
      "A powerful, responsive video streaming application built with React.js and Redux, featuring dynamic video listings, seamless playback functionality, and real-time content updates",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Redux Toolkit"],
    github:
      "https://github.com/Aparna-015/VIDEO-STREAM",
    webapp: "https://videos-streaming.netlify.app/",
  },
  {
    id: 1,
    title: "Island days",
    description:
      " A responsive travel planning web application designed to help users plan their trips to the Lakshadweep Islands with ease and clarity. The platform features API integration, user engagement elements, destination listings, filtering options, detailed destination pages with booking capabilities, and seamless navigation for a smooth user experience.",
    image: islanddays,
    tags: [
      "React JS",
      "Redux Toolkit",
      "TailwindCSS",
      "Axios"
      
    ],
    github: "https://github.com/Aparna-015/project",
    webapp: "https://islanddays.in/",
  },
  {
    id: 2,
    title: "Nex AI-Bot App",
    description:
      " An AI-powered chatbot application developed using React.js and Tailwind CSS, designed to simulate intelligent conversations and provide instant responses. The app features a sleek UI, real-time message handling, and smooth animations to enhance user interaction.",
    image:  aiapp,
    tags: ["React JS","Context API" ,"HTML", "CSS", "JavaScript"],
    github: "https://github.com/Aparna-015/MY-AI-BOT-APP",
    webapp: "https://ai-app-ss.netlify.app/",
  },
  ];
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },

