import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = ({
  from,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(from);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < to) {
          return Math.min(prev + Math.ceil((to - from) / (duration * 60)), to);
        }
        return to;
      });
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [isVisible, to, duration, from]);

  return (
    <div ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {prefix}
        {count}
        {suffix}
      </motion.span>
    </div>
  );
};

export default AnimatedCounter;
