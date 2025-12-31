import React from 'react';
import { motion } from 'framer-motion';

const Portraits: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <span className="text-xs font-sans font-medium text-blue-400 uppercase tracking-widest mb-4 block">
          Corporate & Families
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-text mb-8">
          Legacy & Leadership.
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl mb-12">
          In a digital world, your image is your handshake. For executives, we design authority. 
          For families, we capture legacy. No stiff poses, no dated backdrops—just modern, 
          editorial-grade portraiture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <div className="bg-surface p-8 border border-white/5">
          <h3 className="font-serif text-2xl text-white mb-4">Executive Branding</h3>
          <p className="text-muted text-sm leading-relaxed mb-6">
            For C-Suite, Founders, and Realtors. We create a visual language that aligns with your company's ethos.
          </p>
          <ul className="text-xs text-muted/60 space-y-2 uppercase tracking-wider">
            <li>— LinkedIn Profiles</li>
            <li>— Company About Pages</li>
            <li>— Press Kits</li>
          </ul>
        </div>

        <div className="bg-surface p-8 border border-white/5">
           <h3 className="font-serif text-2xl text-white mb-4">Family Editorial</h3>
           <p className="text-muted text-sm leading-relaxed mb-6">
             Not your average mall photo. We treat family sessions like a Vanity Fair shoot. Candid, styled, and timeless.
           </p>
           <ul className="text-xs text-muted/60 space-y-2 uppercase tracking-wider">
             <li>— In-Studio or On-Location</li>
             <li>— Styling Consultation</li>
             <li>— Heirloom Prints</li>
           </ul>
        </div>

        <div className="bg-surface p-8 border border-white/5 flex items-center justify-center">
           <p className="font-serif text-xl text-center italic text-muted">
             "Pascal made our executive team look like the cast of Succession, but approachable."
           </p>
        </div>
      </div>

      {/* Visual Examples Section - Matches Headshots Page Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 mb-24">
        <div className="space-y-4">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/800/1000?random=20" 
              alt="Executive Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          <h3 className="font-serif text-2xl text-white">The Executive</h3>
          <p className="text-muted text-sm leading-relaxed">
            Sharp, authoritative, and clean. Designed for LinkedIn, annual reports, and press releases. 
            We focus on approachability and competence, ensuring you look like the leader you are.
          </p>
        </div>
        <div className="space-y-4 md:mt-24">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img 
              src="https://picsum.photos/800/1000?random=21" 
              alt="Family Portrait" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <h3 className="font-serif text-2xl text-white">The Legacy</h3>
          <p className="text-muted text-sm leading-relaxed">
            Timeless, emotive, and genuine. We strip away the forced smiles to capture the true dynamic of your family. 
            These are heirlooms, not just JPEGs.
          </p>
        </div>
      </div>
      
      <div className="mt-12 w-full h-96 overflow-hidden rounded-sm relative">
         <img src="https://picsum.photos/1200/600?random=15" alt="Wide corporate shot" className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/50 backdrop-blur px-6 py-3 text-white font-serif italic text-xl">
              Elevate your personal brand.
            </span>
         </div>
      </div>
    </section>
  );
};

export default Portraits;