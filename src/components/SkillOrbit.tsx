import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillOrbitProps {
  center: ReactNode;
  skills: Array<{ label: string; icon: ReactNode }>;
  radius?: number;
}

const SkillOrbit = ({ center, skills, radius = 150 }: SkillOrbitProps) => {
  const angleSlice = (Math.PI * 2) / skills.length;

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Center */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="absolute z-20 flex items-center justify-center"
      >
        {center}
      </motion.div>

      {/* Orbit circle */}
      <svg className="absolute w-full h-full">
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="hsl(var(--neon-cyan))"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Orbiting skills */}
      {skills.map((skill, index) => {
        const angle = index * angleSlice;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              rotate: 360,
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: { duration: 0.6, delay: index * 0.1 },
            }}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              originX: radius,
              originY: 0,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white"
                style={{
                  boxShadow: "0 0 15px hsl(var(--neon-cyan))",
                }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-xs font-semibold text-center">{skill.label}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillOrbit;
