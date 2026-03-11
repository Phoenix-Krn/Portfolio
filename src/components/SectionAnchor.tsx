import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SectionAnchorProps {
  id: string;
  children: React.ReactNode;
}

const SectionAnchor: React.FC<SectionAnchorProps> = ({ id, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update URL hash without navigation
            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      data-section={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, margin: "-100px" }}
      className="scroll-mt-20"
    >
      {children}
    </motion.section>
  );
};

export default SectionAnchor;
