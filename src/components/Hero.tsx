import { motion } from "framer-motion";
import { AnimatedModal } from "./ui/animated-modal";
import { useState } from "react";
import { WebDevIcon, BackendIcon, ToolsIcon, LanguagesIcon } from "./icons/SkillIcons";

const skills = {
  "Frontend Development": {
    icon: <WebDevIcon className="w-6 h-6 text-white" />,
    stats: [
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" className="w-6 h-6" />,
        label: "Redux"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-6 h-6" />,
        label: "Next.js"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" />,
        label: "TypeScript"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" />,
        label: "Tailwind"
      }
    ],
    skills: ["Material UI", "Redux", "Next.js", "TypeScript", "Tailwind CSS"],
    svgs: [
      <img key="redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" className="w-full h-full object-contain" />,
      <img key="next" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-full h-full object-contain" />,
      <img key="ts" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-full h-full object-contain" />,
      <img key="mui" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" className="w-full h-full object-contain" />
    ]
  },
  "Backend Development": {
    icon: <BackendIcon className="w-6 h-6 text-white" />,
    stats: [
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-6 h-6" />,
        label: "Node.js"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-6 h-6" />,
        label: "MongoDB"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-6 h-6" />,
        label: "PostgreSQL"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" className="w-6 h-6" />,
        label: "GraphQL"
      }
    ],
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    svgs: [
      <img key="node" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-full h-full object-contain" />,
      <img key="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-full h-full object-contain" />,
      <img key="mongo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-full h-full object-contain" />,
      <img key="postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-full h-full object-contain" />
    ]
  },
  "Development Tools": {
    icon: <ToolsIcon className="w-6 h-6 text-white" />,
    stats: [
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-6 h-6" />,
        label: "Git"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-6 h-6" />,
        label: "Docker"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" className="w-6 h-6" />,
        label: "AWS"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" className="w-6 h-6" />,
        label: "Firebase"
      }
    ],
    skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma"],
    svgs: [
      <img key="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-full h-full object-contain" />,
      <img key="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-full h-full object-contain" />,
      <img key="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" className="w-full h-full object-contain" />,
      <img key="figma" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-full h-full object-contain" />
    ]
  },
  "Programming Languages": {
    icon: <LanguagesIcon className="w-6 h-6 text-white" />,
    stats: [
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />,
        label: "JavaScript"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-6 h-6" />,
        label: "Python"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-6 h-6" />,
        label: "Java"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-6 h-6" />,
        label: "C++"
      }
    ],
    skills: ["JavaScript", "Python", "Java", "C++", "SQL", "HTML/CSS"],
    svgs: [
      <img key="js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-full h-full object-contain" />,
      <img key="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-full h-full object-contain" />,
      <img key="java" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-full h-full object-contain" />,
      <img key="cpp" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-full h-full object-contain" />
    ]
  }
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background-darker via-background to-background-dark opacity-90" />
      
      <div className="container relative z-10">
        <motion.div className="text-center mb-12">
          <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-accent">
            Mayank Singhal
          </motion.h1>
          
          <motion.p className="text-xl text-foreground/80">
            Full Stack Developer & Designer
          </motion.p>
        </motion.div>

        {/* Expanded Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([name, data]) => (
            <motion.div
              key={name}
              className="p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-xl">
                  {data.icon}
                </div>
                <h3 className="text-xl font-medium text-white">{name}</h3>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 mb-6">
                {data.svgs.map((svg, index) => (
                  <motion.div
                    key={index}
                    className="relative flex-shrink-0 w-48 h-32 rounded-2xl overflow-hidden bg-black/40 p-6 transform rotate-[-5deg] hover:rotate-0 transition-transform"
                    style={{ transformOrigin: "center center" }}
                  >
                    {svg}
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {data.stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                    <span className="text-xl">{stat.icon}</span>
                    <span className="text-sm text-white/80">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;