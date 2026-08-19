import orbitScreen from "../src/assets/orbitScreen.png";
import aeroScreen from "../src/assets/aeroScreen.png";
import cryptox from "../src/assets/cryptox.png";

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
    id: 2,
    title: "CryptoX Analytics & Tracker",
    slug: "cryptox-analytics-tracker",
    description:
      "Real-time cryptocurrency analytics and portfolio tracking platform featuring dynamic price charts, watchlists, and market insights.",

    techStack: [
      "SiReact",
      "SiTypescript",
      "SiRedux",
      "SiTanstack",
      "SiTailwindcss",
      "SiVite",
    ],

    highlights: [
      "Feature-based folder architecture",
      "State management with Redux Toolkit",
      "Async server state & caching via TanStack Query",
      "Interactive time-frame charts powered by Recharts",
    ],

    liveUrl: null,
    githubUrl: "https://github.com/Abhishekwmg/crypto-x",

    featured: true,

    category: "Frontend",

    image: cryptox,
  },
  {
    id: 2,
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
    id: 3,
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

    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS"],
  },

  {
    id: 2,
    heading: "State & Data",
    icon: "Database",
    accent: "#8B5CF6",

    description: "State management, async data handling and API communication.",

    skills: ["Redux Toolkit", "TanStack Query", "Zustand", "Zod", "REST APIs"],
  },

  {
    id: 3,
    heading: "Core Web",
    icon: "Globe",
    accent: "#F59E0B",

    description: "Fundamental web technologies and frontend best practices.",

    skills: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Web Accessibility (WCAG)",
      "Performance Optimization",
    ],
  },

  {
    id: 4,
    heading: "Tools & Workflow",
    icon: "Wrench",
    accent: "#38BDF8",

    description:
      "Development tooling, testing and day-to-day engineering workflow.",

    skills: [
      "Git",
      "Vite",
      "Jest / Vitest",
      "Browser DevTools",
      "Jira/Azure",
      "Confluence",
    ],
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
    role: "Experience Engineer L2 (Frontend)",
    company: "Publicis Sapient",

    duration: "2021 — Present",

    location: "Gurugram, Haryana",

    employmentType: "Full-time",

    icon: "Code2",

    description:
      "Owned and engineered scalable, customer-facing modules for large-scale enterprise web applications across modern web platforms.",

    achievements: [
      "Owned and developed key customer-facing modules for large-scale enterprise web applications, focusing on clean architecture and responsive cross-browser design.",
      "Built reusable UI components and shared design system patterns to accelerate feature delivery and ensure visual consistency across squads.",
      "Managed complex client-side state for dynamic search flows, handling debounced user inputs, background API calls, caching, and UI error states.",
      "Optimized frontend performance and Core Web Vitals via bundle auditing, lazy loading, and code-splitting, reducing initial page load times by 30-35%.",
      "Collaborated with backend teams to integrate REST APIs, handling data transformations, async state, and edge-case error scenarios.",
      "Translated Figma specs into accessible interfaces alongside UX designers, maintaining high stability with Jest and React Testing Library unit/integration tests.",
      "Managed daily workflows in Jira/Azure DevOps, actively participating in Agile sprint ceremonies, peer code reviews, and Confluence technical documentation.",
    ],

    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux Toolkit",
      "TanStack Query",
      "Zod",
      "Tailwind CSS",
      "REST APIs",
      "Jest",
      "React Testing Library",
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
      value: "5 yrs",
    },

    {
      id: 3,
      label: "Core Stack",
      value: "React + TypeScript",
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
