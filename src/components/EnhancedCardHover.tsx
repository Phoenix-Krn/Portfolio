import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface EnhancedCardHoverProps {
  children: ReactNode;
  className?: string;
}

const EnhancedCardHover = ({ children, className = "" }: EnhancedCardHoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const background = useMotionTemplate`
    radial-gradient(
      300px circle at ${x}px ${y}px,
      hsl(var(--neon-cyan) / 0.15),
      transparent 80%
    )
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovering(true)}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Animated gradient background */}
      <motion.div
        style={isHovering ? { background } : {}}
        className="absolute inset-0 rounded-xl pointer-events-none"
      />

      {/* Animated border */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl border border-primary/50 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 30px hsl(var(--neon-cyan) / 0.1), 0 0 30px hsl(var(--neon-cyan) / 0.1)",
        }}
      />

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Corner accent on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-transparent rounded-bl-full pointer-events-none"
        style={{ filter: "blur(15px)" }}
      />
    </motion.div>
  );
};

export default EnhancedCardHover;
