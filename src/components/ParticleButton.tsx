import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface ParticleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

const ParticleButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: ParticleButtonProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));

    setParticles([...particles, ...newParticles]);
    setTimeout(() => {
      setParticles((p) => p.slice(8));
    }, 600);

    onClick?.();
  };

  const baseColor = variant === "primary" ? "hsl(var(--neon-cyan))" : "hsl(var(--neon-magenta))";

  return (
    <div className="relative inline-block">
      <motion.button
        ref={ref}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-6 py-3 font-semibold rounded-lg overflow-hidden group ${className}`}
        style={{
          background: `linear-gradient(135deg, ${baseColor}, hsl(var(--neon-magenta)))`,
          boxShadow: `0 0 20px ${baseColor}`,
        }}
      >
        <div className="relative z-10 text-white">{children}</div>

        {/* Hover glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 rounded-lg"
          style={{
            background: `radial-gradient(circle, ${baseColor} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
      </motion.button>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`${particle.id}-${Math.random()}`}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 100,
            y: particle.y + (Math.random() - 0.5) * 100,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.6 }}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: baseColor,
            left: 0,
            top: 0,
            boxShadow: `0 0 8px ${baseColor}`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleButton;
