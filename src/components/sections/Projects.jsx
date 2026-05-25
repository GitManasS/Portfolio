import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { projects } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const active = projects.find((p) => p.id === openId);

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// projects/"
          title="Selected Projects"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              style={{ perspective: 1200 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card transition hover:border-accent hover:shadow-card-hover"
            >
              <motion.div
                className="relative aspect-video overflow-hidden"
                whileHover={{ rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-90" />
              </motion.div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-text">{p.title}</h3>
                {p.tagline && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-terminal">{p.tagline}</p>
                )}
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line bg-surface px-2 py-0.5 font-mono text-[10px] text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-2.5 text-xs font-semibold text-onaccent shadow-glow-sm transition hover:brightness-110"
                  >
                    <FaExternalLinkAlt /> Live demo
                  </a>
                  <div
                    className={`grid gap-2 ${
                      (p.repos?.length ?? 0) >= 3
                        ? "grid-cols-3"
                        : p.repos?.length === 2
                          ? "grid-cols-2"
                          : "grid-cols-1"
                    }`}
                  >
                    {p.repos?.length
                      ? p.repos.map((repo) => (
                          <a
                            key={repo.label}
                            href={repo.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-line bg-surface/60 py-2 font-mono text-[10px] font-medium text-text transition hover:border-accent hover:bg-accent-soft hover:text-accent"
                          >
                            <FaGithub className="h-3.5 w-3.5 shrink-0" />
                            {repo.label}
                          </a>
                        ))
                      : p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-line py-2 text-xs font-medium text-text transition hover:border-accent"
                          >
                            <FaGithub /> GitHub
                          </a>
                        )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(p.id)}
                  className="mt-3 text-center font-mono text-xs text-muted underline-offset-4 hover:text-accent hover:underline"
                >
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-lg overflow-auto rounded-2xl border border-line bg-card p-6 shadow-card-hover"
            >
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="absolute right-4 top-4 rounded-lg border border-line bg-surface/80 p-1.5 text-muted transition hover:border-accent hover:bg-surface-hover hover:text-text"
                aria-label="Close"
              >
                <HiXMark className="h-5 w-5" aria-hidden />
              </button>
              <div className="pr-10">
                <h3 className="font-display text-xl font-semibold">{active.title}</h3>
                {active.tagline && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-terminal">{active.tagline}</p>
                )}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{active.description}</p>
              <p className="mt-4 font-mono text-xs text-terminal">Highlights</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {active.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              {(active.live || active.repos?.length || active.github) && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.live && active.live !== "#" && (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-onaccent"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {active.repos?.map((repo) => (
                    <a
                      key={repo.label}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 font-mono text-xs text-text hover:border-accent"
                    >
                      <FaGithub /> {repo.label}
                    </a>
                  ))}
                  {!active.repos?.length && active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs text-text hover:border-accent"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              )}
              <button
                type="button"
                className="mt-6 w-full rounded-xl border border-line py-2.5 font-mono text-sm transition hover:border-accent"
                onClick={() => setOpenId(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
