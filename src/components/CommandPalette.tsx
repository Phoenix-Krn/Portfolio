import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioMode } from "../context/PortfolioContext";
import { Command, Home, User, Briefcase, Code, BookOpen, Award, Mail, ExternalLink, Copy } from "lucide-react";

interface Command {
  key: string;
  name: string;
  description: string;
  action: () => void;
  icon: React.ReactNode;
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isMultiPage, toggleMode } = usePortfolioMode();

  const sections = [
    { id: "home", name: "Home", icon: <Home size={16} /> },
    { id: "about", name: "About", icon: <User size={16} /> },
    { id: "experience", name: "Experience", icon: <Briefcase size={16} /> },
    { id: "skills", name: "Skills", icon: <Code size={16} /> },
    { id: "projects", name: "Projects", icon: <Code size={16} /> },
    { id: "publications", name: "Publications", icon: <BookOpen size={16} /> },
    { id: "certifications", name: "Certifications", icon: <Award size={16} /> },
    { id: "contact", name: "Contact", icon: <Mail size={16} /> },
  ];

  const handleNavigate = (sectionId: string) => {
    if (isMultiPage) {
      window.location.href = `/${sectionId === "home" ? "" : sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const commands: Command[] = [
    ...sections.map((section) => ({
      key: `go-${section.id}`,
      name: `Go to ${section.name}`,
      description: `Navigate to ${section.name} section`,
      icon: section.icon,
      action: () => handleNavigate(section.id),
    })),
    {
      key: "toggle-mode",
      name: `Switch to ${isMultiPage ? "Single" : "Multi"}-Page`,
      description: `Change to ${isMultiPage ? "single" : "multi"}-page view`,
      icon: <ExternalLink size={16} />,
      action: toggleMode,
    },
    {
      key: "copy-url",
      name: "Copy Current URL",
      description: "Copy portfolio URL to clipboard",
      icon: <Copy size={16} />,
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K or Cmd/Ctrl + /
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "/")) {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearchQuery("");
      }

      // Escape to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Command Palette Trigger Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 left-8 z-30 hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-purple-500/20 text-xs text-gray-400"
      >
        <Command size={14} />
        <span>Cmd/Ctrl + K</span>
      </motion.div>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 pt-20"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-gray-900 rounded-lg border border-purple-500/30 shadow-2xl overflow-hidden"
            >
              {/* Search Input */}
              <div className="px-4 py-3 border-b border-gray-800">
                <input
                  autoFocus
                  type="text"
                  placeholder="Search sections or commands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                />
              </div>

              {/* Commands List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => (
                    <motion.button
                      key={cmd.key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.02 }}
                      onClick={cmd.action}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-purple-500/10 transition-colors border-b border-gray-800/50 last:border-0"
                    >
                      <div className="text-purple-400">{cmd.icon}</div>
                      <div className="text-left flex-1">
                        <div className="text-sm font-medium text-white">
                          {cmd.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {cmd.description}
                        </div>
                      </div>
                    </motion.button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center text-gray-500">
                    No commands found
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-gray-800/30 border-t border-gray-800 text-xs text-gray-600 flex justify-between">
                <span>↑↓ to navigate</span>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
