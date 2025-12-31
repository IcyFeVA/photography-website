import React from 'react';
import { motion } from 'framer-motion';
import { Palette, PenTool, Aperture } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background Texture/Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Graphic/Visual Representation */}
        <div className="relative order-2 md:order-1">
           <div className="grid grid-cols-2 gap-4 opacity-50">
             <div className="h-64 bg-background rounded-sm flex items-center justify-center border border-white/5">
                <Palette className="w-12 h-12 text-muted/30" strokeWidth={1} />
             </div>
             <div className="h-64 bg-background rounded-sm mt-12 flex items-center justify-center border border-white/5">
                <Aperture className="w-12 h-12 text-muted/30" strokeWidth={1} />
             </div>
           </div>
           {/* Floating Quote */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/90 backdrop-blur border border-white/10 p-8 w-64 md:w-80 text-center"
           >
             <span className="font-serif text-2xl italic text-white block mb-2">"Design is intelligence made visible."</span>
             <span className="text-xs uppercase tracking-widest text-muted">— Alina Wheeler</span>
           </motion.div>
        </div>

        {/* Right: Copy */}
        <div className="order-1 md:order-2">
          <h3 className="text-sm font-sans font-medium text-green-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-green-400"></span> The Bridge
          </h3>
          <h2 className="font-serif text-3xl md:text-5xl text-text mb-8 leading-tight">
            I don't just take photos; <br/>
            I <span className="text-white border-b border-white/30 pb-1">engineer</span> visual identities.
          </h2>
          <div className="space-y-6 text-muted font-light text-lg leading-relaxed">
            <p>
              With over 20 years as a Product Designer, my approach to photography is rooted in intent. 
              I bring a designer’s eye for composition, light, and human connection to every session.
            </p>
            <p>
              Whether you are an actor needing to convey a specific archetype, or an executive defining 
              your personal brand, we build your image with the same rigor used to design world-class products.
            </p>
          </div>
          
          <div className="mt-10 flex gap-8">
            <div className="flex flex-col gap-1">
               <span className="font-serif text-3xl text-white">20+</span>
               <span className="text-xs uppercase tracking-wider text-muted">Years Design Exp.</span>
            </div>
            <div className="flex flex-col gap-1">
               <span className="font-serif text-3xl text-white">500+</span>
               <span className="text-xs uppercase tracking-wider text-muted">Portraits Crafted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;