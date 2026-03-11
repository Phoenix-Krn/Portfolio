import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import MagneticButton from "./MagneticButton";

interface ResumeDownloadProps {
  variant?: "neon" | "neonOutline";
  size?: "sm" | "lg";
  showIcon?: boolean;
  className?: string;
}

const ResumeDownload = ({
  variant = "neon",
  size = "lg",
  showIcon = true,
  className = "",
}: ResumeDownloadProps) => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "Files/Kavya R Naik.pdf";
    link.download = "Kavya R Naik.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <MagneticButton>
        <Button
          variant={variant}
          size={size}
          onClick={handleDownload}
          className="gap-2 cursor-pointer"
        >
          {showIcon && <Download className="w-4 h-4" />}
          Download Resume
        </Button>
      </MagneticButton>
    </motion.div>
  );
};

export default ResumeDownload;
