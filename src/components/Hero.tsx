import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const skills = {
  Languages: ["Java", "C", "C++", "JavaScript", "TypeScript", "Python", "SQL"],
  "Libraries/Frameworks": ["React", "Express.js", "Node.js", "Tailwind CSS", "Bootstrap"],
  Tools: ["Git", "GitHub", "VS Code", "Figma", "MySQL", "Notion", "Slack"],
};

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-white to-gray-100'} opacity-90`} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm text-accent border border-accent rounded-full mb-6"
          >
            Welcome to my portfolio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Mayank Singhal
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl mb-12 text-muted-foreground"
          >
            Full Stack Developer & Designer
          </motion.p>

          {/* Skills Carousel */}
          <div className="overflow-hidden my-12">
            <motion.div
              animate={{
                x: [0, -1000],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {Object.entries(skills).map(([category, items]) =>
                items.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-accent/10 rounded-full backdrop-blur-sm"
                  >
                    {skill}
                  </div>
                ))
              )}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-accent text-black font-medium rounded-full hover:bg-accent-soft transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-foreground text-foreground rounded-full hover:bg-foreground/10 transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
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
          <motion.div className="w-1 h-2 bg-foreground rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;