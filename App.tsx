
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View, MatchFormat } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ActionCard from './components/ActionCard';
import CricketSpinner from './components/CricketSpinner';
import TransitionOverlay from './components/TransitionOverlay';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<MatchFormat | null>(null);

  useEffect(() => {
    // Initial load simulation
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleFormatSelect = (format: MatchFormat) => {
    setSelectedFormat(format);
    setIsTransitioning(true);
    // Simulate navigation transition
    setTimeout(() => {
      setCurrentView('MATCH_CONFIG');
      setIsTransitioning(false);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white p-4">
        <CricketSpinner />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 font-sync text-2xl tracking-tighter"
        >
          PREPARING THE PITCH...
        </motion.p>
        <div className="absolute top-0 left-0 w-full h-2 bg-red-600" />
        <div className="absolute bottom-0 right-0 w-full h-2 bg-yellow-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black relative overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 border-[20px] border-black rotate-45 opacity-5"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full border-[15px] border-black opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-px h-full bg-black opacity-10"></div>
        <div className="absolute top-0 right-1/3 w-1/4 h-screen border-x-4 border-black opacity-5 -skew-x-12"></div>
        
        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentView === 'HOME' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="max-w-6xl mx-auto px-6 py-12 md:py-24 relative z-10"
          >
            <Header />
            <Hero />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 relative">
              {/* Asymmetrical line decoration */}
              <div className="absolute -top-10 -left-10 w-24 h-24 border-t-8 border-l-8 border-black hidden md:block"></div>
              
              <ActionCard
                title="JOIN OUR DISCORD COMMUNITY"
                description="Connect with players, get updates, and join the conversation in our official hub."
                link="https://discord.gg/AhBkPPQshK"
                variant="primary"
                index={0}
              />
              <ActionCard
                title="TOURNAMENT MANAGER"
                description="Create, manage, or join cricket tournaments. Select your weapon of choice."
                onExpand={() => {}}
                variant="secondary"
                isTournamentManager
                onFormatSelect={handleFormatSelect}
                index={1}
              />
            </div>
          </motion.div>
        )}

        {currentView === 'MATCH_CONFIG' && (
          <motion.div
            key="config"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center min-h-screen text-center p-10 bg-black text-white relative z-10"
          >
            <div className="absolute top-10 left-10 text-9xl font-black opacity-10 pointer-events-none">CAD</div>
            <motion.div 
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              className="mb-12"
            >
              <img 
                src="https://i.ibb.co/ccdq3Ct9/file-00000000743071f488fdc3b85eadcd3d.png" 
                alt="Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain bg-white p-4 border-8 border-yellow-400"
              />
            </motion.div>
            <h1 className="text-6xl md:text-9xl font-sync font-black mb-8 leading-none tracking-tighter">
              {selectedFormat === MatchFormat.TEST ? 'THE GRIND' : 'THE BLITZ'}
            </h1>
            <p className="text-xl md:text-3xl border-4 border-white p-4 bg-red-600 brutalist-shadow font-bold uppercase">
              FORMAT SELECTED: {selectedFormat?.replace('_', ' ')}
            </p>
            <button 
              onClick={() => setCurrentView('HOME')}
              className="mt-20 px-10 py-5 bg-yellow-400 text-black font-sync font-black hover:bg-white transition-colors border-4 border-black brutalist-shadow"
            >
              ← GO BACK TO CLUBHOUSE
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <TransitionOverlay active={isTransitioning} />
    </div>
  );
};

export default App;
