import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Code, BookOpen, Award, Mail } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { usePortfolioMode } from "../context/PortfolioContext";

const navItems = [
  { name: "Home", href: "/", icon: Home, section: "home" },
  { name: "About", href: "/about", icon: User, section: "about" },
  { name: "Experience", href: "/experience", icon: Briefcase, section: "experience" },
  { name: "Projects", href: "/projects", icon: Code, section: "projects" },
  { name: "Publications", href: "/publications", icon: BookOpen, section: "publications" },
  { name: "Certifications", href: "/certifications", icon: Award, section: "certifications" },
  { name: "Contact", href: "/contact", icon: Mail, section: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { isMultiPage } = usePortfolioMode();

  const handleSectionScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg glow-border flex items-center justify-center font-mono font-bold gradient-text">
                {"KRN"}
              </div>
              <span className="font-semibold text-foreground hidden sm:block">
                Portfolio
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {isMultiPage ? (
                  <Link to={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {location.pathname === item.href && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-primary/10 rounded-lg"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">
                        <item.icon className="w-4 h-4" />
                      </span>
                      <span className="relative z-10 font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSectionScroll(item.section)}
                    className="relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <span className="relative z-10">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <span className="relative z-10 font-medium">{item.name}</span>
                  </motion.button>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-primary">Available</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
