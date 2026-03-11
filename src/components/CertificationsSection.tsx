import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar, Building, ExternalLink, Download } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  skills?: string[];
  featured?: boolean;
  certificateFile?: string;
}

const certifications: Certification[] = [
  {
    title: "BFSI Consortium Trainee (ELP – 360 hrs)",
    issuer: "BFSI Consortium",
    date: "September 2025 - February 2026",
    skills: ["Banking", "Financial Services", "Insurance", "Derivatives", "Money Markets"],
    featured: true,
  },
  {
    title: "AI Data Quality Analyst – NSQF Level 5",
    issuer: "Rooman Technologies & HKBK College College of Engineering",
    date: "2025",
    skills: ["Data Quality", "AI Monitoring", "Analytics", "Prompt Engineering"],
    featured: true,
  },
  {
    title: "AI Data Quality Analyst – On-the-Job Training",
    issuer: "VTU + Rooman Technologies",
    date: "February 2025",
    skills: ["Practical AI", "Data Engineering", "Dashboard Development"],
    featured: true,
  },
  {
    title: "Introduction to Cloud",
    issuer: "Rooman Technologies + IBM",
    date: "February 2025",
    skills: ["Cloud Computing", "IBM", "AWS Basics"],
  },
  {
    title: "Life Skills (Jeevan Kaushal 2.0)",
    issuer: "Wadhwani Foundation",
    date: "December 2024",
    skills: ["Communication", "Leadership", "Digital Tools", "Team Building"],
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM Skills Network",
    date: "2024",
    skills: ["Python", "Data Science", "Analysis"],
  },
  {
    title: "Artificial Intelligence: Search Methods for Problem Solving",
    issuer: "VTU - Centre for Online Education",
    date: "2024",
    skills: ["AI", "Problem Solving", "Algorithms"],
  },
  {
    title: "Data Science with AIML",
    issuer: "Cranes Varsity",
    date: "2024",
    skills: ["Data Science", "Machine Learning", "AI"],
  },
  {
    title: "Introduction to MongoDB",
    issuer: "Simplilearn",
    date: "2024",
    skills: ["MongoDB", "NoSQL", "Databases"],
  },
  {
    title: "Python Tkinter",
    issuer: "Great Learning Academy",
    date: "August 2023",
    skills: ["Python", "GUI", "Tkinter"],
  },
  {
    title: "A Complete Guide to Finance using Python",
    issuer: "Infosys Springboard",
    date: "December 2025",
    skills: ["Python-Finance", "Finance Basics", "Analysis"],
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownloadCertificate = (e: React.MouseEvent, certificateFile?: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!certificateFile) return;

    const link = document.createElement("a");
    link.href = `/certificates/${certificateFile}`;
    link.download = certificateFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <span className="gradient-text">Certifications</span> & Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and credentials from industry-leading platforms
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.credentialId}
              href={cert.credentialUrl && cert.credentialUrl !== "#" ? cert.credentialUrl : "#"}
              target={cert.credentialUrl && cert.credentialUrl !== "#" ? "_blank" : undefined}
              rel={cert.credentialUrl && cert.credentialUrl !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className={`group glass-card glow-border overflow-hidden block transition-all duration-300 ${cert.credentialUrl && cert.credentialUrl !== "#" ? "cursor-pointer hover:shadow-lg hover:shadow-primary/20" : ""}`}
            >
              {/* Certificate Header */}
              <div className="h-32 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute opacity-20"
                >
                  <Award className="w-24 h-24 text-primary" />
                </motion.div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors flex-1">
                    {cert.title}
                  </h3>
                  {cert.featured && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 border border-primary/40 text-primary whitespace-nowrap">
                      Featured
                    </span>
                  )}
                </div>

                {/* Issuer and Date */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building className="w-4 h-4" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-xs text-primary font-mono mb-4 bg-primary/5 px-3 py-2 rounded border border-primary/20">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-full bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Credential Link and Download */}
                <div className="flex flex-col gap-2">
                  {cert.certificateFile && (
                    <button
                      onClick={(e) => handleDownloadCertificate(e, cert.certificateFile)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors text-sm font-medium cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                    >
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </button>
                  )}
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 transition-colors text-sm font-medium cursor-pointer"
                    >
                      View Credential
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
