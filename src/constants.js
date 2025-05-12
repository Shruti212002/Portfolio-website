// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import upskillCampus from './assets/company_logo/upskillCampus.png';



// Education Section Logo's
import SSGMCE from './assets/education_logo/SSGMCE.png';
import MSBE from './assets/education_logo/MSBE.jpeg';


// Project Section Logo's
import UrlShortner from './assets/work_logo/UrlShortner.png';
import Portfolio from './assets/work_logo/Portfolio.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
      
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      
      { name: 'MySQL', logo: mysqlLogo },
      
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
     
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: upskillCampus,
      role: "Python Intern",
      company: "upskillCampus",
      date: "may 2023 - july 2023",
      desc: "Developed website using Django and frontend framework",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        
      ],
    },
    
    
  ]
  
  export const education = [
    {
      id: 0,
      img: SSGMCE,
      school: "Shri sant gajanan Maharaj college Of Engineering shegaon",
      date: "nov 2020 - July 2024",
      grade: "7.9 CGPA",
      desc: "I have completed my Bachelor Of engineering in Electronics and Telecommunications. .",
      degree: "Bachelor Of Engineering",
    },
    {
      id: 1,
      img: MSBE,
      school: "S.F.L high school ",
      date: " 2019 - 2020",
      grade: "79%",
      desc: "I completed My 12th at SFL high In PCM .",
      degree: "12th",
    },
    {
      id: 2,
      img: MSBE,
      school: "Hirabai Goenka Kanya Vidalay ,Dhamangaon Rly ",
      date: "Apr 2017 - March 2018",
      grade: "89%",
      desc: "I completed my class 10 education from HGKV School, Dhamangaon Rly, under the Maharashtra board.",
      degree: "10th",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Url Shortner",
      description:
        "Designed and developed a URL shortener application that transforms long URLs into concise, manageable links.",
      image: UrlShortner,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Shruti212002/urlshortner1",
      
    },
    {
      id: 1,
      title: "Medibot AI diagnosis Chatbot",
      description:
        "•	Built a full-stack web app simulating a virtual clinic with an AI-driven diagnosis Chatbot for both physical and mental health issues (69% accuracy)",
      
      tags: ["React JS",    "HTML", "CSS", "JavaScript","Tailwind CSS"," Django", "SQL","python libraries","Numpy","Pandas"],
      github: "https://github.com/codingmastr/CSPrep",
      
    },
    {
      id: 2,
      title: "Portfolio website",
      description:
        "portfolio website about projects ,Interns and education.",
      image: Portfolio,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      
      
    },
  
    
    
      
  ];  