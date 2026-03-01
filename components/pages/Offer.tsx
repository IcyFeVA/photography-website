import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Camera, Clock, Image as ImageIcon, Star } from 'lucide-react';
import SEO from '../SEO';

const Offer: React.FC = () => {
    return (
        <section className="pt-32 pb-24 px-6 w-full min-h-screen relative overflow-hidden bg-background">
            <SEO
                title="Exclusive Actor & Artist Headshot Offer | Vancouver"
                description="Book your $179 all-inclusive headshot session. 2 hours, 4 edited photos, 4 outfits. Exclusive for actors and artists."
                canonical="/offer"
            />

            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-8 z-10"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase">
                        <Star className="w-3 h-3 fill-white text-white" />
                        <span>Limited Time Ad Offer</span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-text leading-[1.1]">
                        Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white/70 italic">Portfolio.</span>
                    </h1>

                    <p className="text-xl text-muted font-light leading-relaxed max-w-xl">
                        A premium, all-inclusive headshot experience designed exclusively for <strong className="text-white font-medium">Actors & Artists</strong>. Get noticed by casting directors and agencies.
                    </p>

                    <div className="bg-surface/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-white/30 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-500 to-transparent"></div>
                        <div className="flex flex-col mb-8 mt-2">
                            <div className="flex items-center gap-4 mb-1">
                                <span className="text-3xl lg:text-4xl text-gray-500 line-through decoration-red-500/50 font-light">$579</span>
                                <span className="bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Save $400</span>
                            </div>
                            <div className="flex items-end gap-4">
                                <span className="text-7xl lg:text-8xl font-medium text-white tracking-tight">$179</span>
                                <span className="text-muted text-sm pb-3 uppercase tracking-wide">All-inclusive</span>
                            </div>
                        </div>

                        <ul className="space-y-4">
                            <motion.li
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                                className="flex items-start text-gray-300"
                            >
                                <Clock className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Two Hour Session:</strong> Relaxed, unhurried environment to capture your authentic self.</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                className="flex items-start text-gray-300"
                            >
                                <Camera className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Four Outfits:</strong> Showcase incredible range across theatrical and commercial looks.</span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                                className="flex items-start text-gray-300"
                            >
                                <ImageIcon className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Four Master Edits:</strong> High-end retouching that keeps you looking natural and striking.</span>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="space-y-4 pt-4">
                        <Link
                            to="/inquire"
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black font-sans font-medium px-10 py-4 text-sm uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 hover:text-black rounded-sm group"
                        >
                            <span>Book This Offer Now</span>
                            <motion.span
                                className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 inline-block"
                            >
                                →
                            </motion.span>
                        </Link>
                        <p className="text-xs text-red-500 uppercase tracking-wider font-sans">
                            * Mention this ad when booking! Offer ends on March 31st, 2026.
                        </p>
                    </div>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex-1 w-full grid grid-cols-2 gap-4 relative z-10"
                >
                    {/* Top Left Image */}
                    <div className="space-y-4 mt-12">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden transition-all duration-700 hover:-translate-y-2 border border-white/5 shadow-2xl">
                            <img src="/img/front21.png" alt="Actor Headshot" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[1/1] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-700 border border-white/5 shadow-2xl">
                            <img src="/img/theatrical1.png" alt="Actor Headshot Moody" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-700 border border-white/5 shadow-2xl">
                            <img src="/img/front20.png" alt="Artist Headshot" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-surface/50 border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                            <div className="flex text-white mb-3">
                                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-white" />)}
                            </div>
                            <p className="text-sm text-gray-300 italic mb-4 leading-relaxed">
                                "Pascal understood my casting type immediately. The shots aren't just pretty; they are getting me into rooms I couldn't access before."
                            </p>
                            <p className="text-xs text-muted font-medium uppercase tracking-widest">— Elena R., Actress</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Offer;
