import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <motion.img
        src="/resume/resume.png"
        alt="Mayank Singhal's Resume"
        className="w-full h-full object-contain"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Resume;