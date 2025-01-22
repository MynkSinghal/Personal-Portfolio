import { SVGProps } from "react";

// Frontend SVGs
export const ReactSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 21.35a2 2 0 01-2-2v-6.7M12 2.65a2 2 0 012 2v6.7" strokeWidth="1.5" />
    <path d="M19.84 18.35a2 2 0 01-2.73.73l-5.8-3.35M4.16 5.65a2 2 0 012.73-.73l5.8 3.35" strokeWidth="1.5" />
  </svg>
);

// Backend SVGs
export const NodeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" strokeWidth="1.5" />
    <path d="M12 22v-5" strokeWidth="1.5" />
    <path d="M12 17L3 12" strokeWidth="1.5" />
    <path d="M12 17l9-5" strokeWidth="1.5" />
  </svg>
);

// Tools SVGs
export const DockerSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M21 14.7c-.7 1-1.8 1.8-3 2.3-.6.2-1.2.4-1.9.4H4.3c-.8 0-1.5-.2-2.1-.5-.7-.4-1.3-.9-1.7-1.5" strokeWidth="1.5" />
    <rect x="9" y="3" width="6" height="6" rx="1" strokeWidth="1.5" />
    <rect x="9" y="12" width="6" height="6" rx="1" strokeWidth="1.5" />
    <rect x="15" y="12" width="6" height="6" rx="1" strokeWidth="1.5" />
  </svg>
);

// Languages SVGs
export const TypeScriptSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M3 3h18v18H3V3z" strokeWidth="1.5" />
    <path d="M12 11v6" strokeWidth="1.5" />
    <path d="M15 11v6" strokeWidth="1.5" />
    <path d="M9 11h9" strokeWidth="1.5" />
  </svg>
); 