import { motion } from "framer-motion";

interface CosmicOrbProps {
  size?: number;
  color?: string;
  delay?: number;
}

const CosmicOrb = ({ 
  size = 100, 
  color = "rgba(138, 43, 226, 0.3)", 
  delay = 0 
}: CosmicOrbProps) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      className="absolute rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, ${color}, transparent)`,
        filter: "blur(30px)",
      }}
    />
  );
};

const CosmicOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <CosmicOrb size={200} color="rgba(138, 43, 226, 0.2)" delay={0} />
      <div className="absolute top-1/4 right-1/4">
        <CosmicOrb size={150} color="rgba(75, 0, 130, 0.25)" delay={2} />
      </div>
      <div className="absolute bottom-1/3 left-1/3">
        <CosmicOrb size={180} color="rgba(123, 104, 238, 0.2)" delay={4} />
      </div>
      <div className="absolute top-1/2 left-1/4">
        <CosmicOrb size={120} color="rgba(147, 51, 234, 0.3)" delay={1} />
      </div>
      <div className="absolute bottom-1/4 right-1/3">
        <CosmicOrb size={160} color="rgba(168, 85, 247, 0.2)" delay={3} />
      </div>
    </div>
  );
};

export default CosmicOrbs;
