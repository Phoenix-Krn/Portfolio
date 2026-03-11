import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  link?: string;
  authors?: string;
  doi?: string;
  featured?: boolean;
}

interface Patent {
  title: string;
  patentNumber: string;
  year: string;
  status: "Published" | "Filed" | "Pending";
  link?: string;
  inventors?: string;
  featured?: boolean;
}

const publications: Publication[] = [
  {
    title: "Deep Learning Framework with Explainable AI for Accurate and Interpretable Brain Tumor Segmentation",
    journal: "ICISCN-2025 - International Conference on Intelligent Systems and Computational Networks",
    year: "2025",
    authors: "Dushyantha ND; Kavya R Naik; Chaithanya H G; Amrutha L; Dinesh C",
    featured: true,
    link: "https://ieeexplore.ieee.org/document/10934555",
  },
  {
    title: "AI Revolutionizing Data Security and Privacy in Banking: A Deep Dive Analysis",
    journal: "ICRET Conference - SVCE",
    year: "2024",
    authors: "Kavya R Naik et al.",
    doi: "ISBN: 978-8-19688-984-5",
    featured: true,
    link: "#",
  },
  {
    title: "Brain Tumor Detection and Survivaal Prediction Using 3D U-Net and Random Forest:A Streamlit-Based Interactive System for MRI Analysis",
    journal: "The IUP Journal of Eletrical & Electronic Engineering",
    year: "2025",
    authors: "Kavya R Naik, Chaithanya HG, Amrutha L , Dinesh C et al.",
    doi: "10.71329/IUPJEEE/2025.18.2.54-68",
    featured: true,
    link: "https://share.google/bHBkDCBdRPkkRnnSS",
  },
];

const patents: Patent[] = [
  {
    title: "Enhancing Emergency Response Vehicles with Explainable AI Windshield Technology",
    patentNumber: "202441058893",
    year: "2024",
    status: "Published",
    inventors: "S.Sarumathi, Dr.Smitha Kurian, Liji Mol, Juliet Johny, Minal Khandere, Harshitha PS, Damini S, Nandha Gopal S M, Kavya R Naik, Archana G, Chitikela Sandeep, Dr Sharada KA",
    featured: true,
    link: "https://iprsearch.ipindia.gov.in/PatentSearch/PatentSearch/ViewApplicationStatus",
  },
];

const PublicationsPatentSection = () => {
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
            Publications & <span className="gradient-text">Patents</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research contributions and intellectual property inventions
          </p>
        </motion.div>

        {/* Tabs: Publications and Patents */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Publications Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <BookOpen className="w-6 h-6 text-primary" />
              Publications
            </motion.h3>

            <div className="space-y-4">
              {publications.map((publication, index) => (
                <motion.div
                  key={publication.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  whileHover={{ x: 8 }}
                    className="group glass-card glow-border p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {publication.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {publication.journal}
                      </p>
                    </div>
                    {publication.featured && (
                      <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-primary/20 border border-primary/40 text-primary whitespace-nowrap">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center mt-4">
                    <span className="text-sm text-muted-foreground">
                      {publication.year}
                    </span>
                    {publication.doi && (
                      <span className="text-xs text-primary font-mono">
                        DOI: {publication.doi}
                      </span>
                    )}
                    {publication.link && publication.link !== "#" && (
                      <motion.a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="ml-auto text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Patents Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold mb-8 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-secondary" />
              Patents
            </motion.h3>

            <div className="space-y-4">
              {patents.map((patent, index) => (
                <motion.div
                  key={patent.patentNumber}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) + 0.2 }}
                  whileHover={{ x: 8 }}
                    className="group glass-card glow-border-magenta p-6 hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {patent.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 font-mono">
                        {patent.patentNumber}
                      </p>
                    </div>
                    {patent.featured && (
                      <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-secondary/20 border border-secondary/40 text-secondary whitespace-nowrap">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center justify-between mt-4">
                    <div className="flex gap-2">
                      <span className="text-sm text-muted-foreground">
                        {patent.year}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          patent.status === "Published"
                            ? "bg-green-500/20 text-green-400 border border-green-500/40"
                            : patent.status === "Filed"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                        }`}
                      >
                        {patent.status}
                      </span>
                    </div>
                    {patent.link && patent.link !== "#" && (
                      <motion.a
                        href={patent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-secondary hover:text-secondary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPatentSection;