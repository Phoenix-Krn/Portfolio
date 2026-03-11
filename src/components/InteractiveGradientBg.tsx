import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

const InteractiveGradientBg = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary Gradient Orb */}
      <motion.div
        className="absolute w-80 h-80 rounded-full mix-blend-soft-light blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          opacity: 0.15,
          left: x ? x - 160 : "50%",
          top: y ? y - 160 : "50%",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Secondary Gradient Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full mix-blend-screen blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)",
          opacity: 0.1,
          right: x ? -x - 200 : "auto",
          bottom: y ? -y - 200 : "auto",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 80 }}
      />

      {/* Accent Gradient Orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full mix-blend-lighten blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          opacity: 0.08,
          left: x ? x / 2 : "auto",
          top: y ? y / 2 : "auto",
        }}
        transition={{ type: "spring", damping: 35, stiffness: 120 }}
      />
    </div>
  );
};

export default InteractiveGradientBg;
