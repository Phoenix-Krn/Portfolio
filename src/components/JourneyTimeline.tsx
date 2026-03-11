import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { BookOpen, Zap, Award, Rocket, Target, Trophy } from "lucide-react";

interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  achievements: string[];
  color: string;
}

const JourneyTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const milestones: JourneyMilestone[] = [
  {
    year: "2021",
    phase: "Foundation",
    title: "Learning & Curiosity",
    description: "Started diving deep into engineering fundamentals",
    icon: <BookOpen className="w-6 h-6" />,
    achievements: [
      "Programming Basics",
      "Mathematics",
      "Hardware/Software Understanding"
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    year: "2022",
    phase: "Growth",
    title: "Understanding the Field & Going Deeper",
    description: "Started exploring more into the tech field",
    icon: <Zap className="w-6 h-6" />,
    achievements: [
      "Python in Depth",
      "OOP Concepts",
      "Certifications"
    ],
    color: "from-purple-500 to-pink-600",
  },
  {
    year: "2023",
    phase: "Growth",
    title: "Building Real-World Projects",
    description: "Created data dashboards and analysis tools. Earned certifications.",
    icon: <Zap className="w-6 h-6" />,
    achievements: [
      "Data Visualization",
      "Dashboard Creation",
      "2+ Certifications"
    ],
    color: "from-pink-500 to-red-500", 
  },
  {
    year: "2024",
    phase: "Innovation",
    title: "AI & Advanced Analytics",
    description: "Developed ML models, published research, and explored emerging tech",
    icon: <Rocket className="w-6 h-6" />,
    achievements: [
      "Research Publications",
      "AI Projects",
      "Patent Filing",
      "Advanced SQL Mastery",
      "4+ Certifications"
    ],
    color: "from-orange-500 to-rose-600",
  },
  {
    year: "2025+",
    phase: "Leadership",
    title: "Thought Leadership & Innovation",
    description: "Speaking and driving innovation in data-driven solutions",
    icon: <Target className="w-6 h-6" />,
    achievements: [
      "Industry Impact",
      "BFSI Domain Expertise",
      "Knowledge Sharing",
      "Innovation Focus"
    ],
    color: "from-yellow-500 to-orange-600",
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            My <span className="gradient-text">Growth Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From curious learner to professional—a continuous evolution of skills and innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated center line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
          />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                  className="absolute left-0 md:left-1/2 top-6 flex items-center justify-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white shadow-xl -translate-x-1/2`}>
                    {milestone.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className={`w-full md:w-5/12 pt-4 ${
                    index % 2 === 0 ? "md:ml-0" : "md:ml-auto"
                  }`}
                >
                  <div className="glass-card glow-border p-6 rounded-2xl h-full">
                    {/* Year and Phase */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${milestone.color} text-white`}>
                        {milestone.phase}
                      </span>
                      <span className="text-lg font-bold text-primary">{milestone.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Key Achievements
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {milestone.achievements.map((achievement) => (
                          <motion.span
                            key={achievement}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            whileHover={{ scale: 1.05 }}
                            className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${milestone.color} bg-opacity-20 border border-current text-foreground`}
                          >
                            {achievement}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Connector line for mobile */}
                    <div className="md:hidden absolute -left-14 top-16 w-12 h-0.5 bg-gradient-to-r from-border to-primary" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-block glass-card glow-border p-8 rounded-2xl max-w-2xl border-primary/50">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">The Journey Continues</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every project, publication, and certification is a stepping stone toward becoming a leader in data-driven innovation. I'm committed to continuous learning and making a meaningful impact in the tech industry.
              </p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 text-primary font-bold"
              >
                ✦ Always growing, always learning ✦
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
