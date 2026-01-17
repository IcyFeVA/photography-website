import React from 'react';
import { motion } from 'framer-motion';
// import { Palette, PenTool, Aperture } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background Texture/Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Graphic/Visual Representation */}
        <div className="relative order-2 md:order-1">
          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mt-12"
            >
              <div className="aspect-[8/10] w-full overflow-hidden">
                <img
                  src="/img/front17.png"
                  alt="Corporate Portrait"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[8/10] w-full overflow-hidden">
                <img
                  src="/img/front1.png"
                  alt="Theatrical Portrait"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                />
              </div>
            </motion.div>
          </div>

          {/* Floating Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-xs"
          >
            <div className="bg-surface/90 backdrop-blur-md border border-white/10 p-8 text-center shadow-2xl">
              <span className="font-serif text-2xl italic text-white block mb-4">"Pascal brings his designer's eye to every portrait."</span>
              <span className="text-xs uppercase tracking-widest text-muted">— Alina Wheeler</span>
            </div>
          </motion.div>
        </div>

        {/* Right: Copy */}
        <div className="order-1 md:order-2">
          <h3 className="text-sm font-sans font-medium text-green-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-green-400"></span> The Bridge
          </h3>
          <h2 className="font-serif text-3xl md:text-5xl text-text mb-8 leading-tight">
            I don't just take photos; <br />
            I <span className="text-white border-b border-white/30 pb-1">design</span> visual identities.
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