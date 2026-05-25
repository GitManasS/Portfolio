export const apiProfileResponse = {
  name: "Manas Gupta",
  title: "Full Stack Developer | Backend Engineer",
  specialization: "MERN Stack & Scalable Backend Systems",
  experience: "1.5+ years",
  company: "InfyU Labs",
  role: "Backend Developer",
  location: "IIT-Gandhinagar, India",
  skills: {
    programming_languages: ["JavaScript", "C", "HTML/CSS"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    frontend: ["React.js", "Next.js", "TailwindCSS", "Bootstrap"],
    databases: ["MongoDB", "Redis", "MySQL"],
    devops: ["Docker", "Jenkins", "Azure", "Netlify", "Render", "Cloudinary", "CI/CD", "Prometheus"],
    tools: ["Postman", "Git", "Figma", "JIRA", "VS Code"],
  },
  contact: {
    email: "manasgupta7729@gmail.com",
    linkedin: "https://www.linkedin.com/in/manas-guptalinkdin/",
    github: "https://github.com/GitManasS",
  },
};

/** Flat grid: icon + name + category (Tech Stack section) */
export const techStack = [
  { name: "React.js", category: "Frontend", icon: "react" },
  { name: "Tailwind CSS", category: "Frontend", icon: "tailwind" },
  { name: "Bootstrap", category: "Frontend", icon: "bootstrap" },
  { name: "JavaScript", category: "Frontend", icon: "javascript" },
  { name: "Node.js", category: "Backend", icon: "nodejs" },
  { name: "Express.js", category: "Backend", icon: "express" },
  { name: "MongoDB", category: "Database", icon: "mongodb" },
  { name: "MySQL", category: "Database", icon: "mysql" },
  { name: "Postman", category: "Tools", icon: "postman" },
  { name: "Azure", category: "DevOps", icon: "azure" },
  { name: "Jenkins", category: "DevOps", icon: "jenkins" },
  { name: "Docker", category: "DevOps", icon: "docker" },
  { name: "Netlify", category: "DevOps", icon: "netlify" },
  { name: "Render", category: "DevOps", icon: "render" },
  { name: "Cloudinary", category: "DevOps", icon: "cloudinary" },
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "Figma", category: "Tools", icon: "figma" },
  { name: "Linux", category: "Tools", icon: "linux" },
];

export const projects = [
  {
    id: "hrms",
    title: "MG Works · HRMS",
    tagline: "Role-aware HR portal for the full employee lifecycle",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Material UI"],
    description:
      "Full-stack HR Management System with JWT auth and RBAC for employees, managers, HR, and admin — attendance, leave, payroll, reimbursements, onboarding, and org hierarchy.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    live: "https://hrms-mgworks.netlify.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/GitManasS/HRMS_Frontend_WebApp" },
      { label: "Backend", url: "https://github.com/GitManasS/HRMS_Backend_WebApp" },
    ],
    highlights: [
      "Developed end-to-end HRMS with React and Node.js/Express — attendance, leave, payroll, reimbursements, employee records, and org structure with RBAC across admin, HR, manager, and employee roles.",
      "Designed REST APIs and MongoDB schemas for employees, attendance, leaves, and expenses; implemented secure auth, profile management, and admin workflows (onboarding, leave/reimbursement approval, holidays).",
      "Delivered responsive dashboards, calendar attendance, org chart, announcements, file uploads, notifications, and payslip flows for day-to-day HR operations.",
    ],
  },
  {
    id: "mgkirana",
    title: "MGKirana",
    tagline: "Kirana, dry fruits & wellness — storefront + admin",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
      "Socket.io",
      "Docker",
    ],
    description:
      "Full-stack MERN e-commerce for grocery, dry fruits, and herbal products — customer browsing, cart, Razorpay checkout, order tracking, and an admin panel for catalog, inventory, coupons, and fulfillment.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    live: "https://mg-kirana.netlify.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/GitManasS/MGKirana-Frontend" },
      { label: "Backend", url: "https://github.com/GitManasS/MGKirana-Backend" },
      { label: "AI Services", url: "https://github.com/GitManasS/MGKirana-AIServices" },
    ],
    highlights: [
      "Developed a scalable online store with separate customer and admin experiences — product catalog, search, cart, wishlist, coupon checkout, and order tracking for users; inventory, orders, users, banners, and review moderation for admins.",
      "Secured REST APIs with JWT and role-based access; integrated Razorpay payments, Multer image uploads, and Socket.io notifications for real-time order status updates.",
      "Built a responsive UI with React, Redux Toolkit, and Tailwind CSS; MongoDB/Express backend with Docker-ready setup, plus a dedicated AI services microservice for intelligent storefront features.",
    ],
  },
  {
    id: "resume-intel",
    title: "ResumeIntel",
    tagline: "AI hiring OS — ATS, pipelines & career portals",
    tech: [
      "React",
      "Redux Toolkit",
      "TanStack Query",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "Socket.io",
      "Tailwind CSS",
      "Docker",
      "Netlify",
      "Render",
    ],
    description:
      "Multi-role SaaS hiring platform connecting candidates and recruiters — AI resume parsing, ATS scoring, JD matching, interview prep, job applications, Kanban pipelines, and org-branded career portals under JWT + RBAC.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    live: "https://resume-intel.netlify.app/",
    repos: [
      { label: "Frontend", url: "https://github.com/GitManasS/ResumeIntel-Frontend" },
      { label: "Backend", url: "https://github.com/GitManasS/ResumeIntel-Backend" },
    ],
    highlights: [
      "Built a RESTful Express API with JWT auth, refresh tokens, validation, rate limiting, and Swagger docs powering a React SPA deployed on Netlify with Render + MongoDB Atlas.",
      "Implemented multi-tenant RBAC (super admin, org admin, recruiter, candidate) with org-scoped data isolation, permission guards, and public career portals at /careers/{org-slug}.",
      "Integrated OpenAI (GPT-4o-mini) for resume parsing, ATS scoring, JD–resume matching, interview question generation, and candidate ranking with graceful fallback when the API is unavailable.",
      "Developed resume upload pipeline with PDF extraction, async parsing, Socket.io + polling for parse status; recruiter ATS with drag-and-drop pipelines, job postings, talent search, and analytics dashboards.",
      "Delivered candidate job board, one-click apply with resume selection, My Applications with pipeline filters, and a responsive UI using Redux Toolkit, TanStack Query, Recharts, and Tailwind.",
    ],
  },
];
