import { motion } from "framer-motion";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { SiJavascript } from "react-icons/si";
import { techStack } from "../../data/portfolio";
import { TECH_STACK_ICONS, techBrandClass } from "../../data/techStackBranding";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden px-4 py-20 md:px-8 md:py-24">
      {/* Warm radial glow (reference-style) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] light-mode:opacity-[0.22]"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(251, 146, 60, 0.14), transparent 62%), radial-gradient(ellipse 50% 40% at 50% 60%, rgba(94, 176, 255, 0.08), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-card text-accent shadow-card">
              <HiWrenchScrewdriver className="h-5 w-5" aria-hidden />
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl">Tech Stack</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-2xl text-base text-muted md:text-lg"
          >
            Tools and technologies I use across frontend, backend, DevOps, and delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {techStack.map((skill, i) => {
            const Icon = TECH_STACK_ICONS[skill.icon] || SiJavascript;
            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-24px" }}
                transition={{ delay: (i % 5) * 0.04 + Math.floor(i / 5) * 0.06, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-line bg-card px-3 py-7 text-center shadow-card transition duration-300 hover:border-accent hover:bg-surface hover:shadow-glow md:min-h-[152px] md:rounded-[1.1rem] md:py-8"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center text-[2.15rem] transition group-hover:scale-110 md:h-14 md:w-14 md:text-[2.35rem]">
                  <Icon
                    className={`drop-shadow-sm ${techBrandClass(skill.icon)}`}
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-sm font-bold leading-snug text-text md:text-[0.95rem]">{skill.name}</h3>
                <p className="mt-1.5 font-mono text-[10px] font-medium uppercase tracking-wide text-muted md:text-[11px]">
                  {skill.category}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
