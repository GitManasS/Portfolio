import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import SectionHeading from "../ui/SectionHeading";
import { getGithubUsername, profile } from "../../data/site";

function githubIconPublicUrl() {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/?$/, "/")}github-icon.png`;
}

export default function GitHubHeatmap() {
  const username = useMemo(() => getGithubUsername(), []);
  const iconSrc = useMemo(() => githubIconPublicUrl(), []);
  const [iconFailed, setIconFailed] = useState(false);

  const subtitle = username
    ? `GitHub activity for @${username} — open your profile for live stats.`
    : "GitHub contribution activity — link your profile in site data to show your username here.";

  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// contributions"
          title="Activity Graph"
          subtitle={subtitle}
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-line bg-card p-4 shadow-card"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
            <div className="flex min-w-0 items-center gap-3">
              <SiGithub className="h-10 w-10 shrink-0 text-text md:h-11 md:w-11" aria-hidden />
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted">Contribution calendar</p>
                {username ? (
                  <p className="truncate font-mono text-sm font-semibold text-text">@{username}</p>
                ) : null}
              </div>
            </div>
            {profile.github ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary shrink-0 gap-2 text-sm"
              >
                Open GitHub
              </a>
            ) : null}
          </div>

          <div className="w-full overflow-hidden rounded-xl border border-line bg-[#0d1117] shadow-inner light-mode:bg-slate-100 light-mode:shadow-[inset_0_1px_2px_rgba(15,23,42,0.06)]">
            {iconFailed ? (
              <div className="flex min-h-[200px] flex-col items-center justify-center gap-2 px-4 py-12 text-center">
                <SiGithub className="h-12 w-12 text-white/80 light-mode:text-slate-700" aria-hidden />
                <p className="font-mono text-xs text-white/50 light-mode:text-slate-500">
                  Could not load github-icon.png from /public
                </p>
              </div>
            ) : (
              <img
                src={iconSrc}
                alt="GitHub contribution activity"
                className="mx-auto block h-auto w-full max-h-[min(80vh,640px)] object-contain object-top"
                decoding="async"
                loading="eager"
                fetchPriority="high"
                onError={() => setIconFailed(true)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
