import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const skills = {
  Languages: ["Java", "C", "C++", "JavaScript", "HTML5", "CSS3", "Markdown"],
  "Libraries/Frameworks": [
    "React",
    "Bootstrap",
    "Wordpress",
    "Express.js",
    "npm",
    "Next.js",
    "Node.js",
    "Nodemon",
  ],
  "Tools/Platforms": [
    "GitHub Pages",
    "Glitch",
    "Heroku",
    "Netlify",
    "Vercel",
    "Git",
    "VS Code",
  ],
  "Graphic Designing": [
    "Figma",
    "Framer",
    "Canva",
    "Adobe After Effects",
    "Photoshop",
    "Premiere Pro",
  ],
};

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground">
            I'm a passionate developer with expertise in full-stack development and design.
            I love creating beautiful and functional web applications that solve real-world problems.
          </p>
          <Button variant="outline" size="lg">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;