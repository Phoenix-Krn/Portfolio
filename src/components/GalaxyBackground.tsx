import { motion } from "framer-motion";

const GalaxyBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Nebula clouds */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 -left-1/2 w-full h-full"
        style={{
          background: "radial-gradient(circle, rgba(138, 43, 226, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-1/2 -right-1/2 w-full h-full"
        style={{
          background: "radial-gradient(circle, rgba(75, 0, 130, 0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [-100, 100, -100],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96"
        style={{
          background: "radial-gradient(circle, rgba(123, 104, 238, 0.15) 0%, transparent 60%)",
          filter: "blur(70px)",
        }}
      />

      {/* Cosmic dust */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(138, 43, 226, 0.4), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(75, 0, 130, 0.3), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(123, 104, 238, 0.3), transparent)
          `,
          backgroundSize: "200px 200px, 300px 300px, 250px 250px, 280px 280px",
          backgroundPosition: "0 0, 40px 60px, 130px 270px, 70px 100px",
        }}
      />
    </div>
  );
};

export default GalaxyBackground;
