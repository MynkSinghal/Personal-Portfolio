import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
  repeat?: number;
}

const Marquee = ({
  className,
  reverse,
  pauseOnHover,
  vertical,
  children,
  repeat = 1,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "group [--duration:40s] [--gap:1rem] flex overflow-hidden",
        vertical && "flex-col",
        className
      )}
      style={
        {
          "--repeat": repeat,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] min-w-full",
          vertical && "flex-col",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const SkillsMarquee = () => {
  const icons = [
    "react",
    "next",
    "typescript",
    "tailwindcss",
    "materialui",
    "redux",
    "nodejs",
    "express",
    "mongodb",
    "postgresql",
    "graphql",
    "git",
    "docker",
    "aws",
    "firebase",
    "vercel",
    "figma",
  ].map((icon) => (
    <div key={icon} className="w-20 h-20 flex items-center justify-center">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`}
        alt={icon}
        className="w-12 h-12 transition-transform hover:scale-125"
      />
    </div>
  ));

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent z-10" />
      
      <Marquee pauseOnHover className="py-8">
        {icons}
      </Marquee>
    </div>
  );
}; 