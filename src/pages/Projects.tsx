import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Vibrant Hues",
    description: "A modern colour palette management application that helps designers and developers discover, create, and preview color palettes in both light and dark modes. Features include palette downloads, real-time previews, and an intuitive user interface.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/MynkSinghal/VibrantHues--Color-Picker-Website",
    liveUrl: "https://vibrant-hues-color-picker-website-zjhg.vercel.app",
    image: "/projects/vibrant hues.png"
  },
  {
    title: "Trylo - Virtual Try-On",
    description: "An innovative AI-powered virtual try-on platform enabling realistic garment visualization on various pose or body stances. This technology bridges the gap between online shopping and the physical fitting room experience.",
    techStack: ["React", "TensorFlow.js", "Node.js", "Express"],
    githubUrl: "https://github.com/MynkSinghal/Trylo-VirtualTryON/tree/master",
    liveUrl: "https://trylo-virtual-try-on.vercel.app",
    image: "/projects/Trylo.png"
  },
  {
    title: "DocBook - Appointment Booking System",
    description: "DocBook: Effortlessly manage doctor appointments with automated booking, reminders, and seamless calendar for patients and healthcare providers.",
    techStack: ["React", "Typescript", "Node.js", "Supabase"],
    githubUrl: "https://github.com/MynkSinghal/Docbook-booking-system",
    liveUrl: "https://docbook-one.vercel.app",
    image: "/projects/DocBook.png"
  },
  {
    title: "OMDB Movie Database",
    description: "A dynamic movie search application integrated with the OMDB API, allowing users to explore a vast database of films. Features include detailed movie information, responsive design, and real-time search functionality.",
    techStack: ["JavaScript", "Node.js", "Express", "OMDB API"],
    githubUrl: "https://github.com/MynkSinghal/WebDev-Movie-Search-APP-usingAPI/tree/main",
    liveUrl: "https://web-dev-movie-search-app-using-api.vercel.app",
    image: "/projects/Movie search.png"
  },
  {
    title: "Heart Risk Detection",
    description: "A machine learning-powered web application that predicts heart disease risk using the Kaggle dataset. The model analyzes various health parameters providing risk assessment and further helping in early detection and prevention.",
    techStack: ["Python", "TensorFlow", "React", "Scikit-learn"],
    githubUrl: "https://github.com/MynkSinghal/healthcare-aiLab/tree/main",
    liveUrl: "https://healthcare-ai-lab.vercel.app",
    image: "/projects/heart.png"
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
