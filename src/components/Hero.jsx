import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        // bg-[#0B0914] 
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#0B0914] relative overflow-hidden pt-28 pb-16">

            
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-5 relative z-10 text-center flex flex-col items-center">

                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 shadow-[0_0_30px_rgba(192,38,211,0.3)]">
                        <div className="w-full h-full rounded-full bg-[#0B0914] overflow-hidden p-1">
                            <img
                                src="/Buddini.jpg" 
                                alt="Nadisha Buddini"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="px-4 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300 font-semibold text-xs md:text-sm tracking-wider backdrop-blur-sm">
                        AVAILABLE FOR INTERNSHIPS
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 font-medium mb-4"
                >
                    Hello, I'm <span className="text-white font-bold tracking-tight">Nadisha Buddini</span>
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 mb-6 pb-2 leading-tight"
                >
                    Full Stack Developer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-base md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed px-2"
                >
                    An enthusiastic ICT Undergraduate with hands-on experience in MERN Stack and Java. Dedicated to building efficient, user-centric software solutions and accessible UI/UX designs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-5"
                >
                    <Link to="contact" smooth={true} duration={500} className="w-full sm:w-auto">
                        <button className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)] hover:-translate-y-1 transition-all">
                            Hire Me
                        </button>
                    </Link>

                    
                    <a
                        href="/Nadisha_Buddini_Full_Stack_developer_Intern_CV.pdf"
                        download="Nadisha_Buddini_Full_Stack_developer_Intern_CV.pdf"
                        className="w-full sm:w-auto border border-fuchsia-500/50 bg-fuchsia-500/5 text-fuchsia-300 px-8 py-4 rounded-full font-bold hover:bg-fuchsia-500/20 transition-all text-center backdrop-blur-sm"
                    >
                        Download CV
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;