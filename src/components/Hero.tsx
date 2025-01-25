import { motion } from "framer-motion";
import { AnimatedModal } from "./ui/animated-modal";
import { useState } from "react";
import { WebDevIcon, BackendIcon, ToolsIcon, LanguagesIcon } from "./icons/SkillIcons";
import { Marquee } from "@/components/ui/marquee";
import { MorphingText } from "@/components/ui/morphing-text";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

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
      <img key="mui" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" className="w-full h-full object-contain" />,
      <img key="redux" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" className="w-full h-full object-contain" />,
      <img key="next" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-full h-full object-contain" />,
      <img key="ts" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-full h-full object-contain" />,
      <img key="tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg" className="w-full h-full object-contain" />
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
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-6 h-6" />,
        label: "Express"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-6 h-6" />,
        label: "MongoDB"
      },
      { 
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-6 h-6" />,
        label: "PostgreSQL"
      }
    ],
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    svgs: [
      <img key="node" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-full h-full object-contain" />,
      <img key="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-full h-full object-contain" />,
      <img key="mongo" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-full h-full object-contain" />,
      <img key="postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-full h-full object-contain" />,
      <img key="graphql" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" className="w-full h-full object-contain" />,
      <img key="rest" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" className="w-full h-full object-contain" />
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
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" className="w-6 h-6" />,
        label: "Firebase"
      }
    ],
    skills: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Figma"],
    svgs: [
      <img key="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-full h-full object-contain" />,
      <img key="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-full h-full object-contain" />,
      <img key="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" className="w-full h-full object-contain" />,
      <img key="firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" className="w-full h-full object-contain" />,
      <img key="vercel" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" className="w-full h-full object-contain" />,
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
      <img key="cpp" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-full h-full object-contain" />,
      <img key="sql" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-full h-full object-contain" />,
      <img key="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-full h-full object-contain" />
    ]
  }
};

const Hero = () => {
  const titles = [
    "Full Stack\nDeveloper",
    "AI\nEnthusiast",
    "Graphic\nDesigner"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden p-4 sm:p-6 bg-background">
      <InteractiveGridPattern
        className={cn(
          "absolute inset-0 z-0",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
        width={20}
        height={20}
        squares={[80, 80]}
        squaresClassName="stroke-primary/20 hover:stroke-primary/40 hover:fill-primary/5"
      />
      
      <div className="container relative z-10">
        <motion.div className="text-center mb-8 sm:mb-12">
          <motion.h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-accent">
            Mayank Singhal
          </motion.h1>
          
          <div className="h-24 sm:h-32">
            <MorphingText 
              texts={titles}
              className="text-lg sm:text-xl md:text-3xl text-foreground/80 whitespace-pre-line leading-tight" 
            />
          </div>
        </motion.div>

        {/* Skills Marquees */}
        <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-32">
          {Object.entries(skills).map(([category, data], idx) => (
            <div key={category} className="relative mx-auto max-w-5xl">
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background/90 via-background/50 to-transparent z-10" />
              
              <Marquee 
                className="py-2 sm:py-4"
                pauseOnHover
                reverse={idx % 2 === 1}
                repeat={4}
              >
                {data.svgs.map((svg, index) => (
                  <div
                    key={index}
                    className="mx-2 sm:mx-6 flex items-center gap-2 sm:gap-3 relative overflow-hidden
                      backdrop-blur-[6px] backdrop-saturate-[180%] 
                      bg-white/[0.05] hover:bg-white/[0.1]
                      border border-white/[0.05] 
                      px-2 sm:px-4 py-1 sm:py-2 rounded-xl
                      transition-all duration-300 ease-in-out
                      group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center relative z-10">
                      {data.skills[index] === "AWS" ? (
                        <img src="/icons/aws-svgrepo-com.svg" alt="AWS" className="w-full h-full object-contain" />
                      ) : (
                        svg
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-white/80 whitespace-nowrap font-['Roboto'] font-medium tracking-wide relative z-10">
                      {data.skills[index]}
                    </span>
                  </div>
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;