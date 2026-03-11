import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface AnimatedPageProps {
  children: ReactNode;
  type?: "fade" | "slide" | "scale" | "rotate";
}

const AnimatedPage = ({ children, type = "fade" }: AnimatedPageProps) => {
  const location = useLocation();

  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 },
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 1.2, opacity: 0 },
    },
    rotate: {
      initial: { rotate: -10, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
      exit: { rotate: 10, opacity: 0 },
    },
  };

  const variant = variants[type];

  return (
    <motion.div
      key={location.pathname}
      initial={variant.initial}
      animate={variant.animate}
      exit={variant.exit}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
