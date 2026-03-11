import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PageTransitionWave = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, opacity: 1 }}
          animate={{ scaleY: 1, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              hsl(var(--neon-cyan) / 0), 
              hsl(var(--neon-cyan) / ${0.3 - i * 0.1}), 
              hsl(var(--neon-cyan) / 0))`,
            transformOrigin: "bottom",
          }}
        />
      ))}

      {/* Wave effect from sides */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.6 }}
        className="absolute inset-y-0 w-32"
        style={{
          background: "linear-gradient(90deg, hsl(var(--neon-cyan) / 0.2), transparent)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
};

export default PageTransitionWave;
