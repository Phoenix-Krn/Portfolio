import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphTransitionProps {
  children: ReactNode;
  delay?: number;
}

const MorphTransition = ({ children, delay = 0 }: MorphTransitionProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      animate={{
        opacity: 1,
        clipPath: [
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          "polygon(5% 10%, 95% 5%, 95% 95%, 5% 90%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ],
      }}
      exit={{
        opacity: 0,
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default MorphTransition;
