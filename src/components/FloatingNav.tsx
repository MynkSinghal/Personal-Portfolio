import { useLocation } from "react-router-dom";
import { Home, FolderGit2, User, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

const FloatingNav = () => {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      icon: <Home className="h-4 w-4" />,
      path: "/"
    },
    {
      name: "Projects",
      icon: <FolderGit2 className="h-4 w-4" />,
      path: "/projects"
    },
    {
      name: "Contact",
      icon: <Mail className="h-4 w-4" />,
      path: "/contact"
    },
    {
      name: "Resume",
      icon: <FileText className="h-4 w-4" />,
      path: "/resume"
    }
  ];

  return (
    <div className="fixed inset-x-0 bottom-4 sm:bottom-8 flex justify-center z-50 px-4">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="w-full max-w-[400px] sm:w-auto"
      >
        <nav className="flex items-center justify-between sm:justify-center gap-1 bg-black/40 backdrop-blur-lg rounded-full p-2 border border-primary/20">
          {navItems.map((item) => (
            <motion.a
              key={item.path}
              href={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 sm:p-3 rounded-full transition-colors flex items-center gap-2 ${
                location.pathname === item.path 
                  ? "bg-primary text-white" 
                  : "hover:bg-primary/20 text-white/80"
              }`}
            >
              {item.icon}
              <span className="text-xs sm:text-sm font-medium hidden sm:block">{item.name}</span>
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default FloatingNav; 