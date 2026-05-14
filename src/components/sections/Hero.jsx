import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { HiPencilSquare } from "react-icons/hi2";
import { SiMongodb } from "react-icons/si";
import { profile, getResumeUrl } from "../../data/site";
import { staggerContainer, fadeUp } from "../../utils/motionVariants";
import PostmanHeroPanel from "../hero/PostmanHeroPanel";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-dev opacity-40 md:opacity-50" />
      <div
        className="mesh-blob -left-40 top-0 h-[380px] w-[380px]"
        style={{ background: "radial-gradient(circle, rgba(251, 146, 60, 0.35) 0%, transparent 70%)" }}
      />
      <div
        className="mesh-blob right-[-100px] top-1/4 h-[340px] w-[340px]"
        style={{
          animationDelay: "3s",
          background: "radial-gradient(circle, rgba(255, 107, 53, 0.22) 0%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-14"
      >
        <div>
          <motion.div variants={fadeUp} custom={0} className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6c37] to-amber-500 text-white shadow-lg shadow-orange-500/25">
            <HiPencilSquare className="h-5 w-5" aria-hidden />
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.35}
            className="flex items-center gap-2 text-base font-medium text-muted md:text-lg"
          >
            <span>Hello, I&apos;m</span>
            <SiMongodb className="h-5 w-5 text-[#00ed64]" title="MongoDB" aria-hidden />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={0.85}
            className="bg-gradient-to-r from-[#ff8a3d] via-[#ff6c37] to-amber-400 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl lg:leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={1.35}
            className="mt-4 min-h-[2.75rem] font-mono text-lg font-semibold text-text md:text-xl"
          >
            <TypeAnimation
              sequence={[...profile.titles.flatMap((t) => [t, 2200]), profile.titles[0]]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={1.85}
            className="mt-6 max-w-xl text-base font-medium leading-relaxed text-text md:text-[1.05rem]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} custom={2.4} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-2.5 font-semibold text-white shadow-lg transition hover:brightness-110"
            >
              <FaLinkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white px-5 py-2.5 font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-100 light-mode:border-line light-mode:shadow-card"
            >
              <FaGithub className="h-5 w-5" />
              GitHub
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={2.7} className="mt-5 flex flex-wrap gap-2">
            <a
              href="#projects"
              className="rounded-lg border border-line bg-card/50 px-4 py-2 font-mono text-xs text-text shadow-sm transition hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              View Projects
            </a>
            <a
              href={getResumeUrl()}
              download
              className="rounded-lg border border-line bg-card/50 px-4 py-2 font-mono text-xs text-text shadow-sm transition hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line bg-card/50 px-4 py-2 font-mono text-xs text-text shadow-sm transition hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              Contact
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-card/50 px-4 py-2 font-mono text-xs text-text shadow-sm transition hover:border-accent hover:bg-accent-soft hover:text-accent"
            >
              <HiMail className="h-4 w-4" />
              Email
            </a>
          </motion.div>
        </div>

        <PostmanHeroPanel />
      </motion.div>
    </section>
  );
}
