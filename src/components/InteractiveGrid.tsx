import { motion } from "framer-motion";
import { useRef } from "react";

interface InteractiveGridProps {
  items: Array<{ id: string | number; content: React.ReactNode }>;
  cols?: number;
}

const InteractiveGrid = ({ items, cols = 3 }: InteractiveGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className={`grid gap-4 grid-cols-1 md:grid-cols-${cols} lg:grid-cols-${cols}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            y: -10,
            boxShadow: "0 20px 40px hsl(var(--neon-cyan) / 0.3)",
          }}
          className="relative group rounded-lg overflow-hidden bg-card border border-primary/20 p-6 cursor-pointer"
        >
          {/* Hover glow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 pointer-events-none"
          />

          {/* Content */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {item.content}
          </motion.div>

          {/* Corner accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-transparent rounded-bl-full pointer-events-none"
            style={{ filter: "blur(10px)" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InteractiveGrid;
