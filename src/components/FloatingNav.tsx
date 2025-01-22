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
      name: "About",
      icon: <User className="h-4 w-4" />,
      path: "/about"
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
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 backdrop-blur-lg rounded-full p-2 border border-white/10"
    >
      <nav className="flex items-center gap-2">
        {navItems.map((item) => (
          <motion.a
            key={item.path}
            href={item.path}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-3 rounded-full transition-colors ${
              location.pathname === item.path 
                ? "bg-accent text-black" 
                : "hover:bg-white/10"
            }`}
          >
            {item.icon}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default FloatingNav; 