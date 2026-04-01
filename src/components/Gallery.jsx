import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-anton uppercase tracking-wide text-white">
                            Dynamic <br /> <span className="text-accent">Motion</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-6 md:mt-0 max-w-sm text-right"
                    >
                        <p className="text-gray-400 font-montserrat text-sm md:text-base">
                            La potenza incontra la gravità. Un'estetica visiva che cattura l'essenza dell'allenamento e della competizione.
                        </p>
                    </motion.div>
                </div>

                {/* Gallery Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden group"
                >
                    {/* Main Image */}
                    <img
                        src="./Images/Simo2.JPG"
                        alt="Dynamic Motion"
                        className="absolute w-full h-full object-cover object-[center_20%] md:object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Text inside image */}
                    <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-10">
                        <h3 className="text-3xl md:text-5xl font-anton text-white tracking-wider mb-2 drop-shadow-lg">
                            DEFY GRAVITY
                        </h3>
                        <div className="h-1 w-16 bg-accent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
