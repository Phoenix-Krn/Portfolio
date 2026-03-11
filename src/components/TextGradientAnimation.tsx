import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextGradientAnimationProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

const TextGradientAnimation = ({
  children,
  className = "",
  colors = ["from-primary via-secondary to-primary"],
  duration = 4,
}: TextGradientAnimationProps) => {
  return (
    <motion.div
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{ duration, repeat: Infinity, repeatType: "reverse" }}
      className={`bg-gradient-to-r ${colors.join(" ")} bg-300% bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextGradientAnimation;
