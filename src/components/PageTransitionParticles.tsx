import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface FloatingElementProps {
  icon?: React.ReactNode;
  text?: string;
}

const PageTransitionParticles = () => {
  const location = useLocation();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
  }, [location.pathname]);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            scale: 0,
            opacity: 1,
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + 20}%`],
            y: [`${particle.y}%`, `${particle.y - 30}%`],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: particle.delay,
            ease: "easeOut",
          }}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "hsl(var(--neon-cyan))",
            boxShadow: "0 0 10px hsl(var(--neon-cyan))",
          }}
        />
      ))}
    </div>
  );
};

export default PageTransitionParticles;
