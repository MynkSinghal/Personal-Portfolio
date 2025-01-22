import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const resumeData = {
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vellore Institute of Technology",
      year: "2020 - 2024",
      details: "CGPA: 8.54/10"
    }
  ],
  experience: [
    {
      title: "Software Development Engineer Intern",
      company: "Flipkart",
      duration: "Jan 2024 - Present",
      responsibilities: [
        "Working with the Flipkart Grocery team on their internal tools",
        "Developing and maintaining React-based web applications",
        "Collaborating with cross-functional teams to implement new features"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Nykaa",
      duration: "May 2023 - July 2023",
      responsibilities: [
        "Developed responsive web interfaces using React and TypeScript",
        "Implemented state management using Redux",
        "Collaborated with UI/UX team for design implementation"
      ]
    }
  ],
  skills: {
    technical: ["React", "TypeScript", "Node.js", "Python", "Java", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "Firebase", "Figma"],
    soft: ["Team Leadership", "Problem Solving", "Communication"]
  },
  projects: [
    {
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio website built with React and Framer Motion",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    }
  ]
};

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="flex justify-between items-center">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-soft to-accent"
          >
            Resume
          </motion.h1>
          <motion.div variants={itemVariants}>
            <Button variant="outline" size="lg" className="group">
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Download PDF
            </Button>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.section variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                  <p className="text-sm">{edu.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-accent">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className="space-y-2">
                  <h3 className="text-lg font-semibold capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Projects Section */}
        <motion.section variants={itemVariants}>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Resume;