import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { navItems } from "../../data/site";
import ThemeToggle from "../layout/ThemeToggle";

export default function TerminalNavbar({ activeId }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8 ${scrolled ? "pt-3" : "pt-4"}`}
    >
      <motion.div
        layout
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-line px-4 py-3 shadow-card backdrop-blur-2xl transition-all md:px-6 ${
          scrolled ? "bg-card/95 py-2.5 shadow-card-hover" : "bg-card/70"
        }`}
      >
        <button
          type="button"
          onClick={() => scrollTo("#hero")}
          className="shrink-0 text-left font-mono text-xs text-text transition hover:opacity-90 md:text-sm"
        >
          <span className="font-medium text-text">dev@manas</span>
          <span className="text-text/80">:~$</span>{" "}
          <span className="font-semibold text-accent">./portfolio</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.href)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] font-semibold transition-all md:text-xs ${
                activeId === item.id
                  ? "bg-accent-soft text-accent shadow-glow-sm"
                  : "text-text hover:bg-surface-hover hover:text-accent"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-xl border border-line bg-surface/50 p-2 text-text shadow-card md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <HiXMark className="h-5 w-5" /> : <HiBars3BottomRight className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-card/98 p-2 shadow-card-hover backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.href)}
                  className={`rounded-xl px-3 py-2.5 text-left font-mono text-sm font-semibold transition ${
                    activeId === item.id
                      ? "bg-accent-soft text-accent"
                      : "text-text hover:bg-surface-hover hover:text-accent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
