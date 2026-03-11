import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Zap } from "lucide-react";

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showEgg, setShowEgg] = useState(false);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      setShowEgg(true);
      setTimeout(() => {
        setShowEgg(false);
        setClickCount(0);
      }, 5000);
    }
  };

  return (
    <>
      {/* Hidden trigger - click the logo 5 times */}
      <div
        onClick={handleClick}
        className="absolute top-0 left-0 w-1 h-1 opacity-0"
      />

      {showEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] pointer-events-none"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-card p-8 text-center glow-border"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mb-4 flex justify-center"
            >
              <Sparkles className="w-16 h-16 text-primary" />
            </motion.div>
            <h2 className="text-2xl font-bold gradient-text mb-2">
              You Found It! 🎉
            </h2>
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              <Code className="w-4 h-4" />
              Made with passion
              <Zap className="w-4 h-4 text-primary" />
            </p>
            <p className="text-sm text-primary mt-2">Keep exploring!</p>
          </motion.div>

          {/* Confetti effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 1 }}
                animate={{
                  y: [0, -200, -400],
                  x: Math.random() * 200 - 100,
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 3,
                  delay: Math.random() * 0.5,
                  repeat: Infinity,
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default EasterEgg;
