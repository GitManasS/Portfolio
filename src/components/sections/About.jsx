import { useMemo } from "react";
import { motion } from "framer-motion";
import { SiMongodb, SiReact, SiNodedotjs, SiExpress, SiDocker, SiTailwindcss } from "react-icons/si";
import { aboutParagraphs, profile } from "../../data/site";

const COLLECTIONS = [
  { id: "about", label: "about", active: true },
  { id: "experience", label: "experience", active: false },
  { id: "skills", label: "skills", active: false },
  { id: "projects", label: "projects", active: false },
];

const STACK_ICONS = [
  { Icon: SiReact, label: "React", className: "text-sky-400" },
  { Icon: SiNodedotjs, label: "Node", className: "text-green-500" },
  { Icon: SiExpress, label: "Express", className: "text-neutral-300 light-mode:text-slate-600" },
  { Icon: SiMongodb, label: "MongoDB", className: "text-[#00ed64]" },
  { Icon: SiDocker, label: "Docker", className: "text-sky-300" },
  { Icon: SiTailwindcss, label: "Tailwind", className: "text-cyan-400" },
];

function highlightMongoJson(line, i) {
  const keyMatch = line.match(/^(\s*)"([^"]+)":\s(.*)$/);
  if (keyMatch) {
    const [, indent, key, rest] = keyMatch;
    return (
      <span key={i} className="block">
        <span className="text-neutral-600 light-mode:text-slate-500">{indent}</span>
        <span className="text-[#ff9f43]">&quot;{key}&quot;</span>
        <span className="text-neutral-600 light-mode:text-slate-500">: </span>
        <span className="text-emerald-200/90 light-mode:text-emerald-800">{rest}</span>
      </span>
    );
  }
  if (line.trim() === "{" || line.trim().startsWith("}"))
    return (
      <span key={i} className="block text-neutral-500 light-mode:text-slate-500">
        {line}
      </span>
    );
  return (
    <span key={i} className="block text-emerald-100/85 light-mode:text-emerald-900/90">
      {line}
    </span>
  );
}

export default function About() {
  const doc = useMemo(
    () => ({
      developer: profile.name,
      role: "MERN Stack Developer",
      overview: aboutParagraphs[0],
      philosophy: aboutParagraphs[1],
      growth: aboutParagraphs[2],
      collaboration: aboutParagraphs[3],
    }),
    []
  );

  const json = useMemo(() => JSON.stringify(doc, null, 2), [doc]);
  const lines = json.split("\n");

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden px-4 py-20 md:px-8 md:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 light-mode:opacity-[0.28]"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.22) 0%, transparent 68%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-text md:text-4xl">
            About{" "}
            <span className="relative inline-flex h-10 w-10 items-center justify-center align-middle md:h-12 md:w-12">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6c37] to-amber-500 shadow-lg shadow-orange-500/30" />
              <span className="relative font-display text-lg font-bold text-white md:text-xl">Me</span>
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl text-center text-base text-muted md:mx-auto md:text-lg"
        >
        </motion.p>

        {/* MongoDB Compass–inspired shell */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mongo-compass overflow-hidden rounded-2xl border border-line"
        >
          <div className="mongo-divide-b flex items-center gap-2 bg-[var(--mc-chrome)] px-4 py-2.5">
            <SiMongodb className="h-6 w-6 text-[#00ed64]" aria-hidden />
            <div className="leading-tight">
              <p className="font-mono text-xs font-semibold text-neutral-200 light-mode:text-slate-800">
                MongoDB Compass
              </p>
              <p className="font-mono text-[10px] text-neutral-500 light-mode:text-slate-500">
                portfolio_db · local
              </p>
            </div>
            <div className="ml-auto flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:min-h-[420px]">
            <aside className="mongo-sidebar bg-[var(--mc-sidebar)] p-4 lg:w-56">
              <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 light-mode:text-slate-500">
                Connections
              </p>
              <p className="mt-3 font-mono text-xs text-[#00ed64]">● localhost:27017</p>
              <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 light-mode:text-slate-500">
                Database
              </p>
              <p className="mt-1 font-mono text-xs text-neutral-300 light-mode:text-slate-700">portfolio_db</p>
              <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 light-mode:text-slate-500">
                Collections
              </p>
              <ul className="mt-2 space-y-0.5">
                {COLLECTIONS.map((c) => (
                  <li
                    key={c.id}
                    className={`rounded-md px-2 py-1.5 font-mono text-xs ${
                      c.active
                        ? "border-l-2 border-[#ff6c37] bg-white/5 text-[#ff9f43] light-mode:bg-orange-50 light-mode:text-amber-800"
                        : "text-neutral-500 hover:bg-white/5 light-mode:text-slate-500 light-mode:hover:bg-slate-100/80"
                    }`}
                  >
                    {c.label}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[color:var(--mc-border)] pt-4">
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 light-mode:text-slate-500">
                  Stack
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {STACK_ICONS.map(({ Icon, label, className }) => (
                    <span
                      key={label}
                      title={label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--mc-border)] bg-[var(--mc-stack-bg)] shadow-inner"
                    >
                      <Icon className={`h-5 w-5 ${className}`} aria-hidden />
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex min-w-0 flex-1 flex-col bg-[var(--mc-editor)]">
              <div className="mongo-divide-b flex bg-[var(--mc-tabs)] px-2">
                {["Documents", "Aggregations", "Schema"].map((t, i) => (
                  <span
                    key={t}
                    className={`px-3 py-2 font-mono text-[10px] md:text-xs ${
                      i === 0
                        ? "border-b-2 border-[#00ed64] text-[#00ed64]"
                        : "text-neutral-500 light-mode:text-slate-500"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mongo-divide-b-subtle bg-[var(--mc-filter)] px-3 py-2 font-mono text-[10px] text-neutral-500 light-mode:text-slate-500 md:text-xs">
                Filter: <span className="text-neutral-400 light-mode:text-slate-600">{"{ }"}</span>
              </div>
              <div className="custom-scrollbar max-h-[min(55vh,480px)] flex-1 overflow-auto p-4 lg:max-h-none">
                <pre className="whitespace-pre-wrap break-words font-mono text-[10px] leading-relaxed md:text-[11px]">
                  {lines.map((line, i) => highlightMongoJson(line, i))}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
