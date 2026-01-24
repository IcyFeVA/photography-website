import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Zap, Coffee, Calendar } from 'lucide-react';
import SEO from '../SEO';
import BookingForm from '../BookingForm';
import { IS_BOOKING_OPEN } from '../../constants';

const Inquire: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <SEO
        title="Book a Session | Vancouver Headshot Photographer"
        description="Book your headshot or portrait session with Pascal Zirn. Check availability and secure your spot online."
        canonical="/inquire"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="font-serif text-5xl md:text-7xl text-text mb-6">
          The Studio Experience
        </h1>
        <p className="text-xl text-muted font-light">
          We operate differently. Every session is a collaboration, designed for results.
        </p>
      </motion.div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-surface/30 p-8 border border-white/5 rounded-sm">
          <Monitor className="w-8 h-8 text-white mb-6" />
          <h3 className="font-serif text-xl text-white mb-3">Tethered Capture</h3>
          <p className="text-sm text-muted leading-relaxed">
            We shoot connected to a 27" 4K color-calibrated monitor. You see your images in real-time. We adjust posture, expression, and lighting on the fly. No guessing.
          </p>
        </div>
        <div className="bg-surface/30 p-8 border border-white/5 rounded-sm">
          <Zap className="w-8 h-8 text-white mb-6" />
          <h3 className="font-serif text-xl text-white mb-3">Hybrid Lighting</h3>
          <p className="text-sm text-muted leading-relaxed">
            We utilize a mix of high-end Profoto strobes and natural window light to sculpt your features. The look is dimensional, sharp, and flattering.
          </p>
        </div>
        <div className="bg-surface/30 p-8 border border-white/5 rounded-sm">
          <Coffee className="w-8 h-8 text-white mb-6" />
          <h3 className="font-serif text-xl text-white mb-3">Zero Rush</h3>
          <p className="text-sm text-muted leading-relaxed">
            Sessions are blocked with ample buffer time. We don't watch the clock. We create a relaxed environment where you can truly be yourself.
          </p>
        </div>
      </div> */}

      {/* Calendly / Booking Action - HIDDEN FOR NOW
      <div className="max-w-2xl mx-auto bg-surface border border-white/10 p-12 text-center rounded-sm">
        <Calendar className="w-12 h-12 text-green-400 mx-auto mb-6" />
        <h2 className="font-serif text-3xl text-white mb-4">Ready to book?</h2>
        <p className="text-muted mb-8">
          Check live availability and secure your deposit directly via our booking calendar.
        </p>
        <button className="bg-white text-black font-sans font-medium px-8 py-4 uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto">
          Open Booking Calendar
        </button>
        <p className="mt-6 text-xs text-muted/40">
          Powered by Calendly. Secure payment via Stripe.
        </p>
      </div> */}

      {IS_BOOKING_OPEN ? (
        <BookingForm />
      ) : (
        <div className="max-w-2xl mx-auto text-center py-20 border border-white/10 bg-surface/30 px-6 rounded-sm">
          <h2 className="font-serif text-3xl text-white mb-6">Currently Fully Booked</h2>
          <p className="text-muted text-lg leading-relaxed">
            I am currently fully booked for February. <br />
            Please check back later for new openings.
          </p>
        </div>
      )}
    </section>
  );
};

export default Inquire;