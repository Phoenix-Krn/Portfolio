import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Rocket } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRocket, setIsRocket] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsRocket(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => setIsRocket(false), 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full glow-border bg-card/80 backdrop-blur-xl flex items-center justify-center hover:bg-primary/20 transition-colors group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={
              isRocket
                ? { y: -100, opacity: 0 }
                : { y: 0, opacity: 1 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {isRocket ? (
              <Rocket className="w-6 h-6 text-primary" />
            ) : (
              <ArrowUp className="w-6 h-6 text-primary group-hover:animate-bounce" />
            )}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
