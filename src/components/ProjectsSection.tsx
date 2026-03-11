import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import Tilt3DCard from "./Tilt3DCard";

const projects = [
  {
    title: "Real Time Transaction Monitoring Dashboard",
    description: "Developed a real-time transaction monitoring dashboard to detect anomalies, track fraud patterns, and provide actionable insights for BFSI analytics.",
    image: "images/fraud_dashboard.png",
    tech: ["Python", "Visualization", "Simulation", "Dashboard"],
    github: "https://github.com/Phoenix-Krn/Real-Time-Transaction-Monitoring-Dashboard",
    live: "https://real-time-transaction-monitoring-dashboard-rxrpjdvkkxprkcz9abh.streamlit.app/",
    featured: true,
  },
  {
    title: "Brain Tumor Detection and Survival Prediction",
    description: "Developed a Streamlit-based medical AI app for 3D MRI tumor segmentation and survival prediction using 3D U‑Net and Random Forest models.",
    image: "images/brain_dashboard.png",
    tech: ["Python", "Numpy", "Streamlit", "Machine Learning","3D U-Net", "Random Forest"],
    github: "https://github.com/Phoenix-Krn/Brain_Tumor_Detection_and_Survival_Prediction",
    live: "https://braintumorsurvivalandprediction.streamlit.app/",
    featured: true,
  },
  {
    title: "Automating Data Quality Monitoring in Cloud Data Warehouses with AI",
    description: "This project automates data quality monitoring for cloud data warehouses using AI. It analyzes supermarket sales data, detects anomalies, ensures data integrity, and generates insights through an interactive dashboard and web application.",
    image: "images/monitoring_dashboard.png",
    tech: ["Python", "SQL", "Data Analysis", "Visualization", "AI"],
    github: "https://github.com/Phoenix-Krn/Automating-Data-Quality-Monitoring-in-Cloud-Data-Warehouses-with-AI",
    featured: true,
  },
  {
    title: "Cricket Data Analysis and Visualization",
    description: "Analyzed IPL data with Python and created performance dashboards",
    image: "images/cricket_dashboard.png",
    tech: ["Python","EDA", "Data Analysis", "Visualization","pandas", "matplotlib", "seaborn"],
    github: "https://github.com/Phoenix-Krn/World-cup-cricket-data-analysis-and-visualization",
    featured: false,
  },
  {
    title: "Toll-Payment-using-Solidity-Blockchain",
    description: "Developed a blockchain-based toll payment system using Solidity and Ethereum.",
    image: "images/BlockChain-1.jpg",
    tech: ["Remix Solidity", "Ethereum", "Smart Contracts"],
    github: "https://github.com/Phoenix-Krn/Toll-Payment-using-Solidity-Blockchain",
    featured: false,
  },
];

const ProjectsSection = () => {
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've built, throughout the academics.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Tilt3DCard key={project.title}>
              <SpotlightCard>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -12 }}
                  className="group glass-card glow-border overflow-hidden relative h-full"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                    <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glow-border flex items-center justify-center text-foreground"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glow-border-magenta flex items-center justify-center text-foreground"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 border border-primary/40 text-primary">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </SpotlightCard>
        </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
