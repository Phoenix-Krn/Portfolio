import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxStars = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Different layers move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const stars1 = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random(),
  }));

  const stars2 = Array.from({ length: 20 }, (_, i) => ({
    id: i + 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 1.5,
  }));

  const stars3 = Array.from({ length: 15 }, (_, i) => ({
    id: i + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 2,
  }));

  return (
    <div ref={ref} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Layer 1 - Slowest */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {stars1.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Medium */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {stars2.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              boxShadow: "0 0 4px rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Fastest */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {stars3.map((star) => (
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.7)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxStars;
