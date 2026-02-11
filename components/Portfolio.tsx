import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS, PORTFOLIO_COLUMNS } from '../constants';
import { X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = PORTFOLIO_ITEMS.find(item => item.id === selectedId);

  return (
    <section className="px-6 pb-24 max-w-7xl mx-auto">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PORTFOLIO_COLUMNS.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-6">
            {column.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                onClick={() => setSelectedId(item.id)}
                className="relative group overflow-hidden bg-surface rounded-sm cursor-zoom-in"
              >
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter saturate-[0.85] group-hover:saturate-100"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-block border border-white/30 bg-black/20 backdrop-blur-sm px-4 py-2 text-xs font-medium tracking-[0.2em] text-white uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      [ {item.category} ]
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-12"
            onClick={() => setSelectedId(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedId(null);
              }}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2 group"
            >
              <span className="sr-only">Close</span>
              <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-full max-h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="max-h-[85vh] w-auto max-w-full object-contain shadow-2xl rounded-sm cursor-zoom-out"
                onClick={() => setSelectedId(null)}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-center"
              >
                <p className="text-white/80 text-sm font-sans tracking-widest uppercase">
                  [ {selectedItem.category} ]
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;