import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="relative h-32 overflow-hidden">
      {/* Animated SVG Wave */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Main Wave */}
        <motion.path
          d="M 0,60 Q 300,20 600,60 T 1200,60 L 1200,120 L 0,120 Z"
          fill="url(#waveGradient)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Secondary Wave */}
        <motion.path
          d="M 0,80 Q 300,40 600,80 T 1200,80 L 1200,120 L 0,120 Z"
          fill="url(#waveGradient2)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute size-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
          initial={{
            x: Math.random() * 1200,
            y: 60 + Math.random() * 40,
            opacity: 0,
          }}
          animate={{
            y: [60 + Math.random() * 40, 20, 60 + Math.random() * 40],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default SectionDivider;
