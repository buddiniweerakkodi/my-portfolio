import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#0d0a1a] relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-5 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Me</span>
                    </h2>

                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

                        <div className="lg:w-2/3 text-lg text-gray-400 leading-relaxed space-y-6">
                            <p>
                                I am an enthusiastic Bachelor of Information and Communication Technology (Hons) undergraduate at Uva Wellassa University. I have a strong passion for Full-Stack development and continuously enhancing my technical skills in collaborative environments.
                            </p>
                            <p>
                                My expertise lies in the <strong className="text-fuchsia-300 font-semibold">MERN Stack</strong> and <strong className="text-cyan-300 font-semibold">Java (OOP)</strong>. I have a solid foundation in developing web-based management systems, network configurations, and designing accessible UI/UX solutions using Figma.
                            </p>
                            <p>
                                Whether it's optimizing complex backend database queries or engineering high-contrast navigation patterns for visually impaired users, I am dedicated to building efficient, user-centric software solutions.
                            </p>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <div className="relative group">

                                <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

                                <div className="relative bg-[#130f26]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 mb-4">Education</h3>

                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-white font-bold text-lg">Bachelor of ICT (Hons)</p>
                                            <p className="text-gray-400 text-sm">Uva Wellassa University</p>
                                        </div>

                                        <div className="pt-4 border-t border-white/10">
                                            <p className="text-gray-400 text-sm mb-1">Current GPA</p>
                                            <p className="text-3xl font-extrabold text-cyan-400">3.57</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;