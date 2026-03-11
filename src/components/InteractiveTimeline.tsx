import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  index: number;
}

export const TimelineItem = ({ date, title, description, icon, index }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-8 mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white z-10 border-2 border-background"
          style={{
            boxShadow: "0 0 20px hsl(var(--neon-cyan))",
          }}
        >
          {icon}
        </motion.div>
        {index < 2 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            className="w-1 bg-gradient-to-b from-primary to-transparent my-2"
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex-1 pt-2"
      >
        <div className="group">
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
            {date}
          </p>
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
            {title}
          </h3>
          <div className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
            {description}
          </div>
          
          {/* Hover underline */}
          <motion.div
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

interface InteractiveTimelineProps {
  items: Omit<TimelineItemProps, "index">[];
}

const InteractiveTimeline = ({ items }: InteractiveTimelineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </motion.div>
  );
};

export default InteractiveTimeline;
