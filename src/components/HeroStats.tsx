import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  animateValue?: boolean;
}

const HeroStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState({ projects: 0, certifications: 0, github: 0 });

  useEffect(() => {
    if (!isInView) return;

    const targets = { projects: 5, certifications: 15, github: 30 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        projects: Math.floor(targets.projects * progress),
        certifications: Math.floor(targets.certifications * progress),
        github: Math.floor(targets.github * progress),
      });

      if (step >= steps) clearInterval(interval);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView]);

  const stats: StatItem[] = [
    { label: "Projects", value: String(counts.projects), suffix: "+" },
    { label: "Certifications", value: String(counts.certifications), suffix: "+" },
    { label: "Publications", value: "3" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid grid-cols-3 gap-4 md:gap-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          className="relative group"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Card */}
          <div className="relative glass-card p-4 md:p-6 rounded-xl backdrop-blur-md border border-border/50 group-hover:border-primary/50 transition-all duration-300">
            {/* Number */}
            <div className="flex items-baseline gap-1 mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-2xl md:text-4xl font-bold gradient-text"
              >
                {stat.value}
              </motion.span>
              {stat.suffix && (
                <span className="text-lg md:text-2xl text-primary font-bold">{stat.suffix}</span>
              )}
            </div>

            {/* Label */}
            <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">
              {stat.label}
            </p>

            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent mt-3"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
