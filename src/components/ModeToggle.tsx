import React from "react";
import { motion } from "framer-motion";
import { usePortfolioMode } from "../context/PortfolioContext";
import { Grid3X3, BookOpen } from "lucide-react";

const ModeToggle = () => {
  const { isMultiPage, toggleMode } = usePortfolioMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-purple-500/60 transition-colors"
    >
      <button
        onClick={toggleMode}
        className="flex items-center gap-2 transition-all duration-300"
      >
        <div className="relative w-12 h-6 rounded-full bg-gray-700 transition-colors duration-300"
          style={{
            backgroundColor: isMultiPage ? "rgba(139, 92, 246, 0.3)" : "rgba(236, 72, 153, 0.3)",
          }}
        >
          <motion.div
            animate={{ x: isMultiPage ? 0 : 24 }}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
            className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg"
          />
        </div>
        <span className="text-xs font-semibold text-gray-300 select-none">
          {isMultiPage ? (
            <div className="flex items-center gap-1">
              <Grid3X3 size={14} />
              Multi
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <BookOpen size={14} />
              Single
            </div>
          )}
        </span>
      </button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute right-0 top-full mt-2 px-3 py-2 bg-gray-900 border border-purple-500/30 rounded-lg text-xs text-gray-200 whitespace-nowrap hidden group-hover:block pointer-events-none"
      >
        {isMultiPage ? "Switch to Single Page" : "Switch to Multi Page"}
      </motion.div>
    </motion.div>
  );
};

export default ModeToggle;
