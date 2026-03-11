import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface Card3DFlipProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

const Card3DFlip = ({ front, back, className = "" }: Card3DFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className={`relative w-full aspect-video cursor-pointer perspective ${className}`}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {/* Front */}
        <motion.div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-card border border-primary/30 rounded-lg p-6 flex flex-col justify-center items-center"
        >
          {front}
        </motion.div>

        {/* Back */}
        <motion.div
          initial={{ rotateY: 180 }}
          style={{ backfaceVisibility: "hidden" }}
          className="absolute w-full h-full bg-card border border-secondary/30 rounded-lg p-6 flex flex-col justify-center items-center"
        >
          {back}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card3DFlip;
