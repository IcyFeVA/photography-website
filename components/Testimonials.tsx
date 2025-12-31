import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 md:text-center">
        <h3 className="font-serif text-3xl md:text-4xl text-text mb-4">Trusted by Professionals</h3>
        <p className="text-muted font-light text-lg">Results that resonate across industries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-surface/50 p-8 border border-white/5 flex flex-col justify-between hover:bg-surface transition-colors duration-300">
            <div>
              <Quote className="w-6 h-6 text-white/20 mb-6" />
              <p className="text-muted/90 leading-relaxed text-sm mb-6">"{t.text}"</p>
            </div>
            <div>
              <p className="text-white font-medium font-serif tracking-wide">{t.author}</p>
              <p className="text-xs text-white/40 uppercase tracking-wider mt-1">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;