import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticleShowcaseProps {
  particleCount?: number;
  colors?: string[];
  speed?: number;
}

const FloatingParticleShowcase = ({
  particleCount = 30,
  colors = [
    "hsl(var(--neon-cyan))",
    "hsl(var(--neon-magenta))",
    "hsl(var(--neon-purple))",
  ],
  speed = 1,
}: FloatingParticleShowcaseProps) => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; color: string; size: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, [particleCount, colors]);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden group">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-secondary/5" />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
          }}
          animate={{
            x: `${particle.x + (Math.random() - 0.5) * 30}%`,
            y: `${particle.y - Math.random() * 50}%`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 / speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      {/* Center glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 pointer-events-none"
      />
    </div>
  );
};

export default FloatingParticleShowcase;
