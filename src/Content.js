// import images
import profile_person from "../public/assets/images/Profile/dipu.png";


// import angular from "./assets/images/Skills/angular.png";
// import angular from "../public/assets/images/Skills/angular.png";
const angular = "./assets/images/Skills/angular.png"; 


// import express from "./assets/images/Skills/express-js.png";
// import express from "../public/assets/images/Skills/express-js.png";
const express = "assets/images/Skills/express-js.png"

// import mongo from "../public/assets/images/Skills/mongodb.png";
const mongo = "assets/images/Skills/mongodb.png";

// import reactjs from "../public/assets/images/Skills/react.png";
const reactjs = "assets/images/Skills/react.png";

// import nodejs from "../public/assets/images/Skills/node.png";
const nodejs = "assets/images/Skills/nodejs.png";

// import version from "../public/assets/images/Skills/version.jpg";
const version = "assets/images/Skills/version.jpg";


// import frontend_logo from "../public/assets/images/Services/frontend.png";
const frontend_logo = "assets/images/Services/frontend.png";

// import backend_logo from "../public/assets/images/Services/backend.png";
const backend_logo = "assets/images/Services/backend.png";

// import database_logo from "../public/assets/images/Services/database.png";
const database_logo = "assets/images/Services/database.png";

// import api_logo from "../public/assets/images/Services/api.png";
const api_logo = "assets/images/Services/api.png";

// import performance_logo from "../public/assets/images/Services/performance.png";
const performance_logo = "assets/images/Services/efficiency.png";


// import benetro from "../public/assets/images/Projects/benetro.png";
const benetro = "assets/images/Projects/benetro.png";

// import employee from "../public/assets/images/Projects/employee.png";
const employee = "assets/images/Projects/employee.png";

// import valentine from "../public/assets/images/Projects/valentines.jpg";
const valentine = "assets/images/Projects/valentines.jpg";

// import person_project from "../public/assets/images/Projects/Dipendra.jpg";
const person_project = "assets/images/Projects/Dipendra.jpg";

// import technical from "../public/assets/images/Projects/Technical.png"
const technical = "assets/images/Projects/Technical.png";


// import benekiva from "../public/assets/images/Experiences/benekiva.png";
const benekiva = "assets/images/Experiences/benekiva.png";

// import searchable from "../public/assets/images/Experiences/searchable.jpg";
const searchable = "assets/images/Experiences/searchable.jpg";


import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "/home",
      icon: TbSmartHome,
    },
    {
      link: "/skills",
      icon: BiUser,
    },
    {
      link: "/services",
      icon: RiServiceLine,
    },
    {
      link: "/projects",
      icon: RiProjectorLine,
    },
    {
      link: "/contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  profile: {
    aboutMe:"Hi, I'm Dipendra, a passionate Full-Stack Web Developer with over a year of hands-on experience in building scalable, efficient, and user-friendly web applications. I specialize in the MEAN stack (MongoDB, Express.js, Angular, and Node.js) and have a strong background in frontend and backend development.",
    title: "Full Stack Web Developer",
    firstName: "Dipendra Kumar",
    // "middleName": "Kumar",
    LastName: "Kushiyat",
    btnText: "Download CV",
    image: profile_person,
    profile_content: [
      {
        count: "2+",
        text: "Years of Experience in Web development",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Angular",
        para: "Lorem ipsum text  dummy",
        logo: angular,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "MongoDB",
        para: "Lorem ipsum text  dummy",
        logo: mongo,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Express",
        para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
        name: "Git & version Control",
        para: "Lorem ipsum text  dummy",
        logo: version,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "📌 Creating dynamic and user-friendly interfaces with Angular.\n🔹 Single Page Applications (SPAs)\n🔹 Responsive and mobile-friendly UI\n🔹 State management with RxJS",
        logo: frontend_logo,
      },
      
      {
        title: "Backend Development",
        para: "📌 Developing secure and high-performance server-side applications. \n🔹REST API Development. \n🔹Authentication & Authorization (JWT, OAuth). \n🔹 Database Integration (MongoDB)",
        logo: backend_logo,
      },
      {
        title: "Database Design & Management",
        para: "📌 Designing optimized and scalable databases for web applications.\n🔹MongoDB Schema Design \n🔹Data migration and backup solutions",
        logo: database_logo,
      },
      {
        title: "API Development & Integration",
        para: "📌 Developing and integrating third-party APIs for enhanced functionality.\n🔹 Payment gateway integration. \n🔹third-party API consumption",
        logo: api_logo,
      },
      {
        title: "Performance Optimization & Security",
        para: "📌 Ensuring fast and secure web applications. \n🔹Code optimization and caching strategies \n🔹Web security best practices \n🔹Performance tuning and load balancing",
        logo: performance_logo,
      }
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    // image: person,
    project_content: [
      {
        title: "BENETRO",
        image: benetro,
        frontendLink: "https://gitlab.com/Dipendrakushiyat/benetro-frontend/-/tree/Prod?ref_type=heads",
        backendLink: "https://gitlab.com/sarojbc040/benetro-backend/-/tree/Prod?ref_type=heads"
      },
      {
        title: "Employee Management System", 
        image: employee,
        frontendLink: "https://gitlab.com/Dipendrakushiyat/mean-project-sd",
        backendLink: "https://gitlab.com/Dipendrakushiyat/nodejs-project"

      },
      {
        title: "Valentine's Website",
        image: valentine,
        frontendLink: "https://github.com/Dipendrakushiyat/Valentine-day-website"
      },
      {
        title: "Personal portfolio",
        image: person_project,
        frontendLink: "https://github.com/Dipendrakushiyat/Valentine-day-website"
      },
      {
        title: "Technical documentation page",
        link:"https://codepen.io/dipendra-kushayet/pen/yLzKoPX",
        image: technical,

      },
    ],
  },
  experience: {
    title: "EXPERIENCE",
    experience_content: [
      {
        company:
          "Benekiva",
          position: "Full Stack Web Developer",
          year:"2023 - present",
        img: benekiva,
        name: "Worked as a Full Stack Developer at Benekiva, contributing to web applications using the MEAN stack (MongoDB, Express.js, Angular, Node.js). Developed and optimized API services, implemented dynamic UI components, and improved system functionality for claims and beneficiary management. Collaborated with cross-functional teams to enhance portal features and streamline workflows.",
      },
      {
        company:
          "Searchable Design",
          position: "Web Development Internship & Web Dev",
          year:"2023 - present",
        img: searchable,
        name: "Completed an internship at Searchable Design, where I worked on developing and optimizing web applications using the MEAN stack. Collaborated with a team to create Benetro, a well-structured project designed for real-time collaboration and retrospectives. Gained hands-on experience in building dynamic UI components, implementing APIs, and enhancing search functionality to improve user experience.",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    para: "Passionate Full Stack Developer with expertise in the MEAN stack. Skilled in building dynamic web applications, optimizing APIs, and creating seamless user experiences. Open to exciting opportunities—let's build something great together! 🚀",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "kushayet17@gmail.com",
        icon: GrMail,
        link: "mailto:kushayet17@gmail.com",
      },
      {
        text: "+977 9819686693",
        icon: MdCall,
        link: "https://wa.me/9819686693",
      },
      {
        text: "Dipendra Kushiyat",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/dipendra-kushiyat/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
