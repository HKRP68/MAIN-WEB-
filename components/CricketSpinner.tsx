
import React from 'react';
import { motion } from 'framer-motion';

const CricketSpinner: React.FC = () => {
  return (
    <div className="relative w-24 h-24">
      {/* Outer spinning shell */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-8 border-dashed border-white rounded-full"
      />
      {/* Inner Ball */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-4 bg-red-600 rounded-full flex items-center justify-center border-4 border-black"
      >
        <div className="w-full h-1 bg-white opacity-30 rotate-45" />
        <div className="absolute w-full h-1 bg-white opacity-30 -rotate-45" />
      </motion.div>
    </div>
  );
};

export default CricketSpinner;
