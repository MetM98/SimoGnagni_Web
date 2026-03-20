import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0a0a] pt-24 pb-8 relative overflow-hidden border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-5xl md:text-8xl font-anton text-white uppercase tracking-tighter mb-6">
                        Join the <span className="text-accent">Movement</span>
                    </h2>
                    <p className="text-gray-400 font-montserrat text-lg md:text-2xl max-w-2xl mx-auto mb-10">
                        Seguimi nel mio percorso. Allenamenti, lifestyle e dietro le quinte delle competizioni.
                    </p>

                    <a
                        href="https://instagram.com/symo_freestyle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-accent text-white font-anton text-xl md:text-2xl tracking-widest uppercase px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,69,0,0.6)] group"
                    >
                        <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                        @symo_freestyle
                        <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all absolute right-4" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="pt-12 mt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-500 font-montserrat text-sm font-medium">
                        &copy; {new Date().getFullYear()} Simone Gnagni. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-500 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                {/* Huge Background Text at the very bottom */}
                <h1 className="text-[15vw] leading-none font-anton text-white/5 uppercase tracking-tighter mt-12 pointer-events-none select-none">
                    CALISTHENICS
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
