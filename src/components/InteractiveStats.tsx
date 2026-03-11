import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, GitBranch, Award, Coffee } from "lucide-react";

interface Stat {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const stats: Stat[] = [
  { icon: Code, value: 8, label: "Projects Completed", suffix: "+", color: "primary" },
  { icon: GitBranch, value: 30, label: "GitHub Commits", suffix: "+", color: "secondary" },
  { icon: Award, value: 15, label: "Certifications", suffix: "", color: "accent" },
];

const InteractiveStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 30);
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotateY: 10 }}
          className="glass-card p-6 text-center relative overflow-hidden group"
        >
          {/* Background glow */}
          <div className={`absolute inset-0 bg-${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity`} />
          
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="flex justify-center mb-3"
          >
            <stat.icon className={`w-8 h-8 text-${stat.color}`} />
          </motion.div>

          {/* Counter */}
          <motion.div
            className={`text-3xl font-bold gradient-text mb-2`}
          >
            {counters[index]}
            {stat.suffix}
          </motion.div>

          {/* Label */}
          <p className="text-xs text-muted-foreground">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveStats;
