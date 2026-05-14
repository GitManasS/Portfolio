import { useMemo } from "react";
import { motion } from "framer-motion";
import { SiPostman } from "react-icons/si";
import { HiGlobeAlt, HiSquares2X2, HiChartBar, HiClock } from "react-icons/hi2";
import { apiProfileResponse } from "../../data/portfolio";

const HERO_API_URL = "https://api.manas.dev/v1/me";

function highlightJsonLine(line, i) {
  const keyMatch = line.match(/^(\s*)"([^"]+)":\s(.*)$/);
  if (keyMatch) {
    const [, indent, key, rest] = keyMatch;
    return (
      <span key={i} className="block">
        <span className="text-neutral-500 light-mode:text-slate-500">{indent}</span>
        <span className="text-[#ff9f43]">&quot;{key}&quot;</span>
        <span className="text-neutral-500 light-mode:text-slate-500">: </span>
        <span className="text-sky-300/90 light-mode:text-sky-700">{rest}</span>
      </span>
    );
  }
  if (line.trim() === "{" || line.trim() === "}")
    return (
      <span key={i} className="block text-neutral-400 light-mode:text-slate-500">
        {line}
      </span>
    );
  return (
    <span key={i} className="block text-sky-200/80 light-mode:text-sky-800/90">
      {line}
    </span>
  );
}

export default function PostmanHeroPanel() {
  const body = useMemo(() => JSON.stringify(apiProfileResponse, null, 2), []);
  const lines = body.split("\n");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotateX: 4 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-lg lg:max-w-none"
      style={{ perspective: 1200 }}
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl opacity-70 blur-3xl light-mode:opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(251, 146, 60, 0.35), transparent 65%)",
        }}
      />
      <div className="postman-chrome relative overflow-hidden rounded-2xl border-2 border-[#ff7a2e]/45">
        {/* Title bar */}
        <div className="pm-divide-b flex items-center justify-between bg-[var(--pm-titlebar)] px-3 py-2.5 md:px-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[10px] text-neutral-500 light-mode:text-slate-500 md:text-xs">
            Portfolio API · local
          </span>
          <span className="w-14" />
        </div>

        <div className="flex min-h-[420px] max-h-[min(70vh,560px)] md:min-h-[460px]">
          {/* Postman-style rail */}
          <aside className="pm-divide-r flex w-11 shrink-0 flex-col items-center gap-5 bg-[var(--pm-rail)] py-4 md:w-14">
            <SiPostman className="h-6 w-6 text-[#ff6c37]" title="Collections" />
            <HiSquares2X2 className="h-5 w-5 text-neutral-500" />
            <HiGlobeAlt className="h-5 w-5 text-neutral-500" />
            <HiChartBar className="h-5 w-5 text-neutral-500" />
            <HiClock className="h-5 w-5 text-neutral-500" />
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            {/* Request row */}
            <div className="pm-divide-b flex flex-wrap items-center gap-2 bg-[var(--pm-request)] p-2 md:p-3">
              <span className="rounded border border-emerald-700/50 bg-emerald-900/40 px-2 py-1 font-mono text-[10px] font-bold text-emerald-400 light-mode:border-emerald-600/35 light-mode:bg-emerald-100/90 light-mode:text-emerald-800 md:text-xs">
                GET
              </span>
              <div className="min-w-0 flex-1 rounded border border-[color:var(--pm-border)] bg-[var(--pm-url)] px-2 py-1.5 font-mono text-[10px] text-sky-200/90 light-mode:text-sky-800 md:text-xs">
                {HERO_API_URL}
              </div>
              <button
                type="button"
                className="shrink-0 rounded-md bg-[#ff6c37] px-4 py-1.5 font-mono text-[10px] font-semibold text-white shadow-lg transition hover:brightness-110 md:text-xs"
              >
                Send
              </button>
            </div>

            {/* Tabs */}
            <div className="pm-divide-b flex gap-1 bg-[var(--pm-tabs)] px-2 pt-1">
              {["Params", "Auth", "Body", "Headers", "Settings"].map((t) => (
                <span
                  key={t}
                  className={`rounded-t-md px-2.5 py-2 font-mono text-[10px] md:px-3 md:text-xs ${
                    t === "Body"
                      ? "border-b-2 border-[#ff6c37] bg-[var(--pm-tab-active)] text-[#ff9f43] light-mode:text-amber-800"
                      : "text-neutral-500 light-mode:text-slate-500"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Response */}
            <div className="flex flex-1 flex-col overflow-hidden bg-[var(--pm-response)]">
              <div className="flex flex-wrap items-center gap-3 border-b border-[color:var(--pm-border-subtle)] px-3 py-2 font-mono text-[10px] md:text-xs">
                <span className="rounded bg-emerald-900/50 px-2 py-0.5 font-semibold text-emerald-400 light-mode:bg-emerald-100 light-mode:text-emerald-800">
                  200 OK
                </span>
                <span className="text-neutral-500 light-mode:text-slate-500">~980 ms</span>
                <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              </div>
              <div className="custom-scrollbar flex-1 overflow-auto p-3 md:p-4">
                <pre className="whitespace-pre-wrap break-words font-mono text-[10px] leading-relaxed md:text-[11px]">
                  {lines.map((line, i) => highlightJsonLine(line, i))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
