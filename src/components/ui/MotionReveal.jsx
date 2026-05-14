import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../../utils/motionVariants";

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.2,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
