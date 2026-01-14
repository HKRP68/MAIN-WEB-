
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionOverlayProps {
  active: boolean;
}

const TransitionOverlay: React.FC<TransitionOverlayProps> = ({ active }) => {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          exit={{ x: '200%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center"
        >
          {/* Main Bowling Background */}
          <div className="absolute inset-0 bg-yellow-400 flex items-center">
            <div className="w-full h-1/2 bg-black skew-y-12" />
          </div>

          {/* The "Ball" */}
          <motion.div
            animate={{ rotate: 720 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 -translate-x-1/2 w-40 h-40 md:w-60 md:h-60 bg-red-700 border-[10px] border-black rounded-full flex items-center justify-center shadow-2xl"
          >
            <div className="w-full h-4 bg-white opacity-20" />
            <div className="absolute inset-0 border-[4px] border-white rounded-full m-8 opacity-20" />
            <span className="absolute text-white font-sync font-black text-2xl">CAD</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
