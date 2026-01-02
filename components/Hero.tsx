import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-xs md:text-sm font-sans font-medium text-muted uppercase tracking-[0.2em] mb-4">
            Headshots / Portraits / Corporate Profiles
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.1] text-text font-normal tracking-tight max-w-4xl">
            Vancouver's <br />
            <span className="text-muted/60">gold standard for professional portraiture</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted text-lg md:text-xl font-light max-w-2xl leading-relaxed"
        >
          High-performance portraits for Vancouver’s actors, professionals, and families.
          Designing your visual identity with precision and quiet luxury.
        </motion.p>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-24"
      />
    </section>
  );
};

export default Hero;