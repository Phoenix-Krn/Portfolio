import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ParticleExplosion = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
      }));
      
      setClickPosition({ x: e.clientX, y: e.clientY });
      setParticles((prev) => [...prev, ...newParticles]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
        setClickPosition(null);
      }, 1000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, index) => {
        const angle = (index / 15) * Math.PI * 2;
        const distance = 50 + Math.random() * 50;
        
        return (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: particle.x + Math.cos(angle) * distance,
              y: particle.y + Math.sin(angle) * distance,
              scale: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: `hsl(${(index * 25) % 360}, 70%, 60%)`,
              boxShadow: `0 0 10px hsl(${(index * 25) % 360}, 70%, 60%)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleExplosion;
