import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';

const Headshots: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <SEO
        title="Vancouver Headshots | Actor & Corporate Photography"
        description="Professional headshots for actors and corporate clients in Vancouver. Theatrical and commercial looks designed to get you booked."
        canonical="/headshots"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl"
      >
        <span className="text-xs font-sans font-medium text-green-400 uppercase tracking-widest mb-4 block">
          For Actors, Artists, & Professionals
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-text mb-8">
          The Professional's Instrument.
        </h1>
        <p className="text-xl text-muted font-light leading-relaxed max-w-2xl mb-12">
          Your headshot is not just a picture; it's your primary marketing tool.
          We strip away the vanity to reveal the character. Whether you need a
          theatrical look for drama or a commercial look for lifestyle, we design
          images that get you in the room.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div className="space-y-4">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src="/img/theatrical1.png" alt="Theatrical Headshot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <h3 className="font-serif text-2xl text-white">Theatrical</h3>
          <p className="text-muted text-sm leading-relaxed">High contrast, moody, and intense. Designed for dramatic roles, villains, and serious character work. We focus on the eyes and the subtext.</p>
        </div>
        <div className="space-y-4 md:mt-24">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src="/img/commercial2.png" alt="Commercial Headshot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <h3 className="font-serif text-2xl text-white">Commercial</h3>
          <p className="text-muted text-sm leading-relaxed">Approachable, warm, and energetic. Perfect for commercials, sitcoms, and lifestyle print. We use softer lighting to highlight your natural charisma.</p>
        </div>
      </div>
    </section>
  );
};

export default Headshots;