import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [down, setDown] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    if (mq.matches) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mousedown", onDown);
      window.addEventListener("mouseup", onUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[95] mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: down ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[94] h-8 w-8 rounded-full border border-accent/40"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      />
    </>
  );
}
