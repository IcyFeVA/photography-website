import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Clock, Download, Image as ImageIcon, Star } from 'lucide-react';
import SEO from '../SEO';

const Offers: React.FC = () => {
    return (
        <section className="pt-32 pb-24 px-6 w-full min-h-screen relative overflow-hidden bg-background">
            <SEO
                title="Actor & Artist Headshot Sessions | Vancouver"
                description="Choose your headshot session. Essential at $99 or Premium at $179 — professional actor and artist headshots in Vancouver."
                canonical="/offers"
            />

            {/* Background Decor */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                {/* Text Content */}
                <div className="flex-1 space-y-6 z-10">
                    <div className="inline-flex items-center space-x-2 bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-sans tracking-widest uppercase">
                        <Star className="w-3 h-3 fill-white text-white" />
                        <span>Actor & Artist Sessions</span>
                    </div>

                    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-text leading-[1.1]">
                        Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white/70 italic">Portfolio.</span>
                    </h1>

                    <p className="text-xl text-muted font-light leading-relaxed max-w-xl">
                        A premium, all-inclusive headshot experience designed exclusively for <strong className="text-white font-medium">Actors & Artists</strong>. Get noticed by casting directors and agencies.
                    </p>

                    {/* Essential — $99 */}
                    <div className="bg-surface/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-white/30 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-400 to-transparent"></div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-sans tracking-widest uppercase text-muted">Essential</span>
                        </div>
                        <div className="flex items-end gap-4 mb-6">
                            <span className="text-6xl lg:text-7xl font-medium text-white tracking-tight">$99</span>
                            <span className="text-muted text-sm pb-2 uppercase tracking-wide">All-inclusive</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-300">
                                <Clock className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>One Hour Session:</strong> A focused, efficient session to capture your best look.</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <Camera className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Up to Two Outfits:</strong> Theatrical and commercial looks covered.</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <ImageIcon className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Two Master Edits:</strong> High-end retouching that keeps you looking natural and striking.</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <Download className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>All High-Res JPGs:</strong> Every edited file delivered in full resolution, ready to submit.</span>
                            </li>
                        </ul>
                        <Link
                            to="/inquire"
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-white/10 text-white font-sans font-medium px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm group/btn border border-white/20 hover:border-white mt-6"
                        >
                            <span>Book Essential Session</span>
                            <span className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 inline-block">→</span>
                        </Link>
                    </div>

                    {/* Premium — $179 */}
                    <div className="bg-surface/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-white/30 transition-colors duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gray-500 to-transparent"></div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-sans tracking-widest uppercase text-muted">Premium</span>
                        </div>
                        <div className="flex items-end gap-4 mb-6">
                            <span className="text-6xl lg:text-7xl font-medium text-white tracking-tight">$179</span>
                            <span className="text-muted text-sm pb-2 uppercase tracking-wide">All-inclusive</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-300">
                                <Clock className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Two Hour Session:</strong> Relaxed, unhurried environment to capture your authentic self.</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <Camera className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Four Outfits:</strong> Showcase incredible range across theatrical and commercial looks.</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <ImageIcon className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>Four Master Edits:</strong> High-end retouching that keeps you looking natural and striking.</span>
                            </li>
                            <li className="flex items-start text-gray-300">
                                <Download className="w-5 h-5 mr-4 text-white shrink-0 mt-0.5" />
                                <span className="text-base"><strong>JPG + RAW Files:</strong> Full-resolution JPGs and original RAW files — complete creative control.</span>
                            </li>
                        </ul>
                        <Link
                            to="/inquire"
                            className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black font-sans font-medium px-10 py-4 text-sm uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 hover:text-black rounded-sm group/btn mt-6"
                        >
                            <span>Book Premium Session</span>
                            <span className="ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 inline-block">→</span>
                        </Link>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="flex-1 w-full grid grid-cols-2 gap-4 relative z-10 lg:sticky lg:top-32">
                    {/* Left column */}
                    <div className="space-y-4 mt-12">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden transition-all duration-700 hover:-translate-y-2 border border-white/5 shadow-2xl">
                            <img src="/img/front21.png" alt="Actor Headshot" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[1/1] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-700 border border-white/5 shadow-2xl">
                            <img src="/img/theatrical1.png" alt="Actor Headshot Moody" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right column */}
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
                </div>

            </div>
        </section>
    );
};

export default Offers;
