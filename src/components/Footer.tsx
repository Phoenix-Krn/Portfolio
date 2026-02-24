import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="gradient-text">{"</>"}</span>
            <span className="text-muted-foreground">Kavya R Naik</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            <span>in {currentYear}</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <span>© {currentYear} All rights reserved</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
