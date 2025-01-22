import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"],
  "Backend": ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  "Tools": ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma"],
  "Languages": ["JavaScript", "Python", "Java", "C++", "SQL", "HTML/CSS"],
};

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      } opacity-90`} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 text-sm text-accent border border-accent rounded-full mb-6 hover:scale-105 transition-transform"
          >
            Welcome to my portfolio
          </motion.span>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-soft to-accent"
          >
            Mayank Singhal
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl mb-12 text-muted-foreground"
          >
            Full Stack Developer & Designer
          </motion.p>

          {/* Skills Carousel */}
          <div className="relative my-12 py-8 overflow-hidden">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="mb-8"
              >
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <motion.div
                  animate={{
                    x: [-1000, 1000],
                    transition: {
                      x: {
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 20 + categoryIndex * 2,
                        ease: "linear",
                      },
                    },
                  }}
                  className="flex gap-4 whitespace-nowrap"
                >
                  {[...items, ...items].map((skill, index) => (
                    <div
                      key={`${skill}-${index}`}
                      className="px-6 py-2 bg-accent/10 rounded-full backdrop-blur-sm hover:bg-accent/20 transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 bg-accent text-black font-medium rounded-full hover:bg-accent-soft transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-accent-soft"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 border border-foreground text-foreground rounded-full hover:bg-foreground/10 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-foreground/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-foreground rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
              y: [0, 4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;