import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowDown, Folder, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";
import ResumeDownload from "./ResumeDownload";
import HeroStats from "./HeroStats";

const skills = [
  "Python",
  "SQL",
  "Data Analysis",
  "Visualization",
  "Machine Learning",
  "BFSI Domain"
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Phoenix-Krn", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/kavyaravinaik", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kavyaravinaik2003@gmail.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
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
              {"KRN"}
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-20"
            >
              <span className="gradient-text">Kavya R Naik</span>
            </motion.h1>

            {/* Typewriter Title */}
            <div className="flex items-center gap-2 font-mono text-lg text-muted-foreground">
              <span className="text-primary">{">"}</span>
              <TypewriterText
                texts={["Data Analyst", "BFSI Expert", "AI Enthusiast", "Problem Solver"]}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-muted-foreground text-lg max-w-xl leading-relaxed"
            >
              A Computer Science Engineering graduate with strong expertise in Python, data analysis, AI, and visualization. 
              Experienced in BFSI domain, dashboard development and research publications. Seeking entry-level role in BFSI Analytics / Data Analyst to drive data-driven decision-making.
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

            {/* Hero Stats */}
            <HeroStats />

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <ResumeDownload variant="neon" />
              <Link to="/projects">
                <MagneticButton>
                  <Button
                    variant="neon"
                    size="lg"
                    className="gap-2"
                  >
                    <Folder className="w-4 h-4" />
                    View Projects
                  </Button>
                </MagneticButton>
              </Link>
              <Link to="/contact">
                <MagneticButton>
                  <Button
                    variant="neonOutline"
                    size="lg"
                    className="gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact Me
                  </Button>
                </MagneticButton>
              </Link>
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
              {/* Add stats data here when available */}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-80 h-80 rounded-2xl overflow-hidden glow-border bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-pulse" />
              
              {/* Profile Image */}
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
                alt="KRN - Kavya R Naik"
                className="w-full h-full object-cover relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link to="/about">
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
