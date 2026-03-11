import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingTextProps {
  children: ReactNode;
  className?: string;
  color?: string;
  intensity?: number;
}

const GlowingText = ({
  children,
  className = "",
  color = "hsl(var(--neon-cyan))",
  intensity = 1,
}: GlowingTextProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        textShadow: [
          `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
          `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`,
          `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        color: color,
        filter: `drop-shadow(0 0 ${8 * intensity}px ${color})`,
      }}
    >
      {children}
    </motion.div>
  );
};

export default GlowingText;
