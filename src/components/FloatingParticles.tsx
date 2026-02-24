import { motion } from "framer-motion";

// Generate a set of particles with varied sizes, positions, delays, and durations
const particles = [
  { size: 6, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 8, x: "80%", y: "15%", delay: 1, duration: 7 },
  { size: 5, x: "60%", y: "70%", delay: 2, duration: 5 },
  { size: 7, x: "25%", y: "60%", delay: 0.5, duration: 8 },
  { size: 6, x: "90%", y: "50%", delay: 1.5, duration: 6 },
  { size: 5, x: "40%", y: "85%", delay: 2.5, duration: 7 },
  { size: 7, x: "70%", y: "30%", delay: 0.8, duration: 5 },
  { size: 6, x: "15%", y: "80%", delay: 1.8, duration: 6 },
  { size: 8, x: "55%", y: "10%", delay: 2.2, duration: 8 },
  { size: 5, x: "85%", y: "75%", delay: 0.3, duration: 7 },
  
  { size: 4, x: "43%", y: "26%", delay: 0.6, duration: 8 },
  { size: 6, x: "26%", y: "86%", delay: 1.8, duration: 6 },
  { size: 2, x: "78%", y: "96%", delay: 1.9, duration: 7 },
  { size: 7, x: "49%", y: "56%", delay: 2.8, duration: 5 },
  { size: 6, x: "96%", y: "26%", delay: 2.5, duration: 6 },
  { size: 9, x: "86%", y: "12%", delay: 1.5, duration: 8 },
];

const colors = [
  "hsl(180, 100%, 60%)", // neon cyan
  "hsl(300, 100%, 65%)", // neon magenta
  "hsl(60, 100%, 60%)",  // neon yellow
  "hsl(200, 100%, 70%)", // neon blue
  "hsl(120, 100%, 55%)", // neon green
];

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => {
        const color = colors[index % colors.length];
        return (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: particle.size * 4, // scale up for visibility
              height: particle.size * 4,
              left: particle.x,
              top: particle.y,
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              filter: `blur(2px) drop-shadow(0 0 10px ${color})`,
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -30, 10, 0],
              rotate: [0, 45, -45, 0],
              scale: [1, 1.3, 0.9, 1],
              opacity: [0.2, 0.8, 0.4],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;