import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Phoenix-Krn", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kavyaravinaik", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kavyaravinaik2003@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/30 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-bold gradient-text">Kavya R Naik</h3>
              <p className="text-sm text-muted-foreground">
                Python Developer • Data Analyst • Tech Enthusiast
              </p>
              <p className="text-xs text-muted-foreground">
                Building innovative solutions with data and code.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h4 className="font-semibold text-sm">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "Projects", href: "/projects" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <h4 className="font-semibold text-sm">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg glass-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
          />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span>© {currentYear} Kavya R Naik. All rights reserved.</span>
            </div>

            
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
