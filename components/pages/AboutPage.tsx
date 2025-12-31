import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5"
        >
          <div className="aspect-[3/4] bg-surface relative overflow-hidden rounded-sm">
            {/* Placeholder for Pascal's portrait */}
            <img 
              src="https://picsum.photos/800/1067?random=99" 
              alt="Pascal - Photographer" 
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 flex flex-col justify-center h-full"
        >
          <h1 className="font-serif text-5xl md:text-6xl text-text mb-8">
            The Designer <br /> Behind the Lens.
          </h1>
          
          <div className="space-y-6 text-muted text-lg font-light leading-relaxed">
            <p>
              Hi, I'm Pascal. Before I was a photographer, I spent two decades as a Product Designer, 
              obsessing over pixels, user flows, and aesthetic precision.
            </p>
            <p>
              I realized that the principles of great design—balance, hierarchy, and emotion—apply 
              perfectly to portraiture. I don't just "capture moments"; I construct images that solve 
              a problem for you. Whether that problem is getting a casting director to stop scrolling, 
              or convincing a client to trust you with their capital.
            </p>
            <p>
              My studio in Surrey is a calm, ego-free zone. We listen to good music, we drink good coffee, 
              and we work until we have the shot.
            </p>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted/50 mb-1">Philosophy</span>
              <span className="font-serif text-xl text-white">Quiet Luxury</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted/50 mb-1">Tools</span>
              <span className="font-serif text-xl text-white">Canon R5 & Profoto</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;