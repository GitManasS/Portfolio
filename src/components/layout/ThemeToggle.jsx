import { motion } from "framer-motion";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "../../hooks/useTheme.jsx";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-card/90 text-text shadow-card backdrop-blur-md"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? <HiSun className="h-5 w-5 text-accent" /> : <HiMoon className="h-5 w-5 text-accent" />}
    </motion.button>
  );
}
