import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LetterRevealProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: "slide" | "fade" | "bounce" | "flip";
}

const LetterReveal = ({
  text,
  className = "",
  delay = 0,
  variant = "slide",
}: LetterRevealProps) => {
  const variants = {
    slide: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    bounce: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
  };

  return (
    <motion.div className={`flex flex-wrap gap-1 ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants[variant]}
          transition={{
            delay: delay + index * 0.05,
            duration: 0.5,
          }}
          style={{
            display: char === " " ? "inline-block" : "inline",
            width: char === " " ? "0.25em" : "auto",
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LetterReveal;
