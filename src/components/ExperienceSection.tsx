import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
    title: "BFSI Trainee",
    company: "BFSI Consortium",
    period: "Sept 2025 - Present",
    description: [
      "Banking (Commercial & Investment Banking, Asset Classes, Securitization, Derivatives)",
      "Financial Services (Money Markets, Collective Investment Vehicles, Alternative Investments, Forex Market, Modern Portfolio Theory (MPT))",
      "Insurance (Insurance Fundamentals)"
    ],
    skills: ["Banking", "Python", "Finanacial Services","Cloud","Insuarance"],
  },
  {
    title: "Internship - AI-Data Quality Analyst",
    company: "Rooman Technologies",
    period: "September 2024 - March 2025",
    description: "Built a dashboard using Dash and Plotly for sales data visualization; automated AI dataset quality monitoring.",
    skills: ["Data Engineer", "Data Visualization & Analytics", "AI-driven Data Quality Monitoring"],
  },
  {
    title: "Data Science",
    company: "Cranes Varsity",
    period: "Oct 2023 - Nov 2023",
    description: "Performed EDA on IPL dataset using Pandas and Matplotlib; built dashboards for visualization.",
    skills: ["Python", "EDA", "Visualization", "Machiene Learning"],
  },
  {
    title: "Soft Skill Trainee",
    company: "Wadhwani Foundation",
    period: "September 2024 - March 2025",
    description: "Trained in leadership, communication, and digital tools.",
    skills: ["Team Player" ,"Adaptable", "CRM", "Communication"],
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
