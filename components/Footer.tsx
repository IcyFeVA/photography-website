import React, { useMemo } from 'react';
import { getBookingMonths } from '../utils/dateUtils';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { current } = useMemo(() => getBookingMonths(), []);

  return (
    <footer id="footer" className="bg-surface border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">

          {/* Booking CTA */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Ready to define <br /> your image?
            </h2>

            <div className="inline-block">
              <Link
                key="inquire"
                to="/inquire"
                className="group flex items-center gap-4 text-xl md:text-2xl text-white border-b border-white/20 pb-2 hover:border-white transition-all"
              >
                <span>Book a Session</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-background/50 border border-white/10 p-6 max-w-md backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <div>
                  <p className="text-sm text-text font-medium mb-1">Limited Availability</p>
                  {/* <p className="text-xs text-muted leading-relaxed">
                    Limited to 8 bespoke sessions per month to ensure premium quality.
                    <span className="text-white font-semibold"> 2 spots remaining for {current}.</span>
                  </p> */}
                  <p className="text-xs text-muted leading-relaxed">
                    Limited to 8 bespoke sessions per month to ensure premium quality.
                    {/* <span className="text-white font-semibold"> 8 spots available for March 2026.</span> */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-end md:items-end space-y-8">
            <div className="text-left md:text-right space-y-2">
              <p className="text-xs font-sans uppercase tracking-widest text-muted">Home Studio Location</p>
              <p className="text-white text-lg font-serif">North Delta, BC</p>
              <p className="text-muted font-light">Serving the Greater Vancouver Area</p>
            </div>
            {/* 
            <div className="flex gap-6">
              <a href={SOCIAL_LINKS.instagram} className="text-muted hover:text-white transition-colors">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="text-muted hover:text-white transition-colors">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href={SOCIAL_LINKS.email} className="text-muted hover:text-white transition-colors">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-muted/40 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Pascal Zirn Photography. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Headshots & Portraits for actors, artists, 'normal people', models, and professionals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;