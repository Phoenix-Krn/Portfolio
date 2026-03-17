import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";
import SpotlightCard from "./SpotlightCard";

interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  highlight: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    title: "Real Time Transaction Monitoring Dashboard",
    description: "Intelligent fraud detection system that analyzes transactions in real-time and identifies suspicious patterns",
    image: `${import.meta.env.BASE_URL}images/fraud_dashboard.png`,
    tech: ["Python", "Visualization", "Dashboard"],
    github: "https://github.com/Phoenix-Krn/Real-Time-Transaction-Monitoring-Dashboard",
    live: "https://real-time-transaction-monitoring-dashboard-rxrpjdvkkxprkcz9abh.streamlit.app/",
    highlight: "Live Fraud Detection",
  },
  {
    title: "Brain Tumor Detection and Survival Prediction",
    description: "AI-powered medical imaging tool using 3D deep learning for accurate tumor segmentation and survival analysis",
    image: `${import.meta.env.BASE_URL}images/brain_dashboard.png`,
    tech: ["3D U-Net", "Random Forest", "Streamlit"],
    github: "https://github.com/Phoenix-Krn/Brain_Tumor_Detection_and_Survival_Prediction",
    live: "https://braintumorsurvivalandprediction.streamlit.app/",
    highlight: "Medical AI Innovation",
  },
  {
    title: "Automating Data Quality Monitoring in Cloud Data Warehouses with AI",
    description: "AI-Automating data quality monitoring for cloud data warehouses.",
    image: `${import.meta.env.BASE_URL}images/monitoring_dashboard.png`,
    tech: ["Python", "SQL", "Data Analysis", "Visualization", "AI"],
    github: "https://github.com/Phoenix-Krn/Automating-Data-Quality-Monitoring-in-Cloud-Data-Warehouses-with-AI",
    live: "https://github.com/Phoenix-Krn/Automating-Data-Quality-Monitoring-in-Cloud-Data-Warehouses-with-AI",
    highlight: "Data Monitoring",
  },
];

const FeaturedProjectsSpotlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Spotlight <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Featured work that showcases innovation and impact
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Project Image */}
              <Tilt3DCard>
                <SpotlightCard>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-96 rounded-2xl overflow-hidden group glass-card glow-border"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="text-sm font-semibold mb-2 text-primary">
                          {project.highlight}
                        </p>
                        <p className="text-sm leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </SpotlightCard>
              </Tilt3DCard>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                className="space-y-6"
              >
                {/* Highlight Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="flex items-center gap-2 w-fit"
                >
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-primary">
                    Featured
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-bold leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-full glass-card border border-primary/30 text-sm font-medium hover:border-primary/60 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 pt-6">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg glass-card border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg glass-card border border-border/50 hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-2 font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSpotlight;
