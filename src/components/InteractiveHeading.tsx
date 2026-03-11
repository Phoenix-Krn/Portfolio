import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InteractiveHeadingProps {
  children: ReactNode;
  className?: string;
  underlineColor?: string;
}

const InteractiveHeading = ({ 
  children, 
  className = "",
  underlineColor = "from-primary to-secondary"
}: InteractiveHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <div className="relative inline-block">
        {children}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${underlineColor} rounded-full`}
          style={{ 
            boxShadow: "0 0 20px currentColor",
            filter: "drop-shadow(0 0 10px hsl(var(--neon-cyan)))"
          }}
        />
      </div>
    </motion.div>
  );
};

export default InteractiveHeading;
