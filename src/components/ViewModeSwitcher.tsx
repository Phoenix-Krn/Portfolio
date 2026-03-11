import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePortfolioMode } from "../context/PortfolioContext";

const ViewModeSwitcher = () => {
  const { isMultiPage } = usePortfolioMode();

  useEffect(() => {
    // Add scroll to top on mode switch
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [isMultiPage]);

  return (
    <AnimatePresence>
      {isMultiPage !== undefined && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-24 right-8 z-40 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: 2 }}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold shadow-lg"
          >
            {isMultiPage ? "📑 Multi-Page Mode" : "📖 Single-Page Mode"}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Needed for motion.div
import { AnimatePresence } from "framer-motion";

export default ViewModeSwitcher;
