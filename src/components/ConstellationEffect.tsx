import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Constellation {
  stars: { x: number; y: number }[];
  lines: { from: number; to: number }[];
}

const ConstellationEffect = () => {
  const [constellation] = useState<Constellation>({
    stars: [
      { x: 20, y: 30 },
      { x: 25, y: 35 },
      { x: 30, y: 32 },
      { x: 22, y: 40 },
      { x: 28, y: 42 },
    ],
    lines: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 3, to: 4 },
      { from: 2, to: 4 },
    ],
  });

  const [constellation2] = useState<Constellation>({
    stars: [
      { x: 70, y: 60 },
      { x: 75, y: 55 },
      { x: 80, y: 60 },
      { x: 75, y: 65 },
      { x: 72, y: 68 },
      { x: 78, y: 68 },
    ],
    lines: [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 0 },
      { from: 3, to: 4 },
      { from: 3, to: 5 },
    ],
  });

  const renderConstellation = (constellation: Constellation, key: string) => (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
      key={key}
    >
      {/* Lines */}
      {constellation.lines.map((line, index) => (
        <motion.line
          key={`line-${key}-${index}`}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: index * 0.2 }}
          x1={`${constellation.stars[line.from].x}%`}
          y1={`${constellation.stars[line.from].y}%`}
          x2={`${constellation.stars[line.to].x}%`}
          y2={`${constellation.stars[line.to].y}%`}
          stroke="rgba(138, 43, 226, 0.4)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {renderConstellation(constellation, "const1")}
      {renderConstellation(constellation2, "const2")}

      {/* Stars */}
      {constellation.stars.map((star, index) => (
        <motion.div
          key={`star1-${index}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            delay: index * 0.2,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "rgba(138, 43, 226, 0.8)",
            boxShadow: "0 0 10px rgba(138, 43, 226, 0.6)",
          }}
        />
      ))}

      {constellation2.stars.map((star, index) => (
        <motion.div
          key={`star2-${index}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            delay: index * 0.2 + 0.5,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            backgroundColor: "rgba(123, 104, 238, 0.8)",
            boxShadow: "0 0 10px rgba(123, 104, 238, 0.6)",
          }}
        />
      ))}
    </div>
  );
};

export default ConstellationEffect;
