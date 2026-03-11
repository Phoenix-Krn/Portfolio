import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SpaceDebris = () => {
  const [debris, setDebris] = useState<Array<{ id: number; x: number; y: number; rotation: number; size: number }>>([]);

  useEffect(() => {
    const newDebris = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      size: 3 + Math.random() * 8,
    }));
    setDebris(newDebris);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {debris.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            x: `${item.x}%`,
            y: `${item.y}%`,
            rotate: item.rotation,
            opacity: 0.1,
          }}
          animate={{
            x: `${item.x + 10}%`,
            y: `${item.y + 10}%`,
            rotate: item.rotation + 360,
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(168, 85, 247, 0.2))",
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SpaceDebris;
