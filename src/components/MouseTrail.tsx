import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
}

const MouseTrail = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add new particle
      const newParticle: Particle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-10), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => prev.filter((p) => Date.now() - p.id < 1000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            left: particle.x,
            top: particle.y,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: `radial-gradient(circle, hsl(var(--neon-cyan)), transparent)`,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
