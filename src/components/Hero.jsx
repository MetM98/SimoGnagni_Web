import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
        >
            {/* 1. Base Layer (Background) */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    y: backgroundY,
                    backgroundImage: `url('./Images/Simo1.JPG')`,
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* 2. Middle Layer (Giant Text) */}
            <motion.div
                style={{ y: textY }}
                className="absolute z-10 w-full flex flex-col items-center justify-center top-[40%] md:top-1/2 -translate-y-1/2 px-4"
            >
                <h1 className="text-[16vw] md:text-[12vw] font-anton text-white tracking-widest leading-none drop-shadow-2xl opacity-90 text-center whitespace-nowrap overflow-visible">
                    SYMO<br className="md:hidden" /> FREESTYLE
                </h1>
                <p className="text-sm md:text-3xl font-montserrat tracking-[0.2em] md:tracking-[0.3em] text-accent mt-4 font-bold uppercase drop-shadow-lg text-center">
                    BEST ITALIAN FREESTYLER
                </p>
            </motion.div>

            {/* 3. Top Layer (Foreground Cutout) */}
            <motion.div
                className="absolute bottom-0 w-full h-[75vh] md:h-[85vh] z-20 pointer-events-none"
                style={{
                    y: foregroundY,
                    backgroundImage: `url('./Images/Simo1-cutout.png')`,
                    backgroundPosition: 'bottom center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Gradient Overlay at bottom for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#111111] to-transparent z-30" />

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 text-white flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-sm font-montserrat uppercase tracking-widest text-gray-400">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ArrowDown className="text-accent w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
