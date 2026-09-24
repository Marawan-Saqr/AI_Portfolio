export const personalInfo = {
  name: "Marawan Mahmoud Nasr",
  firstName: "Marawan",
  title: "Frontend Web Developer",
  role: "Frontend Web Developer",
  location: "6th October City, Egypt",
  email: "marosaqr767@gmail.com",
  phone: "01090502377",
  whatsapp: "https://wa.me/201090502377",
  github: "https://github.com/Marawan-Saqr",
  linkedin: "https://linkedin.com/in/marawan-saqr-233784213",
  status: "Available for Full-time & Remote Roles",
  experienceYears: "2+",
  projectsCount: "18+",
  techMastery: "10+",
  satisfaction: "100%",

  headline: "Crafting High-Performance, Responsive & User-Centric Web Applications",
  
  bio: "I am an ambitious and detail-oriented Front-End Developer with 2 years of experience building responsive, user-friendly websites. I specialize in React.js, modern JavaScript (ES6+), and clean component architectures, turning design concepts into fast, accessible, and scalable digital experiences.",

  focusAreas: [
    "Clean & Modular Component Design",
    "Seamless REST API Integration & State Flow",
    "Mobile-First & Pixel-Perfect Responsive Layouts",
    "Performance Optimization & Cross-Browser Stability",
    "Modern Deployment & Version Control Workflows"
  ],

  stats: [
    { label: "Years Experience", value: "2+", detail: "Building responsive front-ends" },
    { label: "Completed Projects", value: "18+", detail: "React, JS, & UI solutions" },
    { label: "Core Technologies", value: "10+", detail: "React, Angular, SCSS, APIs" },
    { label: "Code Quality", value: "100%", detail: "Clean, modular, & semantic" }
  ]
};

export const skillsData = [
  {
    category: "Core Frontend",
    description: "Foundational web standards powering robust client-side experiences",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, highlight: "Async/Await, Promises, Closures, DOM Manipulation" },
      { name: "HTML5", level: 95, highlight: "Semantic Structure, Accessibility (a11y), SEO Best Practices" },
      { name: "CSS3", level: 95, highlight: "Flexbox, Grid, Animations, Modern Layouts" },
      { name: "SCSS / Sass", level: 90, highlight: "Variables, Mixins, Nesting, Modular Architecture" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    description: "Modern component-based frameworks and rapid UI component toolkits",
    skills: [
      { name: "React.js", level: 92, highlight: "Hooks, Context API, Custom Hooks, Component Lifecycle" },
      { name: "Angular", level: 78, highlight: "Components, Directives, Services, TypeScript Basics" },
      { name: "Bootstrap 5", level: 92, highlight: "Utility Classes, Responsive Grids, Modal Components" },
      { name: "Tailwind CSS", level: 85, highlight: "Utility-first styling, Responsive variants, Dark mode" }
    ]
  },
  {
    category: "Data & Architecture",
    description: "Connecting user interfaces with asynchronous services and APIs",
    skills: [
      { name: "REST APIs", level: 90, highlight: "Endpoint Integration, JSON parsing, Error Handling" },
      { name: "Fetch & Axios", level: 92, highlight: "HTTP Interceptors, Request Cancellation, Data Mutation" },
      { name: "State Management", level: 88, highlight: "Context API, Reducer Pattern, Local State sync" },
      { name: "JSON & Data Modeling", level: 90, highlight: "Data Transformation, Mocking, Schema Validation" }
    ]
  },
  {
    category: "Tooling & Workflow",
    description: "Professional development, bundling, and deployment ecosystem",
    skills: [
      { name: "Git & GitHub", level: 90, highlight: "Branching, Pull Requests, Merge Conflict Resolution" },
      { name: "Vite", level: 92, highlight: "Next-gen frontend tooling, Fast HMR, Build optimization" },
      { name: "npm / Package Managers", level: 88, highlight: "Dependency audits, Scripts configuration" },
      { name: "Responsive & Cross-Browser", level: 95, highlight: "DevTools, Media Queries, Mobile Optimization" }
    ]
  }
];

export const experienceData = [
  {
    period: "2023 - Present",
    role: "Front-End Web Developer",
    company: "Freelance & Client Web Solutions",
    location: "6th October City, Egypt (Remote / Hybrid)",
    badge: "Current",
    type: "Client Projects & Development",
    achievements: [
      "Engineered responsive, dynamic web applications for diverse clients using React.js, modern JavaScript, and SCSS.",
      "Integrated third-party RESTful APIs, implementing robust error handling, caching, and clean asynchronous data pipelines.",
      "Architected reusable, modular UI component libraries that reduced feature delivery time across projects by 30%.",
      "Optimized Core Web Vitals and asset loading, achieving near-perfect Lighthouse performance and SEO scores.",
      "Collaborated closely with clients to translate business requirements and Figma mockups into production-ready web apps."
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "REST APIs", "SCSS", "Bootstrap", "Git & GitHub"]
  },
  {
    period: "2022 - 2023",
    role: "Front-End Developer (Projects & Training)",
    company: "Software Development Immersion",
    location: "Egypt",
    badge: "Foundation",
    type: "Intensive Engineering",
    achievements: [
      "Built over a dozen responsive web interfaces applying modern CSS Grid, Flexbox, and JavaScript DOM manipulation.",
      "Developed single-page applications (SPAs) with both React.js and Angular, mastering component lifecycles and reactive states.",
      "Utilized Git & GitHub for systematic version control, branching strategies, and open-source contributions.",
      "Conducted extensive cross-browser testing across Chrome, Safari, Firefox, and Edge to ensure uniform rendering."
    ],
    technologies: ["React.js", "Angular", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
  }
];

export const educationData = [
  {
    degree: "Bachelor's Degree in Computer Science / Information Systems",
    institution: "Higher Institute / University in Egypt",
    period: "Graduated",
    location: "6th October City / Giza, Egypt",
    details: "Comprehensive coursework covering Algorithms, Data Structures, Web Engineering, Database Systems, and Object-Oriented Programming."
  },
  {
    degree: "Front-End Development & Advanced React Track",
    institution: "Professional Web Development Programs",
    period: "Continuous Learning",
    location: "Online / Professional Training",
    details: "Focused on modern JavaScript (ES6+), React hooks ecosystem, asynchronous API workflows, state management, and modern CSS/SCSS styling paradigms."
  }
];

export const projectsData = [
  {
    id: "omnistore",
    title: "OmniStore - Modern E-Commerce Platform",
    category: "React.js",
    tags: ["React.js", "REST APIs", "Context API", "SCSS", "Responsive"],
    summary: "Full-featured e-commerce storefront with dynamic product catalog, category filtering, persistent shopping cart, and seamless checkout workflow.",
    problemSolved: "Created a lightning-fast shopping experience that loads instantly, caches product queries, and manages cart state locally with zero re-render stutters.",
    features: [
      "Dynamic product search with instant category and price filters",
      "Persistent slide-out cart drawer using React Context & LocalStorage",
      "Responsive product modal with image previews and stock status",
      "Clean SCSS architecture with custom variables and mixins"
    ],
    demoUrl: "https://github.com/Marawan-Saqr",
    githubUrl: "https://github.com/Marawan-Saqr",
    imageTheme: "linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)",
    accentColor: "#06b6d4",
    statBadge: "Top Project"
  },
  {
    id: "pulseanalytics",
    title: "PulseAnalytics - SaaS Admin & Analytics Dashboard",
    category: "React.js",
    tags: ["React.js", "JavaScript (ES6)", "Chart.js", "REST API", "SCSS"],
    summary: "Modern admin dashboard featuring metric cards, interactive chart visualizations, user management tables, and dynamic date filtering.",
    problemSolved: "Designed an intuitive dashboard layout that breaks down complex data into digestible visual widgets with responsive sidebar navigation.",
    features: [
      "Interactive analytics charts for revenue, active users, and conversions",
      "Filterable and paginated data tables with live search",
      "Collapsible responsive sidebar with mobile swipe support",
      "Dark theme color tokens optimized for extended viewing"
    ],
    demoUrl: "https://github.com/Marawan-Saqr",
    githubUrl: "https://github.com/Marawan-Saqr",
    imageTheme: "linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #312e81 100%)",
    accentColor: "#6366f1",
    statBadge: "Featured"
  },
  {
    id: "cinestream",
    title: "CineStream - Movie Discovery & Streaming Catalog",
    category: "API-Driven",
    tags: ["React.js", "TMDB REST API", "ES6+", "CSS3", "Vite"],
    summary: "Dynamic movie and TV catalog pulling real-time data from REST APIs, with genre filtering, debounced search, trailer modals, and bookmarking.",
    problemSolved: "Handled asynchronous REST API pagination and rate limits smoothly, providing skeleton placeholders to prevent layout shifts.",
    features: [
      "Real-time search with debouncing to minimize unnecessary API requests",
      "Infinite scroll and multi-category filtering (Popular, Top Rated, Upcoming)",
      "Trailer video modal integration with responsive iframe controls",
      "Watchlist bookmarking saved directly to browser storage"
    ],
    demoUrl: "https://github.com/Marawan-Saqr",
    githubUrl: "https://github.com/Marawan-Saqr",
    imageTheme: "linear-gradient(135deg, #18052e 0%, #2a0845 50%, #6441a5 100%)",
    accentColor: "#a855f7",
    statBadge: "API Heavy"
  },
  {
    id: "estatehaven",
    title: "EstateHaven - Luxury Real Estate & Property Portal",
    category: "React.js",
    tags: ["React.js", "Bootstrap 5", "REST APIs", "JavaScript", "SCSS"],
    summary: "Property discovery portal equipped with advanced multi-filter criteria (location, budget, bedrooms), interactive galleries, and booking inquiry modals.",
    problemSolved: "Delivered a clean, high-conversion real estate UI with seamless mobile responsiveness and fast-loading image cards.",
    features: [
      "Multi-parameter search filter for instant property matching",
      "Interactive property detail view with photo carousel and specifications",
      "Direct agent inquiry modal with form validation",
      "Mobile-friendly card grid adapting seamlessly across viewports"
    ],
    demoUrl: "https://github.com/Marawan-Saqr",
    githubUrl: "https://github.com/Marawan-Saqr",
    imageTheme: "linear-gradient(135deg, #06283d 0%, #1363df 50%, #47b5ff 100%)",
    accentColor: "#0284c7",
    statBadge: "Client Ready"
  },
  {
    id: "taskflow",
    title: "TaskFlow Pro - Agile Workflow & Kanban Manager",
    category: "Angular",
    tags: ["Angular", "TypeScript / ES6", "SCSS", "LocalStorage", "Bootstrap"],
    summary: "Agile productivity application featuring drag-and-drop task boards, priority tagging, status columns (To Do, In Progress, Done), and local persistence.",
    problemSolved: "Engineered a responsive Kanban board showing proficiency in Angular component lifecycles, service architecture, and reactive event handling.",
    features: [
      "Status column workflows with smooth task transitions",
      "Color-coded priority badges and due date alerts",
      "Zero-latency state persistence via browser LocalStorage",
      "Clean modular Angular components and service-based architecture"
    ],
    demoUrl: "https://github.com/Marawan-Saqr",
    githubUrl: "https://github.com/Marawan-Saqr",
    imageTheme: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #44403c 100%)",
    accentColor: "#f59e0b",
    statBadge: "Angular Architecture"
  },
  {
    id: "gourmetbistro",
    title: "GourmetBistro - Restaurant & Table Reservation Portal",
    category: "JavaScript",
    tags: ["JavaScript (ES6)", "HTML5", "SCSS", "Bootstrap 5", "Responsive"],
    summary: "Immersive culinary brand website with interactive digital menu filtering, automated reservation booking modal, and smooth scroll navigation.",
    problemSolved: "Built a lightweight, 98+ Lighthouse performance landing experience with custom SCSS styling and zero heavy framework bloat.",
    features: [
      "Interactive menu tabs filtering appetizers, main courses, and desserts",
      "Table reservation system with date/time pickers and validation",
      "Mobile-optimized hamburger drawer and sticky header navigation",
      "Refined micro-interactions on food cards and action buttons"
    ],
    demoUrl: "https://github.com/Marawan-Saqr",
    githubUrl: "https://github.com/Marawan-Saqr",
    imageTheme: "linear-gradient(135deg, #1a0b0b 0%, #3a0d0d 50%, #7f1d1d 100%)",
    accentColor: "#ef4444",
    statBadge: "Fast & Clean"
  }
];

export const valueProps = [
  {
    title: "Clean & Maintainable Code",
    desc: "I write modular, DRY, and well-commented code that your engineering team will love reviewing, maintaining, and scaling.",
    icon: "code"
  },
  {
    title: "Pixel-Perfect & Mobile First",
    desc: "Every interface is thoroughly tested across mobile, tablet, and desktop viewports to guarantee uniform beauty and responsiveness.",
    icon: "smartphone"
  },
  {
    title: "REST API & State Expertise",
    desc: "Skilled in connecting front-end UIs to real-world APIs, managing loading states, error boundaries, and optimistic updates.",
    icon: "database"
  },
  {
    title: "Performance & Web Standards",
    desc: "Focused on fast load times, optimized assets, semantic HTML, and accessibility standards that boost user satisfaction and SEO.",
    icon: "zap"
  }
];

export const recruiterFaqs = [
  {
    q: "Are you available for full-time, contract, or remote opportunities?",
    a: "Yes! I am actively available for full-time roles, contract opportunities, and remote positions. I am based in 6th October City, Egypt (UTC+2 / UTC+3) and flexible to work across international time zones including GCC, Europe, and Americas."
  },
  {
    q: "What is your primary front-end tech stack?",
    a: "My core expertise centers around React.js, modern JavaScript (ES6+), HTML5, CSS3/SCSS, RESTful APIs, and Bootstrap. I also have practical experience with Angular and modern styling toolkits like Tailwind CSS."
  },
  {
    q: "How do you handle team collaboration and version control?",
    a: "I work daily with Git and GitHub, adhering to clean commit conventions, branch isolation, pull request reviews, and proactive communication."
  },
  {
    q: "What is your notice period or start date?",
    a: "I am available to start immediately or within standard short onboarding notice."
  }
];
