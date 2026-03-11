import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AuroraWave {
  id: number;
  color: string;
  delay: number;
}

const AuroraEffect = () => {
  const waves: AuroraWave[] = [
    { id: 1, color: "rgba(138, 43, 226, 0.1)", delay: 0 },
    { id: 2, color: "rgba(75, 0, 130, 0.08)", delay: 2 },
    { id: 3, color: "rgba(123, 104, 238, 0.12)", delay: 4 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {waves.map((wave) => (
        <motion.div
          key={wave.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.2, 1],
            x: ["-100%", "100%"],
          }}
          transition={{
            opacity: {
              duration: 8,
              repeat: Infinity,
              delay: wave.delay,
            },
            scaleY: {
              duration: 6,
              repeat: Infinity,
              delay: wave.delay,
            },
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: wave.delay,
            },
          }}
          className="absolute top-0 w-full h-1/3"
          style={{
            background: `linear-gradient(to bottom, ${wave.color}, transparent)`,
            filter: "blur(60px)",
            transformOrigin: "top",
          }}
        />
      ))}

      {/* Horizontal aurora bands */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-0 w-full h-32"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scaleX: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/3 left-0 w-full h-40"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.15), transparent)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
};

export default AuroraEffect;
