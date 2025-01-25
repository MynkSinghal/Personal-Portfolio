import { motion } from "framer-motion";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    // Add dark mode styles and remove controls
    const style = document.createElement('style');
    style.textContent = `
      iframe {
        filter: invert(1);
      }
      /* Remove any default margins/padding from the PDF viewer */
      body {
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      @media (max-width: 640px) {
        iframe {
          transform: scale(0.9);
          transform-origin: top center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-[#FF5733] overflow-hidden">
      <div className="w-full h-full max-w-6xl mx-auto px-2 sm:px-4">
        <iframe
          src="/resume/Mayank Singhal Resume Updated.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
          className="w-full h-full"
          style={{ 
            border: 'none',
            backgroundColor: 'transparent',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: '100%',
            maxWidth: '100vw'
          }}
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Resume;