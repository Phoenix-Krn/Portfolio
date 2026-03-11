import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioMode } from "../context/PortfolioContext";
import { X, Zap } from "lucide-react";

const QuickPreviewModal = () => {
  const { isMultiPage } = usePortfolioMode();
  const [isOpen, setIsOpen] = useState(false);

  if (isMultiPage) return null;

  const sections = [
    {
      id: "about",
      title: "About Me",
      description: "Learn about my background and journey",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "experience",
      title: "Experience",
      description: "My professional background and roles",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "skills",
      title: "Skills",
      description: "Technologies and expertise",
      color: "from-pink-500 to-red-500",
    },
    {
      id: "projects",
      title: "Projects",
      description: "Recent and featured projects",
      color: "from-red-500 to-orange-500",
    },
    {
      id: "publications",
      title: "Publications",
      description: "Research and insights",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch with me",
      color: "from-green-500 to-cyan-500",
    },
  ];

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Quick Preview Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg group transition-all"
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          <Zap size={24} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 rounded text-xs font-semibold whitespace-nowrap hidden group-hover:block"
        >
          Quick Preview
        </motion.div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl max-h-96 bg-gray-900 rounded-lg border border-purple-500/30 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Quick Navigator</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-800 rounded transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.map((section, idx) => (
                  <motion.button
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleNavigate(section.id)}
                    className={`p-4 rounded-lg bg-gradient-to-r ${section.color} hover:shadow-lg transition-all group`}
                  >
                    <div className="text-left">
                      <h3 className="font-bold text-white group-hover:text-gray-100">
                        {section.title}
                      </h3>
                      <p className="text-sm text-white/70 group-hover:text-white/90">
                        {section.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickPreviewModal;
