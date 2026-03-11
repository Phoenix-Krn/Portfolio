import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";
import { Mail, Zap, ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-primary/10 blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-secondary/10 blur-3xl"
          />

          {/* Content */}
          <div className="relative glass-card glow-border p-12 md:p-16 rounded-3xl text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-primary text-sm font-semibold">Let's Create Something Amazing</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Ready to <span className="gradient-text">collaborate</span>?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            >
              I'm actively looking for opportunities in Data Analytics, BI, and Software Development.
              Let's discuss how we can build something remarkable together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link to="/contact">
                <MagneticButton>
                  <Button
                    variant="neon"
                    size="lg"
                    className="gap-2 group"
                  >
                    <Mail className="w-4 h-4" />
                    Get In Touch
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Button>
                </MagneticButton>
              </Link>

              <motion.a
                href="mailto:kavyaravinaik2003@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="neonOutline"
                  size="lg"
                  className="gap-2"
                >
                  Email Me
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.a>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 border-t border-border/30"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Quick response times • Deadline-focused • Always learning
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium text-green-400">
                  Available for new opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
