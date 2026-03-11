import { motion } from "framer-motion";

const BlackHole = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none opacity-30">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative w-96 h-96"
      >
        {/* Event horizon */}
        <div className="absolute inset-0 rounded-full bg-black" style={{
          boxShadow: `
            inset 0 0 50px rgba(138, 43, 226, 0.4),
            inset 0 0 100px rgba(75, 0, 130, 0.3),
            0 0 100px rgba(138, 43, 226, 0.3),
            0 0 200px rgba(75, 0, 130, 0.2)
          `
        }} />

        {/* Accretion disk */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(
                  ellipse at center,
                  transparent 30%,
                  rgba(138, 43, 226, 0.3) 40%,
                  rgba(147, 51, 234, 0.4) 50%,
                  rgba(168, 85, 247, 0.3) 60%,
                  transparent 70%
                )
              `,
              transform: "rotateX(75deg)",
            }}
          />
        </motion.div>

        {/* Gravitational lensing rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute inset-0 rounded-full"
            style={{
              border: `${2 - i * 0.5}px solid rgba(138, 43, 226, ${0.2 - i * 0.05})`,
              transform: `scale(${1 + i * 0.15})`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BlackHole;
