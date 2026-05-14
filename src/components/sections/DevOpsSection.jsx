import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { TECH_STACK_ICONS, techBrandClass } from "../../data/techStackBranding";

const flow = [
  { key: "github", label: "GitHub" },
  { key: "jenkins", label: "Jenkins CI/CD" },
  { key: "docker", label: "Docker Build" },
  { key: "azure", label: "Azure VM" },
  { key: "nginx", label: "NGINX Reverse Proxy" },
  { key: "https", label: "HTTPS Live App" },
];

export default function DevOpsSection() {
  return (
    <section id="devops" className="scroll-mt-24 px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// deploy.pipeline"
          title="DevOps & Deployment"
          subtitle="From commit to HTTPS — how production releases move through the stack."
        />

        <div className="relative overflow-hidden rounded-2xl border border-line bg-card p-6 shadow-card md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-grid-dev opacity-40" />

          <div className="relative flex snap-x gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
            {flow.map((node, i) => {
              const Icon = TECH_STACK_ICONS[node.key];
              if (!Icon) return null;
              return (
                <div key={node.label} className="flex shrink-0 items-center gap-3 md:shrink md:flex-col md:gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(88,166,255,0.35)" }}
                    className="flex w-44 flex-col items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-4 shadow-card md:w-36"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card/80 text-2xl">
                      <Icon className={`h-6 w-6 drop-shadow-sm ${techBrandClass(node.key)}`} aria-hidden />
                    </div>
                    <p className="text-center font-mono text-[11px] leading-snug text-text">{node.label}</p>
                  </motion.div>
                  {i < flow.length - 1 && (
                    <span className="font-mono text-lg text-accent md:rotate-0" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="relative mt-8 text-center text-sm text-muted">
            Dockerized services, Jenkins pipelines, Azure infrastructure, and NGINX TLS termination for stable
            production traffic.
          </p>
        </div>
      </div>
    </section>
  );
}
