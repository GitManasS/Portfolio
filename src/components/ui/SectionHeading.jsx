import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 md:mb-14">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-accent shadow-card backdrop-blur-sm"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl lg:text-[2.5rem] lg:leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
