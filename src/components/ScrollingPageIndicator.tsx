import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ScrollingPageIndicator = () => {
  const location = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/publications", label: "Publications" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" },
  ];

  const currentIndex = routes.findIndex((r) => r.path === location.pathname);
  const progress = ((currentIndex + 1) / routes.length) * 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-muted">
      {/* Page progress bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
        className="h-full bg-gradient-to-r from-primary to-secondary origin-left"
        style={{
          boxShadow: "0 0 20px hsl(var(--neon-cyan))",
        }}
      />

      {/* Page markers */}
      <div className="absolute inset-0 flex items-center">
        {routes.map((route, index) => (
          <motion.div
            key={route.path}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `${(index / routes.length) * 100}%`,
              width: "2px",
              height: "4px",
              backgroundColor: index <= currentIndex ? "hsl(var(--neon-cyan))" : "hsl(var(--border))",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingPageIndicator;
