import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { navItems, profile } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface px-4 py-12 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm text-terminal">dev@manas</p>
        </div>
        <div className="flex flex-wrap gap-6">
          {navItems.map((n) => (
            <a key={n.id} href={n.href} className="font-mono text-xs text-muted hover:text-accent">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted hover:text-text" aria-label="GitHub">
            <FaGithub className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-text" aria-label="LinkedIn">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-text" aria-label="Email">
            <HiMail className="h-6 w-6" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center font-mono text-xs text-muted">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
