import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Creative", "Innovative", "Passionate", "Dedicated", "Professional"];

const FloatingWords = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-5">
      <motion.h1
        key={currentWord}
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 0.05, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 1.5, rotate: 10 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-bold gradient-text"
      >
        {words[currentWord]}
      </motion.h1>
    </div>
  );
};

export default FloatingWords;
