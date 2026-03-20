import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, Trophy } from 'lucide-react';

const About = () => {
    return (
        <section className="py-24 bg-[#111111] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-anton uppercase tracking-wide text-white mb-4">
                        Chi Sono
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 font-montserrat">
                            Sono Simone Gnagni, un atleta d'élite di Calisthenics Freestyle. La mia missione è spingere il corpo umano oltre i propri limiti fisici e mentali attraverso la pura forza, l'esplosività e il dinamismo.
                        </p>
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed font-montserrat">
                            Ogni allenamento è una sfida contro la gravità. Dalle competizioni internazionali agli allenamenti quotidiani street, porto sempre sul campo un'energia inesauribile e una dedizione assoluta. Il freestyle non è solo uno sport, è un'espressione di libertà.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {/* Stat Cards */}
                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors group">
                            <Dumbbell className="text-accent w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-anton text-white mb-2">Forza Bruta</h3>
                            <p className="text-gray-400 font-montserrat text-sm">Controllo totale del corpo in ogni skill statica.</p>
                        </div>

                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors group">
                            <Flame className="text-accent w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-anton text-white mb-2">Dinamismo</h3>
                            <p className="text-gray-400 font-montserrat text-sm">Transizioni esplosive e combinazioni freestyle uniche.</p>
                        </div>

                        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-colors group sm:col-span-2">
                            <Trophy className="text-accent w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-anton text-white mb-2">Mentalità d'Acciaio</h3>
                            <p className="text-gray-400 font-montserrat text-sm">Preparazione mentale di altissimo livello per affrontare le competizioni più dure in Italia e nel mondo.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
