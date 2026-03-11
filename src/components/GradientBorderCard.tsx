import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientBorderCardProps {
  children: ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const GradientBorderCard = ({
  children,
  className = "",
  gradientFrom = "from-primary",
  gradientTo = "to-secondary",
}: GradientBorderCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative group ${className}`}
    >
      {/* Animated gradient border */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradientFrom} ${gradientTo} p-[2px]`}
        style={{
          backgroundSize: "200% 200%",
        }}
      >
        <div className="absolute inset-0 rounded-lg bg-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        whileHover={{
          boxShadow: "0 0 30px hsl(var(--neon-cyan))",
        }}
        className="relative z-10 h-full p-6 rounded-lg"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default GradientBorderCard;
