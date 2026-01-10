
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MatchFormat } from '../types';

interface ActionCardProps {
  title: string;
  description: string;
  link?: string;
  onExpand?: () => void;
  variant: 'primary' | 'secondary';
  isTournamentManager?: boolean;
  onFormatSelect?: (format: MatchFormat) => void;
  index: number;
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  title, 
  description, 
  link, 
  variant, 
  isTournamentManager, 
  onFormatSelect,
  index
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardClasses = `
    relative p-8 border-4 border-black brutalist-shadow brutalist-shadow-hover brutalist-shadow-active 
    transition-all duration-200 flex flex-col h-full cursor-pointer
    ${variant === 'primary' ? 'bg-[#5865F2]' : 'bg-[#EF4444]'}
    ${index === 1 ? 'md:translate-y-12' : ''}
  `;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8 + index * 0.2 }}
      className={cardClasses}
      onClick={() => isTournamentManager ? setIsExpanded(!isExpanded) : window.open(link, '_blank')}
    >
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-black mb-4 leading-none text-white flex items-center gap-4">
          {title}
          {!isTournamentManager && (
             <motion.span 
               animate={{ x: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
             >
               →
             </motion.span>
          )}
        </h2>
        <p className="text-lg font-bold text-white mb-8 opacity-90">
          {description}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && isTournamentManager && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-6 pt-6 border-t-4 border-black"
          >
            <p className="font-sync text-sm mb-4 text-white">SELECT MATCH FORMAT</p>
            <div className="grid grid-cols-1 gap-4">
              <FormatButton 
                label="TEST CRICKET" 
                sub="FOR THE PURISTS" 
                color="bg-white" 
                textColor="text-black"
                icon={<div className="w-4 h-4 rounded-full bg-red-800" />}
                onClick={() => onFormatSelect?.(MatchFormat.TEST)}
              />
              <FormatButton 
                label="LIMITED OVERS" 
                sub="FAST-PACED ACTION" 
                color="bg-black" 
                textColor="text-white"
                icon={<div className="w-4 h-4 rounded-full bg-white" />}
                onClick={() => onFormatSelect?.(MatchFormat.LIMITED_OVERS)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Glow for CTA */}
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 border-4 border-white opacity-0"
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      )}
    </motion.div>
  );
};

interface FormatButtonProps {
  label: string;
  sub: string;
  color: string;
  textColor: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const FormatButton: React.FC<FormatButtonProps> = ({ label, sub, color, textColor, icon, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, x: 10 }}
    whileTap={{ scale: 0.95 }}
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
    className={`${color} ${textColor} p-4 border-4 border-black flex items-center justify-between brutalist-shadow group`}
  >
    <div className="flex items-center gap-4">
      {icon}
      <div className="text-left">
        <div className="font-black text-xl">{label}</div>
        <div className="text-xs uppercase font-bold opacity-70">{sub}</div>
      </div>
    </div>
    <span className="text-2xl font-black group-hover:translate-x-2 transition-transform">→</span>
  </motion.button>
);

export default ActionCard;
