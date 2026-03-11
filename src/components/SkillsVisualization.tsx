import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const skills: Skill[] = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "SQL", level: 80, category: "Database" },
  { name: "HTML", level: 75, category: "Languages" },
  { name: "Data Analysis", level: 90, category: "Analytics" },
  { name: "Data Visualization", level: 88, category: "Tools" },
  { name: "Machine Learning", level: 80, category: "AI/ML" },
  { name: "Pandas", level: 85, category: "Libraries" },
  { name: "Matplotlib & Seaborn", level: 85, category: "Visualization" },
  { name: "Dash & Plotly", level: 80, category: "Dashboard" },
  { name: "Excel", level: 85, category: "Tools" },
  { name: "BFSI Domain", level: 68, category: "Finance" },
  { name: "PowerPoint", level: 90, category: "Tools" },
];

const SkillsVisualization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">{skill.name}</span>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-secondary relative"
            >
              <motion.div
                animate={{ x: [-20, 120] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          </div>
          <span className="text-xs text-muted-foreground mt-1 block">{skill.category}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsVisualization;
