import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface LiquidSwipCardProps {
  children: ReactNode;
  className?: string;
}

const LiquidSwipeCard = ({ children, className = "" }: LiquidSwipCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 border border-primary/30 p-8 ${className}`}
    >
      {/* Liquid swipe effect */}
      <motion.div
        animate={{
          opacity: [0, 0.5, 0],
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"
      />

      {/* Content */}
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 pointer-events-none"
      />
    </motion.div>
  );
};

export default LiquidSwipeCard;
