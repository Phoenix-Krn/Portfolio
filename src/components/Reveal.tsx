import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "fade" | "scale" | "blur" | "rotate";
}

const Reveal = ({ 
  children, 
  delay = 0, 
  direction = "up",
  type = "fade"
}: RevealProps) => {
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const typeMap = {
    fade: { opacity: 0, ...directionMap[direction] },
    scale: { scale: 0.3, opacity: 0, ...directionMap[direction] },
    blur: { opacity: 0, filter: "blur(10px)", ...directionMap[direction] },
    rotate: { opacity: 0, rotate: -90, ...directionMap[direction] },
  };

  return (
    <motion.div
      initial={typeMap[type]}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1, 
        rotate: 0,
        filter: "blur(0px)"
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
