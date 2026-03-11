import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const AnimatedProgressBar = ({ 
  label, 
  percentage, 
  color = "from-primary to-secondary",
  delay = 0
}: AnimatedProgressBarProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3 }}
          className="text-xs font-semibold text-primary"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="relative h-2.5 bg-muted rounded-full overflow-hidden border border-border/50">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : {}}
          transition={{ 
            delay: delay + 0.2,
            duration: 1.5, 
            ease: "easeOut"
          }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          style={{
            boxShadow: `0 0 20px hsl(var(--neon-cyan))`,
          }}
        >
          {/* Animated shimmer effect */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
