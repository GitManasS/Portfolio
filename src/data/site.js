export const profile = {
  name: "Manas Gupta",
  titles: [
    "MERN Stack Developer",
    "Backend Engineer",
    "DevOps Enthusiast",
    "Full Stack Developer",
  ],
  tagline:
    "Passionate about building full-stack web applications using the MERN stack, designing scalable APIs, crafting responsive UIs, and optimizing performance across the stack.",
  email: "manasgupta7729@gmail.com",
  phone: "9140751749",
  linkedin: "https://www.linkedin.com/in/manas-guptalinkdin/",
  github: "https://github.com/GitManasS",
  /** Place the actual file at `public/resume.pdf` (same filename) so this link works. */
  resumePath: "/resume.pdf",
};

/** PDF in `public/` — works with Vite `base` when set (e.g. GitHub Pages). */
export function getResumeUrl() {
  const name = profile.resumePath.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL ?? "/";
  const normalized = base.endsWith("/") ? base : `${base}/`;
  return `${normalized}${name}`;
}

/** Optional: set `VITE_GITHUB_USERNAME` in `.env` if the account is not the last path segment of `profile.github`. */
export function getGithubUsername() {
  const fromEnv = import.meta.env?.VITE_GITHUB_USERNAME;
  if (fromEnv && String(fromEnv).trim()) return String(fromEnv).trim();
  const m = profile.github?.replace(/\/$/, "").match(/github\.com\/([^/?#]+)/i);
  return m ? m[1] : null;
}

export const aboutParagraphs = [
  "I'm Manas Gupta, a passionate and detail-oriented Full Stack Developer with a strong foundation in the MERN stack. I enjoy crafting clean, scalable, and high-performance applications that balance both user experience and backend robustness.",
  "My development philosophy centers around writing maintainable code, following modern architecture patterns, and continuously evolving with new tools and technologies in the JavaScript ecosystem.",
  "I'm driven by curiosity to learn and improve — whether exploring DevOps workflows, optimizing database performance, or refining API integrations.",
  "I value collaboration, knowledge sharing, and solving real-world problems through scalable software solutions.",
];

/** Work history — tabbed Experience section reads this array (most recent first). */
export const experiences = [
  {
    id: "infyu",
    company: "InfyU Labs",
    location: "Gujarat, India",
    role: "Full Stack Developer",
    duration: "June 2024 – Present",
    summary:
      "I own features across the stack—from API contracts and service design to React screens—so releases stay coherent from database to UI.",
    highlights: [
      "Designed and extended REST services and data models that stay maintainable as product scope grows.",
      "Partnered on React feature work, component structure, and performance so complex screens still feel snappy.",
      "Supported production rollout with Dockerized services, Jenkins pipelines, and cloud infra on Azure, including Kubernetes where workloads demand it.",
    ],
    about:
      "InfyU Labs builds data-driven products for agriculture, health, and industrial teams—fast iteration with real domain constraints.",
    skills: [
      { key: "react", label: "React" },
      { key: "nodejs", label: "Node.js" },
      { key: "express", label: "Express" },
      { key: "mongodb", label: "MongoDB" },
      { key: "docker", label: "Docker" },
      { key: "jenkins", label: "Jenkins" },
      { key: "azure", label: "Azure" },
      { key: "kubernetes", label: "Kubernetes" },
      { key: "git", label: "Git" },
    ],
    initial: "I",
    /** Public folder filename; built with `import.meta.env.BASE_URL` in ExperienceSection */
    logo: "infyulabs-logo.jpg",
  },
  {
    id: "cavisson",
    company: "Cavisson Systems",
    location: "Noida, India",
    role: "Backend Developer",
    roleDetail: "MERN stack",
    duration: "Feb 2023 – May 2024",
    summary:
      "Focused on reliable backend delivery: clear service boundaries, predictable APIs, and databases that behave under load.",
    highlights: [
      "Implemented and hardened services in Node.js and Express backed by MongoDB for customer-facing features.",
      "Refined REST endpoints and indexing so common queries stayed fast as data volume increased.",
      "Worked in two-week Agile cadences with frontend peers, keeping contracts aligned and changes traceable in Git.",
    ],
    about:
      "Cavisson Systems specializes in performance and observability for digital businesses—quality and latency are part of the culture.",
    skills: [
      { key: "nodejs", label: "Node.js" },
      { key: "express", label: "Express" },
      { key: "mongodb", label: "MongoDB" },
      { key: "rest", label: "REST APIs" },
      { key: "git", label: "Git" },
      { key: "javascript", label: "JavaScript" },
    ],
    initial: "C",
    logo: "cavission-logo.jpg",
  },
  {
    id: "fynd",
    company: "Fynd",
    companyLegal: "Shopsense Retail Technologies Pvt. Ltd.",
    location: "Noida, India",
    role: "MERN Stack Intern",
    duration: "Aug 2022 – Jan 2023",
    summary:
      "Early-career immersion in a full-stack product org: shipping UI slices end-to-end while learning how APIs and ownership work in practice.",
    highlights: [
      "Built and adjusted responsive views in React and connected them to existing REST APIs with clear loading and error states.",
      "Collaborated with mentors on MERN-style changes—small features, refactors, and fixes that tightened integration between client and server.",
      "Practiced code review habits, component reuse, and incremental delivery in a retail-commerce codebase.",
    ],
    about:
      "Fynd (via Shopsense Retail Technologies) powers omnichannel retail experiences—internship exposure to commerce-scale UI and integration patterns.",
    skills: [
      { key: "react", label: "React" },
      { key: "nodejs", label: "Node.js" },
      { key: "express", label: "Express" },
      { key: "mongodb", label: "MongoDB" },
      { key: "javascript", label: "JavaScript" },
      { key: "tailwind", label: "Tailwind" },
    ],
    initial: "F",
    logo: "fynd-logo.png",
  },
];

export const education = [
  {
    school: "Children Public Sr. Sec. School",
    badge: "School",
    detail: "Schooling foundation",
  },
  {
    school: "Ajay Kumar Garg Engineering College, Ghaziabad",
    degree: "B.Tech",
    department: "Computer Science and Information Technology",
    cgpa: "9.2",
    honors: "3rd Rank Holder in Department — Bronze Medalist",
  },
];

export const navItems = [
  { id: "about", label: "/about", href: "#about" },
  { id: "skills", label: "/skills", href: "#skills" },
  { id: "projects", label: "/projects", href: "#projects" },
  { id: "experience", label: "/experience", href: "#experience" },
  { id: "education", label: "/education", href: "#education" },
  { id: "contact", label: "/contact", href: "#contact" },
];
