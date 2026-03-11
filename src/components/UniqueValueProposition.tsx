import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Zap, Database, Code, Brain, Lightbulb, Target } from "lucide-react";

interface UniqueValue {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  highlight: string;
}

const UniqueValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values: UniqueValue[] = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data-Driven Developer",
      description: "I don't just code—I analyze. Every solution is backed by data insights and metrics.",
      color: "from-cyan-500 to-blue-600",
      highlight: "Why it matters: Decisions based on data lead to better outcomes",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "End-to-End Problem Solver",
      description: "From Python scripts to interactive dashboards, I bridge analytics and user experience.",
      color: "from-purple-500 to-pink-600",
      highlight: "Why it matters: I understand the full pipeline, not just one piece",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & ML Enthusiast",
      description: "Exploring machine learning frontiers—from fraud detection to medical imaging AI.",
      color: "from-orange-500 to-red-600",
      highlight: "Why it matters: I stay ahead of emerging technologies",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation-Focused",
      description: "Published research, patent filings, and experimental projects showcase forward thinking.",
      color: "from-green-500 to-emerald-600",
      highlight: "Why it matters: I bring original ideas, not just implementations",
    },
  ];

  const skillIntersection = [
    { skill: "Data Analysis", level: 95 },
    { skill: "Python Development", level: 90 },
    { skill: "Business Intelligence", level: 88 },
    { skill: "Machine Learning", level: 85 },
    { skill: "Dashboard Design", level: 87 },
    { skill: "Financial Analytics (BFSI)", level: 86 },
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6"
          >
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">What Sets Me Apart</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            The Unique <span className="gradient-text">Intersection</span> of Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm not just a developer or analyst—I'm someone who bridges the gap between data insights and user-centric solutions.
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              {/* Animated glow background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />

              {/* Card */}
              <div className="relative glass-card p-6 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-4`}
                >
                  {value.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {value.description}
                </p>

                {/* Highlight callout */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="pt-4 border-t border-border/30"
                >
                  <p className="text-xs text-primary font-semibold italic">
                    {value.highlight}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Intersection Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card glow-border p-12 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            My <span className="gradient-text">Unique Skill Intersection</span>
          </h3>

          {/* Skill Intersection Diagram */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I exist at the unique intersection where <span className="text-cyan-400 font-semibold">Data Science</span> meets <span className="text-purple-400 font-semibold">Software Engineering</span> and <span className="text-pink-400 font-semibold">Business Intelligence</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This rare combination allows me to:
              </p>
              <ul className="space-y-3">
                {[
                  "Build AI models AND user-friendly dashboards",
                  "Understand business problems AND code elegant solutions",
                  "Transform raw data INTO actionable insights",
                  "Bridge the gap between analysts and engineers",
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-primary font-bold mt-1">✦</span>
                    <span className="text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Venn Diagram Style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-80"
            >
              <svg className="w-full h-full" viewBox="0 0 300 300">
                {/* Three overlapping circles */}

                {/* Data Science Circle */}
                <circle cx="100" cy="120" r="70" fill="hsl(180, 100%, 50%)" opacity="0.1" stroke="hsl(180, 100%, 50%)" strokeWidth="2" />
                <text x="80" y="80" className="fill-cyan-400 font-bold text-sm" textAnchor="middle">
                  Data
                </text>
                <text x="80" y="100" className="fill-cyan-400 font-bold text-sm" textAnchor="middle">
                  Science
                </text>

                {/* Software Engineering Circle */}
                <circle cx="200" cy="120" r="70" fill="hsl(300, 100%, 60%)" opacity="0.1" stroke="hsl(300, 100%, 60%)" strokeWidth="2" />
                <text x="220" y="80" className="fill-purple-400 font-bold text-sm" textAnchor="middle">
                  Software
                </text>
                <text x="220" y="100" className="fill-purple-400 font-bold text-sm" textAnchor="middle">
                  Engineering
                </text>

                {/* Business Intelligence Circle */}
                <circle cx="150" cy="200" r="70" fill="hsl(330, 100%, 65%)" opacity="0.1" stroke="hsl(330, 100%, 65%)" strokeWidth="2" />
                <text x="150" y="220" className="fill-pink-400 font-bold text-sm" textAnchor="middle">
                  Business
                </text>
                <text x="150" y="240" className="fill-pink-400 font-bold text-sm" textAnchor="middle">
                  Intelligence
                </text>

                {/* Center: You are here */}
                <circle cx="150" cy="140" r="35" fill="hsl(270, 100%, 65%)" opacity="0.2" stroke="hsl(270, 100%, 65%)" strokeWidth="2" strokeDasharray="5,5" />
                <text x="150" y="135" className="fill-foreground font-bold text-xs" textAnchor="middle">
                  YOU ARE
                </text>
                <text x="150" y="150" className="fill-foreground font-bold text-xs" textAnchor="middle">
                  HERE
                </text>
              </svg>
            </motion.div>
          </div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 pt-12 border-t border-border/30 space-y-6"
          >
            <h4 className="text-lg font-bold">Core Competencies at the Intersection:</h4>
            <div className="space-y-4">
              {skillIntersection.map((item, idx) => (
                <div key={item.skill} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-sm text-primary font-bold">{item.level}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.8 + idx * 0.1, ease: "easeOut" }}
                    className="h-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueValueProposition;
