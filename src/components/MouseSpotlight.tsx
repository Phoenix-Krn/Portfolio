import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface MouseSpotlightProps {
  size?: number;
  color?: string;
}

const MouseSpotlight = ({
  size = 400,
  color = "hsl(var(--neon-cyan) / 0.15)",
}: MouseSpotlightProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      className="pointer-events-none fixed z-30"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: "blur(50px)",
        borderRadius: "50%",
      }}
    />
  );
};

export default MouseSpotlight;
