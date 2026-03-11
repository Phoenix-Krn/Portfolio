import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphingShapeProps {
  children: ReactNode;
  className?: string;
}

const MorphingShape = ({ children, className = "" }: MorphingShapeProps) => {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 30% 70% 70% 30%",
          "30% 30% 70% 70% / 70% 30% 30% 70%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`bg-gradient-to-r from-primary to-secondary p-1 ${className}`}
      style={{
        boxShadow: "0 0 30px hsl(var(--neon-cyan) / 0.3)",
      }}
    >
      <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};

export default MorphingShape;
