import { motion } from "framer-motion";
import { education } from "../../data/site";
import SectionHeading from "../ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// education.json"
          title="Education"
          subtitle="Formal training that grounded my engineering fundamentals."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-line bg-card p-6 shadow-card transition hover:border-accent hover:shadow-card-hover"
            >
              {(e.badge || e.years) && (
                <p className="font-mono text-xs text-terminal">{e.badge || e.years}</p>
              )}
              <h3 className={`font-display text-lg font-semibold text-text ${e.badge || e.years ? "mt-2" : ""}`}>
                {e.school}
              </h3>
              {(e.degree || e.department) && (
                <p className="mt-1 text-sm font-medium leading-relaxed">
                  {e.degree ? <span className="text-accent">{e.degree}</span> : null}
                  {e.degree && e.department ? <span className="text-text/70"> · </span> : null}
                  {e.department ? (
                    <span className="text-text/90">
                      {e.department}
                      {e.cgpa != null && String(e.cgpa).trim() !== "" ? ` (${e.cgpa} CGPA)` : ""}
                    </span>
                  ) : null}
                </p>
              )}
              {e.honors && (
                <p className="mt-2 text-sm font-semibold leading-relaxed text-accent">{e.honors}</p>
              )}
              {e.detail && <p className="mt-2 text-sm text-muted">{e.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
