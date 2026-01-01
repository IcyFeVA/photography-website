import React, { useMemo, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getBookingMonths } from '../utils/dateUtils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { next } = useMemo(() => getBookingMonths(), []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Headshots', path: '/headshots' },
    { label: 'Portraits', path: '/portraits' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Inquire', path: '/inquire' },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-md border-b border-white/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-3 z-50 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm">
              <span className="font-serif font-bold text-lg">PZ</span>
            </div>
            <span className="hidden md:block font-sans font-medium tracking-wide text-sm text-text/90">
              PASCAL ZIRN
            </span>
          </Link>

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
              Now booking for <span className="text-white font-semibold">{next}: 2 spots left</span>
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
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`font-serif text-4xl md:text-6xl transition-colors duration-300 ${isActive(item.path) ? 'text-white italic' : 'text-muted/50 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </motion.div>
                </Link>
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