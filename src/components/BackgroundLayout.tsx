"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

interface BackgroundLayoutProps {
  children: React.ReactNode;
}

export function BackgroundLayout({ children }: BackgroundLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <AnimatedGridPattern 
        className="absolute inset-0 z-0 opacity-50"
        width={32}
        height={32}
        numSquares={35}
        duration={3}
        maxOpacity={0.15}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 