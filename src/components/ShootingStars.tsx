import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  delay: number;
}

const ShootingStars = () => {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    const createShootingStar = () => {
      const newStar: ShootingStar = {
        id: Date.now(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        delay: 0,
      };
      setShootingStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, 2000);
    };

    const interval = setInterval(createShootingStar, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            x: `${star.startX}%`,
            y: `${star.startY}%`,
            opacity: 0,
          }}
          animate={{
            x: `${star.startX + 30}%`,
            y: `${star.startY + 30}%`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute"
        >
          <div className="relative">
            {/* Star head */}
            <div className="w-2 h-2 rounded-full bg-white" />
            {/* Star tail */}
            <motion.div
              className="absolute top-1 -left-16 w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-white opacity-70"
              style={{ transform: "rotate(-45deg)", transformOrigin: "right" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShootingStars;
