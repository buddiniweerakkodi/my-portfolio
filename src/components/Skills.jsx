import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            color: "from-fuchsia-500 to-pink-500", 
            skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap CSS"]
        },
        {
            title: "Backend & Database",
            color: "from-cyan-500 to-blue-500", 
            skills: ["Node.js", "PHP (OOP)", "MongoDB", "MySQL", "MS SQL Server"]
        },
        {
            title: "Programming Languages",
            color: "from-purple-500 to-indigo-500", 
            skills: ["Java (OOP)", "JavaScript", "C", "C#", "Python (Basic)", "PHP"]
        },
        {
            title: "Tools & Design",
            color: "from-teal-400 to-emerald-500", 
            skills: ["Git", "GitHub", "Postman", "Figma (UI/UX)"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-[#0B0914] relative">
            <div className="container mx-auto px-5 relative z-10">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight"
                >
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expertise</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#130f26]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-[#130f26] transition-all duration-300 group"
                        >
                            
                            <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:w-full transition-all duration-500`}></div>

                            <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/5 text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 hover:border-fuchsia-500/50 hover:text-fuchsia-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;