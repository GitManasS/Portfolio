import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-accent via-terminal to-accent"
      style={{ scaleX, boxShadow: "0 0 12px rgba(94, 176, 255, 0.35)" }}
    />
  );
}
