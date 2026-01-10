
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="relative mb-16 md:mb-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Logo Container - Brutalist Frame */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: -5 }}
          transition={{ type: 'spring', damping: 8, stiffness: 100 }}
          className="relative w-40 h-40 md:w-56 md:h-56 bg-white border-8 border-black p-2 brutalist-shadow transition-transform cursor-pointer group"
        >
          <div className="absolute -top-4 -left-4 bg-yellow-400 text-black font-black px-2 py-1 border-4 border-black text-xs z-10 group-hover:bg-red-500 transition-colors">
            OFFICIAL CAD
          </div>
          <img 
            src="https://i.ibb.co/ccdq3Ct9/file-00000000743071f488fdc3b85eadcd3d.png" 
            alt="Cricket Association of Discord Logo" 
            className="w-full h-full object-contain filter contrast-125 grayscale-[20%]"
          />
          <div className="absolute -bottom-4 -right-4 bg-black text-white font-sync text-[10px] p-1 border-2 border-white rotate-3">
            EST. 2024
          </div>
        </motion.div>

        {/* Title Container - Asymmetrical Typography */}
        <div className="flex-1 text-center md:text-left pt-4 relative">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute -top-10 left-0 text-[120px] font-black text-black opacity-[0.03] pointer-events-none select-none hidden md:block"
          >
            CRICKET
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-sync font-black tracking-tighter leading-[0.85] z-10 relative"
          >
            CRICKET <br />
            <span className="text-white bg-black px-4 py-2 inline-block -rotate-1 transform origin-left hover:rotate-0 transition-transform">
              ASSOCIATION
            </span> <br />
            OF DISCORD
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-2 bg-red-600 mt-6 mb-4 max-w-2xl border-y-2 border-black"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-black bg-yellow-400 inline-block px-4 py-1 border-4 border-black brutalist-shadow"
          >
            Premier Hub for Discord Simulations
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header;
