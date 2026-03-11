import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface HoverGlowEffectProps {
  children: React.ReactNode;
  radius?: number;
  intensity?: number;
  className?: string;
}

const HoverGlowEffect = ({
  children,
  radius = 200,
  intensity = 0.5,
  className = "",
}: HoverGlowEffectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isNear, setIsNear] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsNear(distance < radius);
  };

  const handleMouseLeave = () => {
    setIsNear(false);
  };

  const opacity = isNear ? intensity : 0;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{
          opacity,
          scale: isNear ? 1 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          left: mousePos.x - radius / 2,
          top: mousePos.y - radius / 2,
          background: "radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)",
          filter: "blur(30px)",
          width: radius,
          height: radius,
        }}
      />
      {children}
    </div>
  );
};

export default HoverGlowEffect;
