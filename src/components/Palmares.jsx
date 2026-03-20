import React from 'react';
import { motion } from 'framer-motion';

const events = [
    {
        year: "2023",
        title: "Burningate International Cup",
        category: "Freestyle Pro",
        description: "Partecipazione all'evento internazionale più prestigioso d'Italia, sfidando atleti da tutta Europa.",
    },
    {
        year: "2022",
        title: "Campionato Italiano Calisthenics",
        category: "Categoria Assoluta",
        description: "Prestazione di rilievo nei campionati nazionali con routine inedite ad alta difficoltà.",
    },
    {
        year: "2021",
        title: "Street Battle Nazionale",
        category: "1vs1 Battles",
        description: "Dominio nelle sfide 1 contro 1 a eliminazione diretta, mostrando resistenza e creatività.",
    }
];

const Palmares = () => {
    return (
        <section className="py-24 bg-anthracite relative">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-anton uppercase tracking-wide text-white mb-4">
                        Palmarés & Eventi
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto" />
                </motion.div>

                <div className="relative border-l-2 border-accent/30 pl-8 md:pl-0 md:border-none space-y-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline dot for mobile */}
                            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[41px] top-6 md:hidden"></div>

                            {/* Timeline Center line & dot for desktop */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-anthracite z-10 top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(255,69,0,0.6)]"></div>
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-accent/20 top-0 -z-0"></div>

                            {/* Content Box */}
                            <div className={`w-full md:w-[45%] bg-[#1f1f1f] p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-2 shadow-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                }`}>
                                <span className="text-accent font-anton text-xl tracking-wider mb-2 block">{event.year}</span>
                                <h3 className="text-2xl font-anton text-white mb-1">{event.title}</h3>
                                <span className="text-gray-400 font-montserrat text-sm uppercase tracking-wide font-semibold block mb-4">{event.category}</span>
                                <p className="text-gray-300 font-montserrat leading-relaxed">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Palmares;
