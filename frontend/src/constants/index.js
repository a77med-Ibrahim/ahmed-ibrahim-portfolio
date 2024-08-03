import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  unity,
  ML,
  earTech,
  marmaracenter,
  gcm,
  mySql,
  pBI,
  azure,
  androidstudio,
  access,
  expensesmanager,
  algolingo,
  calculator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: unity,
  },
  {
    title: "ML Developer",
    icon: ML,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MySql",
    icon: mySql,
  },
  {
    name: "PowerBI",
    icon: pBI,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Intern",
    company_name: "EarTech",
    icon: earTech,
    iconBg: "#383E56",
    date: "Feb 2024 - Apr 2024",
    points: [
      "Learned about different types of project management approaches.",
      "Worked on Linux OS, which gave me an understanding of linux and how to use it.",
      "Project Management using Microsoft Azure.",
    ],
  },
  {
    title: "Reactjs Intern",
    company_name: "Marmara Center",
    icon: marmaracenter,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - March 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designed and implemented user interface components using ReactJs, CSS to enhance the user experience.",
    ],
  },
  {
    title: "Marketing Intern",
    company_name: "Global Commerce Media",
    icon: gcm,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Worked with a remote team on marketing for the company.",
      "Created WordPress Websites.",
      "Selecting targeted individuals interested in a specific topic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Algolingo",
    description:
      "A web application that aims to enhance students' understanding of Data Structures and Algorithms in a visual and interactive way.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: algolingo,
    source_code_link:
      "https://github.com/ahmedIbrahim84201/AlgoLingo_Senior_Project",
  },
  {
    name: "Expenses Manager",
    description:
      "Web application platform that allows users to keep track of their expenses visually.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: expensesmanager,
    source_code_link: "https://github.com/ahmedIbrahim84201/expenses-manager",
  },

  {
    name: "Calculator",
    description: "A simple Calculator that performs simple operations.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/ahmedIbrahim84201/Calculator",
  },
];

export { services, technologies, experiences, testimonials, projects };
