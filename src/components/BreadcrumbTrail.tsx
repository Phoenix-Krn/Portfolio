import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BreadcrumbTrail = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

  const routeMap: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/experience": "Experience",
    "/projects": "Projects",
    "/publications": "Publications",
    "/certifications": "Certifications",
    "/contact": "Contact",
  };

  useEffect(() => {
    const current = routeMap[location.pathname] || "Unknown";
    setBreadcrumbs((prev) => {
      if (prev[prev.length - 1] !== current) {
        return [...prev.slice(-2), current];
      }
      return prev;
    });
  }, [location.pathname]);

  return (
    <div className="fixed bottom-8 left-8 z-40 flex items-center gap-2 text-sm font-mono">
      {breadcrumbs.map((breadcrumb, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-2"
        >
          <motion.span
            className="text-primary"
            whileHover={{ scale: 1.1 }}
          >
            {breadcrumb}
          </motion.span>
          {index < breadcrumbs.length - 1 && (
            <span className="text-muted-foreground">/</span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default BreadcrumbTrail;
