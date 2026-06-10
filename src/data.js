import orbitScreen from "../src/assets/orbitScreen.png";
import aeroScreen from "../src/assets/aeroScreen.png";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const menuData = [
  {
    id: 1,
    name: "Home",
    icon: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Projects",
    icon: "FolderBookmark",
    path: "/projects",
  },
  {
    id: 3,
    name: "Skills",
    icon: "Code",
    path: "skills",
  },
  {
    id: 4,
    name: "Experience",
    icon: "BriefcaseBusiness",
    path: "/experience",
  },
  {
    id: 5,
    name: "About",
    icon: "User",
    path: "/about",
  },
  {
    id: 6,
    name: "Contact",
    icon: "Send",
    path: "/contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    url: "https://github.com/Abhishekwmg",
  },
  {
    id: 2,
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/abhk",
  },
  {
    id: 3,
    icon: FaXTwitter,
    url: "https://x.com/ak89471",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Interactive Weather Map",
    slug: "openaero-weather-map",
    description:
      "Interactive weather mapping application combining real-time weather data with dynamic visual.",

    techStack: ["SiReact", "SiTypescript", "SiLeaflet", "SiTailwindcss"],

    highlights: [
      "Feature-based scalable architecture",
      "Runtime API validation with Zod",
      "Interactive maps with React Leaflet",
      "Async caching & background refetching",
    ],

    liveUrl: "https://openaero.netlify.app/",
    githubUrl: "https://github.com/Abhishekwmg/rcWeatherMap",

    featured: true,

    category: "Frontend",

    image: aeroScreen,
  },

  {
    id: 2,
    title: "Orbit Shop",
    slug: "react-commerce-demo",
    description:
      "Frontend e-commerce demo focused on scalable state management, routing, and client-side persistence.",
    techStack: [
      "SiReact",
      "SiRedux",
      "SiReactrouter",
      "SiTailwindcss",
      "SiFirebase",
    ],

    highlights: [
      "Global cart state with Redux Toolkit",
      "Client-side persistence",
      "Responsive shopping experience",
      "Toast notification feedback system",
    ],

    liveUrl: "https://orbitshop.netlify.app/",
    githubUrl: "https://github.com/Abhishekwmg/rc-estore",

    featured: false,

    category: "Frontend",

    image: orbitScreen,
  },
];

export const skillsData = [
  {
    id: 1,
    heading: "Frontend & Frameworks",
    icon: "Monitor",
    accent: "#00FF9D",

    description:
      "Libraries, frameworks and UI tooling used to build modern frontend applications.",

    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },

  {
    id: 2,
    heading: "State & Data",
    icon: "Database",
    accent: "#8B5CF6",

    description: "State management, async data handling and API communication.",

    skills: [
      "Redux Toolkit",
      "TanStack Query",
      "REST APIs",
      "Zod",
      "Firebase Auth",
    ],
  },

  {
    id: 3,
    heading: "Core Web",
    icon: "Globe",

    accent: "#F59E0B",

    description: "Fundamental web technologies and frontend best practices.",

    skills: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Accessibility",
    ],
  },

  {
    id: 4,
    heading: "Tools & Workflow",
    icon: "Wrench",

    accent: "#38BDF8",

    description:
      "Development tooling, debugging and day-to-day engineering workflow.",

    skills: ["Git", "Vite", "Browser DevTools", "API Integration"],
  },

  {
    id: 5,
    heading: "AI & Productivity",
    icon: "Sparkles",

    accent: "#A855F7",

    description:
      "AI-powered tools that improve development speed and productivity.",

    skills: ["GitHub Copilot", "ChatGPT", "AI-Assisted Development"],
  },
];

export const experienceData = [
  {
    id: 1,
    role: "Experience Engineer L2",
    company: "Publicis Sapient",

    duration: "2021 — Present",

    location: "Gurugram, Haryana",

    employmentType: "Full-time",

    icon: "Code2",

    description:
      "Building scalable frontend applications with React, TypeScript and modern UI architecture.",

    achievements: [
      "Rebuilt and owned an interactive geospatial discovery platform with Google Maps, geocoding, and radius-based search.",
      "Created real-time location-driven experiences using geospatial queries and Google Maps APIs.",
      "Improved performance, accessibility, and frontend scalability through optimization and reusable React components.",
    ],

    tech: ["JavaScript", "API Integration", "Adobe AEM", "SCSS", "HTML"],
  },

  {
    id: 2,
    role: "ML Data Associate",
    company: "Amazon",

    duration: "2018 — 2019",

    location: "Hyderabad, Telangana",

    employmentType: "Full-time",

    icon: "MonitorSmartphone",

    description:
      "Delivered responsive interfaces and optimized user experience across modern web applications.",

    achievements: [
      "Transcribed and labelled audio commands to improve Alexa’s speech recognition and NLU models.",
      "Converted short voice interactions into accurate text and tagged user intent for AI model training.",
      "Participated in internal coding events and gained hands-on exposure to JavaScript-based tooling and problem-solving.",
    ],
  },
];

export const aboutData = {
  heading: "About Me",
  badge: "Developer Profile",
  intro:
    "Frontend developer building performant, accessible, and user-focused web applications with modern JavaScript and React ecosystems.",

  description: [
    "I specialize in creating responsive interfaces, scalable component architectures, and seamless user experiences that bridge design and engineering.",
    "My work focuses on React, TypeScript, Next.js, and modern frontend tooling, with an emphasis on performance, maintainability, and accessibility.",
    "Whether developing customer-facing products or internal platforms, I enjoy solving complex UI challenges and turning ideas into polished digital experiences.",
  ],
  stats: [
    {
      id: 1,
      label: "Projects Built",
      value: "5+",
    },

    {
      id: 2,
      label: "Frontend Focus",
      value: "4+ yrs",
    },

    {
      id: 3,
      label: "Core Stack",
      value: "React",
    },
  ],

  highlights: [
    {
      id: 1,
      icon: "Code2",
      title: "Frontend Engineering",
      text: "React, TypeScript, scalable UI architecture.",
    },

    {
      id: 2,
      icon: "Rocket",
      title: "Performance First",
      text: "Fast rendering, responsive UX and maintainable code.",
    },

    {
      id: 3,
      icon: "Layers3",
      title: "Component Systems",
      text: "Reusable patterns, design consistency and modular UI.",
    },
  ],
};
