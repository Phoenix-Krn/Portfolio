import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Planet {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  orbitDuration: number;
}

const FloatingPlanets = () => {
  const planets: Planet[] = [
    {
      id: 1,
      size: 60,
      x: 10,
      y: 20,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      orbitDuration: 20,
    },
    {
      id: 2,
      size: 40,
      x: 85,
      y: 70,
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      orbitDuration: 25,
    },
    {
      id: 3,
      size: 50,
      x: 15,
      y: 80,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      orbitDuration: 30,
    },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.05, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: planet.orbitDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            borderRadius: "50%",
            background: planet.color,
            boxShadow: `0 0 ${planet.size}px rgba(255, 255, 255, 0.3)`,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Rings for one planet */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: "85%",
          top: "70%",
          width: "80px",
          height: "20px",
          border: "2px solid rgba(245, 87, 108, 0.3)",
          borderRadius: "50%",
          transform: "rotateX(75deg)",
        }}
      />
    </div>
  );
};

export default FloatingPlanets;
