import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const skillsData = [
  { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
  { name: "SQL", level: 85, color: "from-cyan-500 to-cyan-600" },
  { name: "Data Analysis", level: 95, color: "from-purple-500 to-purple-600" },
  { name: "BI Tools", level: 88, color: "from-pink-500 to-pink-600" },
  { name: "Web Development", level: 80, color: "from-green-500 to-green-600" },
  { name: "Machine Learning", level: 85, color: "from-orange-500 to-orange-600" },
];

const SkillOrbitVisualization = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficiency in core technologies and tools
          </p>
        </motion.div>

        {/* Skills Grid with animated bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              {/* Skill Name and Level */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-sm font-bold text-primary"
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Skill Bar Background */}
              <div className="relative h-3 rounded-full bg-card overflow-hidden border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                {/* Animated gradient bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                />

                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={isInView ? { x: "100%" } : {}}
                  transition={{ duration: 2, delay: 0.5 + index * 0.1, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                />
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl"
                style={{
                  background: `linear-gradient(90deg, var(--tw-gradient-stops))`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-border/30"
        >
          <h3 className="text-lg font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Excel",
              "Tableau",
              "AWS",
              "MongoDB",
              "Blockchain",
              "Powerpoint",
              "Reporting",
              "Data Analytics",
              "Cloud Computing",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 rounded-full glass-card border border-primary/30 text-sm font-medium hover:border-primary/60 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillOrbitVisualization;
