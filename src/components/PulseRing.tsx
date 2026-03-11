import { motion } from "framer-motion";

interface PulseRingProps {
  delay?: number;
  size?: number;
  color?: string;
}

const PulseRing = ({
  delay = 0,
  size = 100,
  color = "hsl(var(--neon-cyan))",
}: PulseRingProps) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay }}
        className="absolute w-3 h-3 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />

      {/* Rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{
            scale: [1, 1.5 + ring * 0.5],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            delay: delay + ring * 0.3,
            repeat: Infinity,
          }}
          className="absolute rounded-full border-2"
          style={{
            width: size,
            height: size,
            borderColor: color,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default PulseRing;
