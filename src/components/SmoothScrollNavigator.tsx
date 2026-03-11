import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePortfolioMode } from "../context/PortfolioContext";
import {
  Home,
  User,
  Briefcase,
  Code,
  BookOpen,
  Award,
  Mail,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface Section {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "home", name: "Home", icon: <Home size={16} /> },
  { id: "about", name: "About", icon: <User size={16} /> },
  { id: "journey", name: "Journey", icon: <Briefcase size={16} /> },
  { id: "achievements", name: "Achievements", icon: <Award size={16} /> },
  { id: "experience", name: "Experience", icon: <Briefcase size={16} /> },
  { id: "skills", name: "Skills", icon: <Code size={16} /> },
  { id: "projects", name: "Projects", icon: <Code size={16} /> },
  { id: "certifications", name: "Certifications", icon: <Award size={16} /> },
  { id: "publications", name: "Publications", icon: <BookOpen size={16} /> },
  { id: "contact", name: "Contact", icon: <Mail size={16} /> },
];

const SmoothScrollNavigator = () => {
  const { isMultiPage } = usePortfolioMode();
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMultiPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isMultiPage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMultiPage) return null;

  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const canScrollUp = currentIndex > 0;
  const canScrollDown = currentIndex < sections.length - 1;

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.3 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2"
    >
      {/* Scroll Up Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => canScrollUp && handleNavigate(sections[currentIndex - 1].id)}
        disabled={!canScrollUp}
        className={`p-2 rounded-lg transition-all ${
          canScrollUp
            ? "bg-purple-500/20 hover:bg-purple-500/40 text-purple-400"
            : "bg-gray-700/20 text-gray-600 cursor-not-allowed"
        }`}
      >
        <ChevronUp size={20} />
      </motion.button>

      {/* Active Section Indicator */}
      <motion.div
        layout
        className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-center"
      >
        <div className="text-xs font-semibold text-purple-300 mb-2">
          {activeSection.toUpperCase()}
        </div>
        <div className="flex flex-col gap-2">
          {sections.map((section, idx) => (
            <motion.button
              key={section.id}
              onClick={() => handleNavigate(section.id)}
              className={`flex items-center gap-2 px-2 py-1 rounded transition-all text-xs font-medium ${
                activeSection === section.id
                  ? "bg-purple-500/40 text-purple-200"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              whileHover={{ x: 5 }}
            >
              {section.icon}
              <span className="hidden sm:inline">{section.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Scroll Down Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          canScrollDown && handleNavigate(sections[currentIndex + 1].id)
        }
        disabled={!canScrollDown}
        className={`p-2 rounded-lg transition-all ${
          canScrollDown
            ? "bg-purple-500/20 hover:bg-purple-500/40 text-purple-400"
            : "bg-gray-700/20 text-gray-600 cursor-not-allowed"
        }`}
      >
        <ChevronDown size={20} />
      </motion.button>
    </motion.div>
  );
};

export default SmoothScrollNavigator;
