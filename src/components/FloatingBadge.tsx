import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingBadgeProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

const FloatingBadge = ({
  children,
  delay = 0,
  duration = 4,
  distance = 20,
}: FloatingBadgeProps) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -distance, 0], opacity: [0, 1, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-block"
    >
      <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary bg-clip-border border border-transparent bg-origin-border text-xs font-semibold text-white">
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingBadge;
