import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Download } from 'lucide-react';

const IsisVlotman: React.FC = () => {
    return (
        <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center">
            <SEO
                title="Isis Vlotman | Private Gallery Download"
                description="Private download page for Isis Vlotman's photography session."
                noIndex={true} // Private page, should probably not be indexed
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-16"
            >
                <span className="text-xs font-sans font-medium text-green-400 uppercase tracking-widest mb-4 block">
                    Client Gallery
                </span>
                <h1 className="font-serif text-5xl md:text-7xl text-text mb-6">
                    Isis Vlotman
                </h1>
                <p className="text-xl text-muted font-light leading-relaxed">
                    It was a pleasure capturing your session.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 gap-8 w-full max-w-2xl mb-16"
            >
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-subtle">
                    <img
                        src="/img/download_isis_vlotman_web1.jpg"
                        alt="Isis Vlotman Portrait 1"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* <div className="aspect-[5/4] overflow-hidden rounded-sm bg-subtle">
                    <img
                        src="/img/download_isis_vlotman_web1.jpg"
                        alt="Isis Vlotman Portrait 2"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div> */}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center space-y-8"
            >
                <div className="p-8 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm max-w-xl mx-auto">
                    <h3 className="font-serif text-2xl text-white mb-4">Ready for Download</h3>
                    <p className="text-muted text-sm mb-8 leading-relaxed">
                        Please download all files below.
                        <br />
                        <span className="text-red-400 font-medium mt-2 block">
                            Note: This link will expire in 2 months and files will be permanently deleted.
                        </span>
                    </p>

                    <a
                        href="https://drive.google.com/drive/folders/1cQDW5a7ONCC_Bl3sj4PGmuGHfVf7CoQM?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                        <Download size={20} />
                        Download Files
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default IsisVlotman;
