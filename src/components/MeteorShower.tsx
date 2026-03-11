import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Meteor {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const MeteorShower = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const createMeteor = () => {
      const newMeteor: Meteor = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 1 + Math.random() * 1.5,
        delay: Math.random() * 2,
      };
      
      setMeteors((prev) => [...prev.slice(-10), newMeteor]);
    };

    const interval = setInterval(createMeteor, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{
            x: `${meteor.x}%`,
            y: "-10%",
            opacity: 0,
          }}
          animate={{
            x: `${meteor.x + 20}%`,
            y: "110%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: `${meteor.size}px`,
            height: "100px",
            background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent)",
            transform: "rotate(45deg)",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;
