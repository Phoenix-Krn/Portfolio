import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Cursor Trail - subtle effect */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "hsl(var(--neon-cyan))",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: isHovering 
            ? "0 0 30px hsl(var(--neon-cyan)), 0 0 60px hsl(var(--neon-magenta))"
            : "0 0 20px hsl(var(--neon-cyan))",
          opacity: 0.6,
        }}
      />
    </>
  );
};

export default CustomCursor;
