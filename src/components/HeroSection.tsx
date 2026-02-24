import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram, ArrowDown, Folder, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from "./TypewriterText";
import FloatingParticles from "./FloatingParticles";

const skills = [
  "Python",
  "HTML & CSS",
  "SQL",
  "Analytics",
  "Data Visualization"
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Phoenix-Krn", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kavyaravinaik", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kavyaravinaik2003@gmail.com", label: "Email" },
];

const stats = [
  { value: "", label: "" },
  { value: "", label: "" },
];

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <FloatingParticles />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-24 h-24 rounded-2xl glow-border flex items-center justify-center font-mono text-2xl font-bold gradient-text"
            >
              {"<YN/>"}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text"
            >
              Kavya R Naik 
            </motion.h1>

            {/* Typewriter Title */}
            <div className="flex items-center gap-2 font-mono text-lg text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <TypewriterText
                texts={["Python Developer", "BI Analyst", "Team player", "Enthusiast"]}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
            I am a passionate Computer Science and Engineering student with a strong interest in Data Science, AI, Analytics, and Software Development. 
            I enjoy creating innovative solutions that enhance user experiences, improve processes, and deliver meaningful business insights.

            </motion.p>

            {/* Skill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  className={index % 2 === 0 ? "neon-badge" : "neon-badge-magenta"}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={scrollToProjects}
                variant="neon"
                size="lg"
                className="gap-2"
              >
                <Folder className="w-4 h-4" />
                View Projects
              </Button>
              <Button
                onClick={scrollToContact}
                variant="neonOutline"
                size="lg"
                className="gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex gap-4 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="glass-card px-6 py-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Sphere/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse" />
              
              {/* Main sphere */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-primary/30"
                style={{
                  background: "radial-gradient(circle at 30% 30%, hsl(var(--neon-cyan) / 0.1), transparent 60%)",
                  boxShadow: "0 0 60px hsl(var(--neon-cyan) / 0.3), inset 0 0 60px hsl(var(--neon-magenta) / 0.1)",
                }}
              >
                {/* Grid lines */}
                <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                      style={{ top: `${20 + i * 12}%` }}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute h-full w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent"
                      style={{ left: `${12.5 * (i + 1)}%` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Orbital ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-secondary/20"
                style={{ transform: "rotateX(60deg)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
