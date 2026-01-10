
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const words = ["COMPETE.", "MANAGE.", "CONNECT."];

  return (
    <section className="relative mt-20 md:mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-t-8 border-black pt-10">
        <div className="flex flex-wrap gap-4 md:gap-8">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
              className="text-3xl md:text-6xl font-black bg-white border-4 border-black px-4 py-2 brutalist-shadow hover:bg-yellow-400 transition-colors"
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="bg-[#22C55E] p-6 border-4 border-black brutalist-shadow max-w-sm rotate-2"
        >
          <p className="text-xl font-bold uppercase italic leading-tight">
            “Everything cricket, right here on Discord.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
