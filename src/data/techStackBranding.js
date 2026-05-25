import {
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJenkins,
  SiDocker,
  SiNetlify,
  SiRender,
  SiCloudinary,
  SiKubernetes,
  SiGithub,
  SiFigma,
  SiGit,
  SiNginx,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaLinux, FaLock } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

/** Keys match `portfolio.techStack[].icon`, experience `skills[].key`, or DevOps flow nodes */
export const TECH_STACK_ICONS = {
  react: SiReact,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postman: SiPostman,
  azure: VscAzure,
  jenkins: SiJenkins,
  docker: SiDocker,
  netlify: SiNetlify,
  render: SiRender,
  cloudinary: SiCloudinary,
  kubernetes: SiKubernetes,
  github: SiGithub,
  figma: SiFigma,
  linux: FaLinux,
  git: SiGit,
  rest: TbApi,
  nginx: SiNginx,
  https: FaLock,
};

/** Brand-style fills via `currentColor` (Tailwind arbitrary hex) */
export const TECH_STACK_BRAND_CLASS = {
  react: "text-[#61DAFB]",
  tailwind: "text-[#06B6D4]",
  bootstrap: "text-[#7952B3]",
  javascript: "text-[#F7DF1E]",
  nodejs: "text-[#5FA04E]",
  express: "text-[#FAFAFA]",
  mongodb: "text-[#47A248]",
  mysql: "text-[#4479A1]",
  postman: "text-[#FF6C37]",
  azure: "text-[#0078D4]",
  jenkins: "text-[#D24939]",
  docker: "text-[#2496ED]",
  netlify: "text-[#00C7B7]",
  render: "text-[#46E3B7]",
  cloudinary: "text-[#3448C5]",
  kubernetes: "text-[#326CE5]",
  github: "text-[#F0F6FC]",
  figma: "text-[#F24E1E]",
  linux: "text-[#FCC624]",
  git: "text-[#F05032]",
  rest: "text-[#38BDF8]",
  nginx: "text-[#009639]",
  https: "text-[#22c55e]",
};

export function techBrandClass(iconKey) {
  return TECH_STACK_BRAND_CLASS[iconKey] ?? "text-text";
}
