import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

const ScrollRevealText = ({ 
  text, 
  className = "",
  delay = 0,
  stagger = 0.02
}: ScrollRevealTextProps) => {
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
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-1 ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            delay: delay + index * stagger,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default ScrollRevealText;
