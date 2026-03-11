import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Award, Zap, Target, Lightbulb } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const AchievementsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements: Achievement[] = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "6+ certifications from industry leaders",
      color: "text-yellow-400",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Python Developer",
      description: "Python, SQL, Analytics & Web Development",
      color: "text-cyan-400",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data Specialist",
      description: "Profeciency in BI, Data Analytics & Visualization",
      color: "text-magenta-400",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovator",
      description: "Blockchain & AI-powered solutions",
      color: "text-purple-400",
    },
  ];

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
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestone moments that define my professional journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Animated background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              {/* Card */}
              <div className="relative glass-card p-8 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 ${achievement.color} group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300`}
                >
                  {achievement.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow">
                  {achievement.description}
                </p>

                {/* Animated bottom line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent mt-4"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsShowcase;
