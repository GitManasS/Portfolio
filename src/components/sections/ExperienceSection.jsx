import { useState } from "react";
import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";
import { HiArrowLongRight } from "react-icons/hi2";
import { experiences } from "../../data/site";
import { TECH_STACK_ICONS, techBrandClass } from "../../data/techStackBranding";

/** Oldest → newest for the horizontal “path” strip (story direction). */
function chronological(exps) {
  return [...exps].reverse();
}

const JOURNEY_BADGE = ["Present", "Earlier", "Where it started"];

function publicLogoSrc(filename) {
  if (!filename) return null;
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/?$/, "/")}${String(filename).replace(/^\//, "")}`;
}

/** Timeline node + article header: company logo from `/public`, or `initial` if missing / failed to load */
function ExperienceLogoMark({ exp, frameClassName }) {
  const [failed, setFailed] = useState(false);
  const src = exp.logo && !failed ? publicLogoSrc(exp.logo) : null;

  return (
    <div className={`relative ${frameClassName}`}>
      {src ? (
        <img
          src={src}
          alt={`${exp.company} logo`}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className="relative z-10 flex h-full w-full items-center justify-center font-display text-xs font-bold text-text md:text-sm"
          aria-hidden
        >
          {exp.initial}
        </span>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  if (!experiences.length) return null;

  const path = chronological(experiences);

  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl"
          >
            Experience
          </motion.h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-card">
          {/* Full-width journey strip — equal columns on desktop, full-width taps on mobile */}
          <div className="w-full border-b border-line bg-surface/50 px-3 py-6 sm:px-5 md:px-6 md:py-7">
            <p className="w-full border-b border-line/70 pb-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Career path · oldest → present
            </p>

            <div className="mt-5 flex w-full flex-col gap-2 md:mt-6 md:flex-row md:items-stretch md:gap-0">
              {path.map((exp, i) => (
                <div key={exp.id} className="contents">
                  <a
                    href={`#exp-${exp.id}`}
                    className="group flex w-full min-h-[92px] min-w-0 flex-col items-center justify-center rounded-xl border border-line bg-card px-3 py-4 text-center shadow-card transition hover:border-accent hover:bg-surface hover:shadow-glow-sm md:flex-1 md:px-4 md:py-5"
                  >
                    <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-terminal">
                      {(exp.duration.split("–")[0] || exp.duration.split("-")[0] || "").trim()}
                    </span>
                    <span className="mt-2 line-clamp-2 font-display text-sm font-bold text-text group-hover:text-accent md:text-base">
                      {exp.company}
                    </span>
                    <span className="mt-1 line-clamp-2 font-mono text-[11px] text-muted md:text-xs">
                      {exp.location.split(",")[0]?.trim()}
                    </span>
                  </a>
                  {i < path.length - 1 && (
                    <div
                      className="flex shrink-0 items-center justify-center py-1 text-accent/75 md:w-11 md:py-0"
                      aria-hidden
                    >
                      <span className="text-xl leading-none md:hidden">↓</span>
                      <HiArrowLongRight className="hidden h-6 w-6 md:block" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Vertical connected timeline — every role expanded */}
          <ul className="relative px-4 pb-6 pt-8 md:px-8 md:pb-10 md:pt-10">
            {experiences.map((exp, index) => {
              const isLast = index === experiences.length - 1;
              const badge = JOURNEY_BADGE[index] ?? `Chapter ${index + 1}`;

              return (
                <motion.li
                  key={exp.id}
                  id={`exp-${exp.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className={`relative scroll-mt-28 pb-14 pl-12 md:pl-16 ${isLast ? "pb-2" : ""}`}
                >
                  {/* Connector line */}
                  {!isLast && (
                    <div
                      className="absolute left-[18px] top-11 z-0 w-0.5 bg-gradient-to-b from-accent via-accent/35 to-line md:left-[22px]"
                      style={{ height: "calc(100% - 0.25rem)" }}
                      aria-hidden
                    />
                  )}

                  {/* Node */}
                  <div className="absolute left-0 top-0 z-[1] flex flex-col items-center md:left-1">
                    <ExperienceLogoMark
                      exp={exp}
                      frameClassName="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-accent bg-card shadow-glow-sm ring-4 ring-card md:h-11 md:w-11"
                    />
                    <span className="mt-2 max-w-[4.5rem] text-center font-mono text-[9px] font-semibold uppercase leading-tight text-accent md:text-[10px]">
                      {badge}
                    </span>
                  </div>

                  <article className="rounded-2xl border border-line bg-surface/40 p-5 shadow-card md:p-7">
                    <div className="flex flex-wrap items-start gap-3">
                      <ExperienceLogoMark
                        exp={exp}
                        frameClassName="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card ring-1 ring-line md:h-14 md:w-14"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-display text-lg font-semibold text-text md:text-xl">{exp.company}</p>
                        {exp.companyLegal && (
                          <p className="mt-0.5 text-xs text-muted">{exp.companyLegal}</p>
                        )}
                        <p className="mt-1 font-mono text-xs text-muted">{exp.location}</p>
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-extrabold leading-tight text-text md:text-2xl">
                      {exp.role}
                      {exp.roleDetail && <span className="font-semibold text-muted"> — {exp.roleDetail}</span>}
                    </h3>
                    <p className="mt-2 font-mono text-sm text-muted">{exp.duration}</p>

                    <p className="mt-5 text-[0.95rem] leading-relaxed text-muted md:text-base">{exp.summary}</p>

                    <ul className="mt-5 space-y-2.5">
                      {exp.highlights.map((line) => (
                        <li key={line} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terminal" aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">About</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">{exp.about}</p>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                        Skills earned
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((s) => {
                          const Icon = TECH_STACK_ICONS[s.key] || SiJavascript;
                          return (
                            <span
                              key={`${exp.id}-${s.label}`}
                              className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 font-mono text-[11px] font-medium text-text shadow-card md:text-xs"
                            >
                              <Icon
                                className={`h-4 w-4 shrink-0 drop-shadow-sm ${techBrandClass(s.key)}`}
                                aria-hidden
                              />
                              {s.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </article>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
