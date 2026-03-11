import { motion } from "framer-motion";

const AnimatedBlob = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Cyan */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
        style={{
          background: "hsl(var(--neon-cyan) / 0.15)",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 2 - Magenta */}
      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full"
        style={{
          background: "hsl(var(--neon-magenta) / 0.15)",
          filter: "blur(80px)",
        }}
      />

      {/* Blob 3 - Purple */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full"
        style={{
          background: "hsl(var(--neon-purple) / 0.1)",
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default AnimatedBlob;
