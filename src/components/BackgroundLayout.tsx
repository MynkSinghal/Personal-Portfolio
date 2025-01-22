"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030712]">
      <AnimatedGridPattern 
        className="absolute inset-0 z-0"
        width={50}
        height={50}
        strokeDasharray={2}
        numSquares={150}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={0.5}
        style={{
          stroke: "hsl(var(--primary))",
          strokeWidth: "1.5px",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 