import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredContainerProps {
  children: ReactNode;
  delay?: number;
  staggerDelay?: number;
}

const StaggeredContainer = ({ 
  children, 
  delay = 0, 
  staggerDelay = 0.1 
}: StaggeredContainerProps) => {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredContainer;
