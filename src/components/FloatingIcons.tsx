import { motion } from "framer-motion";
import { Database, Brain, LineChart, Cloud, Code2, Cpu } from "lucide-react";

const icons = [
  { Icon: Database, x: "10%", y: "20%", delay: 0 },
  { Icon: Brain, x: "80%", y: "30%", delay: 0.5 },
  { Icon: LineChart, x: "15%", y: "70%", delay: 1 },
  { Icon: Cloud, x: "85%", y: "75%", delay: 1.5 },
  { Icon: Code2, x: "50%", y: "15%", delay: 2 },
  { Icon: Cpu, x: "45%", y: "85%", delay: 2.5 },
];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      {icons.map(({ Icon, x, y, delay }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: x,
            top: y,
          }}
        >
          <Icon className="w-12 h-12 text-primary" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
