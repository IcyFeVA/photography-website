import React, { useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getBookingMonths } from '../utils/dateUtils';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType } from '../types';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { next } = useMemo(() => getBookingMonths(), []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: PageType }[] = [
    { label: 'Headshots', id: 'headshots' },
    { label: 'Portraits', id: 'portraits' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Inquire', id: 'inquire' },
  ];

  const handleNav = (page: PageType) => {
    setIsMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-md border-b border-white/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 z-50 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
               <span className="font-serif font-bold text-lg">P</span>
            </div>
            <span className="hidden md:block font-sans font-medium tracking-wide text-sm text-text/90">
              PASCAL
            </span>
          </button>

          {/* Center: Live Status (Hidden on mobile when menu open for cleanliness) */}
          <motion.div 
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="hidden md:flex items-center gap-3 bg-surface/50 border border-white/10 px-4 py-1.5 rounded-full"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-xs font-medium tracking-wide text-text/80">
              Now booking for <span className="text-white font-semibold">{next}</span>
            </span>
          </motion.div>

          {/* Hamburger Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 p-2 -mr-2 text-white hover:text-muted transition-colors relative"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8 md:gap-10">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-serif text-4xl md:text-6xl hover:text-white transition-colors duration-300 ${
                    currentPage === item.id ? 'text-white italic' : 'text-muted/50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted/40"
              >
                <span>Vancouver, BC</span>
                <span>est. 2024</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;