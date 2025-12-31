import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';

const Pricing: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center text-center">
      <SEO
        title="Photography Packages & Pricing | Vancouver Headshots"
        description="Transparent pricing for professional headshots and portrait sessions in Vancouver. Custom packages available for corporate teams."
        canonical="/pricing"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="font-serif text-4xl md:text-6xl text-text mb-6">
          Investment
        </h1>
        <div className="h-px w-24 bg-white/20 mx-auto mb-8"></div>
        <p className="text-lg text-muted font-light leading-relaxed mb-8">
          We offer bespoke packages tailored to the specific needs of our clients.
          Detailed pricing guides for 2025 are available upon request.
        </p>
        <div className="inline-block border border-white/10 bg-surface px-8 py-4 rounded-sm">
          <p className="text-sm uppercase tracking-widest text-muted">Session Fees start at $450</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;