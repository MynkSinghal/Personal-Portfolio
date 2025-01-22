import { motion } from "framer-motion";
import { useState } from "react";

interface ExpandingCardProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

export const ExpandingCard = ({ title, description, image, children }: ExpandingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative overflow-hidden rounded-xl cursor-pointer group
        ${isExpanded ? 'h-[400px]' : 'h-[200px]'}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={false}
        animate={{ opacity: isExpanded ? 1 : 0.4 }}
      />
      
      <motion.div
        className="relative h-full p-8 flex flex-col"
        layout
      >
        <motion.h3
          layout="position"
          className="text-2xl font-bold text-white mb-4"
        >
          {title}
        </motion.h3>
        
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4"
        >
          {isExpanded && (
            <>
              <p className="text-white/90">{description}</p>
              {children}
            </>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}; 