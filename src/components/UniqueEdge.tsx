import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, Users, Zap, TrendingUp } from "lucide-react";

const UniqueEdge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const principles = [
    {
      title: "Data Tells Stories",
      description:
        "I believe every dataset has a narrative waiting to be discovered. My role is to uncover insights that drive real business impact.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Bridge the Gap",
      description:
        "I speak both 'data' and 'code'. This rare combination allows me to communicate between analysts, engineers, and stakeholders.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Innovation First",
      description:
        "I don't just maintain—I innovate. Whether it's publishing research or filing patents, I'm driven by the desire to push boundaries.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Impact Over Output",
      description:
        "I measure success not by lines of code, but by real-world impact. Does this solution solve a genuine problem?",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const whyMe = [
    "I don't just complete tasks—I understand the 'why' behind them",
    "I'm equally comfortable in spreadsheets and on GitHub",
    "My BFSI domain expertise sets me apart in financial analytics",
    "I've shipped real AI/ML models, not just thought experiments",
    "I contribute to open knowledge through publications",
    "I adapt quickly and am always learning the next technology",
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
            My <span className="gradient-text">Unique Edge</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What makes me different isn't just what I know—it's how I think and deliver
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              {/* Card */}
              <div className="relative glass-card p-8 rounded-2xl border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-primary mb-4"
                >
                  {principle.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>

                {/* Animated bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="h-0.5 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Why Choose <span className="gradient-text">Me</span>?
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In a sea of developers and analysts, here's what makes the difference:
              </p>
            </div>

            <div className="space-y-3">
              {whyMe.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  {/* Animated check */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.55 + index * 0.08 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>

                  <p className="text-foreground leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Rotating container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative w-96 h-96 mx-auto"
            >
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
              <div className="absolute inset-8 rounded-full border border-secondary/20" />
              <div className="absolute inset-16 rounded-full border border-accent/20" />

              {/* Center circle */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="glass-card glow-border w-48 h-48 rounded-full flex flex-col items-center justify-center p-6 text-center">
                  <Sparkles className="w-10 h-10 text-primary mb-3" />
                  <h4 className="font-bold text-lg mb-2">Unique Blend</h4>
                  <p className="text-sm text-muted-foreground">
                    Data + Code + Innovation + Impact
                  </p>
                </div>
              </motion.div>

              {/* Floating skill badges around the circle */}
              {["Python", "Analytics", "AI/ML", "Dashboard", "BI Tools", "Leadership"].map(
                (skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="absolute w-16 h-16 rounded-full glass-card border border-primary/40 flex items-center justify-center text-xs font-semibold text-center px-2"
                    style={{
                      top: `${50 + 35 * Math.cos((index / 6) * 2 * Math.PI - Math.PI / 2)}%`,
                      left: `${50 + 35 * Math.sin((index / 6) * 2 * Math.PI - Math.PI / 2)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {skill}
                  </motion.div>
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">
            Not looking for just another developer—ready for someone who <span className="text-primary font-semibold">truly understands</span> your needs.
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary font-bold text-xl"
          >
            Let's build something remarkable together 🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UniqueEdge;
