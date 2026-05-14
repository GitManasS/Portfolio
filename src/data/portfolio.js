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
    devops: ["Docker", "Jenkins", "Azure", "CI/CD", "Prometheus"],
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
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "Figma", category: "Tools", icon: "figma" },
  { name: "Linux", category: "Tools", icon: "linux" },
];

export const projects = [
  {
    id: "olx-clone",
    title: "OLX Clone",
    tech: ["React.js", "Firebase", "JSX", "CSS"],
    description:
      "A classified ads platform enabling users to buy and sell products seamlessly.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    github: "https://github.com/GitManasS",
    live: "#",
    highlights: ["Real-time listings", "Auth & profiles", "Responsive UI"],
  },
  {
    id: "placement-cell",
    title: "Placement Cell Management System",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB"],
    description:
      "A recruitment platform to streamline placement processes and real-time communication.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    github: "https://github.com/GitManasS",
    live: "#",
    highlights: ["Role dashboards", "Notifications", "REST APIs"],
  },
  {
    id: "royal-riders",
    title: "Royal Riders Ecommerce",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    description: "A premium ecommerce platform for bike accessories.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    github: "https://github.com/GitManasS",
    live: "#",
    highlights: ["Catalog & cart", "Payments-ready", "SEO-friendly"],
  },
];
