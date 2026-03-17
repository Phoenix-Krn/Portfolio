import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Globe, GraduationCap, Gamepad, MapPin, Mail } from "lucide-react";
import SkillsVisualization from "./SkillsVisualization";
import InteractiveStats from "./InteractiveStats";

const skills = [
  "Python", "SQL", "HTML", "Pandas", "Matplotlib", "Seaborn",
  "Data Analysis", "Excel", "PowerPoint", "Visualization", 
  "Machine Learning", "BFSI", "Dash", "Plotly", "Banking"
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better through my personal journey, skills, and passion for technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card glow-border p-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl font-bold gradient-text border border-primary/30 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
                    alt="KRN - Kavya R Naik"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-500 border-4 border-card" />
              </motion.div>

              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-1">Kavya R Naik</h3>
                <p className="text-muted-foreground mb-3">CSE Graduate • Data Analysis</p>
                <div className="flex gap-2 justify-center sm:justify-start">
                  <motion.a
                    href="https://github.com/Phoenix-Krn"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/kavyaravinaik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className={index % 2 === 0 ? "neon-badge" : "neon-badge-magenta"}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-primary">Open to opportunities</span>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Bio */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-3 gradient-text">Professional Summary</h4>
              <p className="text-muted-foreground leading-relaxed">
                Results-oriented Computer Science Engineering graduate from HKBK College with strong expertise in Python, data analysis, AI, and visualization. 
                Experienced in BFSI domain fundamentals including banking, financial services, and insurance.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Proficient in dashboard development using Dash and Plotly, real-world project implementation, research publications, and patent filing with IPI. 
                Adept at problem-solving, teamwork, and continuous learning with focus on data-driven decision-making.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <div className="flex items-center gap-2 text-primary mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-sm font-medium">Education</span>
                </div>
                <p className="text-sm text-muted-foreground">B.E(Hons). CSE (HKBK)</p>
                <p className="text-xs text-muted-foreground">CGPA: 8.68</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <div className="flex items-center gap-2 text-secondary mb-2">
                  <Gamepad className="w-5 h-5" />
                  <span className="text-sm font-medium">BFSI Focus</span>
                </div>
                <p className="text-sm text-muted-foreground">Banking, Finance, Insurance</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <div className="flex items-center gap-2 text-accent mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </div>
                <p className="text-sm text-muted-foreground">kavyaravinaik2003@gmail.com</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <div className="flex items-center gap-2 text-neon-pink mb-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-sm text-muted-foreground">Bengaluru, India</p>
              </motion.div>
            </div>

            {/* Skills Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6"
            >
              <h4 className="text-lg font-semibold mb-6 gradient-text">Technical Proficiency</h4>
              <SkillsVisualization />
            </motion.div>

            {/* Interactive Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <InteractiveStats />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
