import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => {
      setTimeout(() => setDone(true), 900);
    });
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="h-10 w-10 rounded-full border-2 border-accent/30 border-t-accent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
            />
            <p className="font-mono text-sm text-muted">
              <span className="text-terminal">dev@manas</span>:~$ booting portfolio...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
