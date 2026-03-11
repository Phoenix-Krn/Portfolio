import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";
import Tilt3DCard from "./Tilt3DCard";

const experiences = [
    {
    title: "BFSI Consortium Trainee",
    company: "BFSI Consortium",
    period: "Sept 2025 – Feb 2026",
    description: [
      "Learned core BFSI concepts with exposure to banking, financial markets, investments, insurance, derivatives, securitization, MPT, forex, and money markets",
      "Banking: Commercial & Investment Banking, Asset Classes, Securitization, Derivatives",
      "Financial Services: Money Markets, Collective Investment Vehicles, Alternative Investments, Forex Market, Modern Portfolio Theory"
    ],
    skills: ["Banking", "Financial Services", "Insurance", "Derivatives", "Risk Management"],
  },
  {
    title: "AI Data Quality Analyst",
    company: "Rooman Technologies",
    period: "Sep 2024 – Mar 2025",
    description: "Built Dash/Plotly dashboards for sales analysis; automated monitoring of AI dataset quality; implemented data validation pipelines",
    skills: ["Python", "Dash", "Plotly", "Data Visualization", "AI/ML"],
  },
  {
    title: "Soft Skills Trainee",
    company: "Wadhwani Foundation",
    period: "Sep 2024 – Mar 2025",
    description: "Trained in leadership, communication, and digital tools; developed interpersonal and team collaboration skills",
    skills: ["Leadership", "Communication", "Team Building", "Digital Tools"],
  },
  {
    title: "Data Science Intern",
    company: "Cranes Varsity - Bengaluru",
    period: "Oct 2023 – Nov 2023",
    description: "Performed EDA on IPL dataset using Pandas and Matplotlib; built dashboards for visualization; analyzed cricket performance metrics",
    skills: ["Python", "Pandas", "Matplotlib", "EDA", "Data Visualization"],
  }
];

const ExperienceSection = () => {
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
            <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through the tech field, building projects and growing together with the new Technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
                className="absolute left-4 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center"
                style={{
                  boxShadow: "0 0 20px hsl(var(--neon-cyan) / 0.5)",
                }}
              >
                <Briefcase className="w-4 h-4 text-primary" />
              </motion.div>

              {/* Content Card */}
              <Tilt3DCard>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card glow-border p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={skillIndex % 2 === 0 ? "neon-badge" : "neon-badge-magenta"}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
