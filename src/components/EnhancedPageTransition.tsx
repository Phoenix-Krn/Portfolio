import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnhancedPageTransitionProps {
  children: React.ReactNode;
}

const EnhancedPageTransition: React.FC<EnhancedPageTransitionProps> = ({
  children,
}) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [children]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedPageTransition;
