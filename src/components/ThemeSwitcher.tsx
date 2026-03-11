import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const themes = [
  {
    name: "Neon Cyber",
    primary: "180 100% 50%", // cyan
    secondary: "300 100% 60%", // magenta
    accent: "270 100% 65%", // purple
  },
  {
    name: "Galaxy Space",
    primary: "270 100% 65%", // purple
    secondary: "280 90% 60%", // violet
    accent: "250 100% 70%", // light purple
  },
  {
    name: "Ocean Breeze",
    primary: "200 100% 50%", // blue
    secondary: "180 100% 50%", // teal
    accent: "220 100% 60%", // deep blue
  },
  {
    name: "Sunset Glow",
    primary: "30 100% 50%", // orange
    secondary: "340 100% 60%", // pink
    accent: "10 100% 55%", // red-orange
  },
  {
    name: "Cosmic Dream",
    primary: "260 100% 70%", // bright purple
    secondary: "290 100% 65%", // pink-purple
    accent: "240 100% 75%", // blue-purple
  },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(0); // Start with Neon Cyber theme

  useEffect(() => {
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--secondary", theme.secondary);
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--neon-cyan", theme.primary);
    document.documentElement.style.setProperty("--neon-magenta", theme.secondary);
    document.documentElement.style.setProperty("--neon-purple", theme.accent);
  }, [currentTheme]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 glass-card p-4 rounded-xl min-w-[200px]"
          >
            <p className="text-xs font-medium text-muted-foreground mb-3">Choose Theme</p>
            <div className="space-y-2">
              {themes.map((theme, index) => (
                <motion.button
                  key={theme.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setCurrentTheme(index);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    currentTheme === index
                      ? "bg-primary/20 border border-primary/40"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="flex gap-1">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: `hsl(${theme.primary})` }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: `hsl(${theme.secondary})` }}
                    />
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: `hsl(${theme.accent})` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{theme.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full glow-border flex items-center justify-center bg-card/80 backdrop-blur-xl"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Palette className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
