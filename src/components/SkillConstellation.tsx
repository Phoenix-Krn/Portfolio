import { motion } from "framer-motion";

interface SkillConstellationProps {
  skills: Array<{ name: string; level: number }>;
}

const SkillConstellation = ({ skills }: SkillConstellationProps) => {
  return (
    <div className="relative w-full h-96">
      <svg className="absolute inset-0 w-full h-full">
        {/* Connect skills with lines */}
        {skills.map((skill, i) => {
          const x1 = ((i % 3) + 1) * (100 / 4);
          const y1 = Math.floor(i / 3) * (100 / 2) + 25;
          const x2 = (((i + 1) % 3) + 1) * (100 / 4);
          const y2 = Math.floor((i + 1) / 3) * (100 / 2) + 25;

          return (
            <motion.line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="hsl(var(--neon-cyan))"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Skill nodes */}
      <div className="relative w-full h-full">
        {skills.map((skill, i) => {
          const x = ((i % 3) + 1) * (100 / 4);
          const y = Math.floor(i / 3) * (100 / 2) + 25;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              transition={{ delay: i * 0.1 }}
              className="absolute flex flex-col items-center gap-2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {/* Node */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px hsl(var(--neon-cyan))",
                    "0 0 20px hsl(var(--neon-cyan))",
                    "0 0 10px hsl(var(--neon-cyan))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm"
              >
                {skill.level}%
              </motion.div>

              {/* Label */}
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-xs font-semibold text-center text-primary whitespace-nowrap"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillConstellation;
