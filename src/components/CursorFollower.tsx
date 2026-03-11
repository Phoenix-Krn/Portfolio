import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
        className="pointer-events-none fixed w-8 h-8 border border-primary/50 rounded-full z-50"
      />

      {/* Inner dot */}
      <motion.div
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: "spring", stiffness: 150, damping: 25, mass: 0.3 }}
        className="pointer-events-none fixed w-2 h-2 bg-primary rounded-full z-50"
      />

      {/* Following glow */}
      <motion.div
        animate={{ x: mousePos.x - 50, y: mousePos.y - 50 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="pointer-events-none fixed w-24 h-24 rounded-full z-40"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--neon-cyan) / 0.2), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </>
  );
};

export default CursorFollower;
