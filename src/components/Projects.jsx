import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFigma, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projectsList = [
        {
            title: "Waste2Worth (Waste Management)",
            role: "Full-Stack Developer",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            desc: "Contributing to a comprehensive full-stack solution for waste collection and donation tracking. Developing secure RESTful APIs and managing version control.",
            github: "https://github.com/ashenlakmal/Waste2Worth",
            live: "https://waste2-worth-ten.vercel.app/",
            icon: <FaGithub className="text-xl" />,
            image: "/projects/W2W.png",
            color: "from-fuchsia-500 to-purple-600"
        },
        {
            title: "EchoViz - UI for Visually Impaired",
            role: "UI/UX Designer",
            tech: ["Figma", "WCAG Standards", "UX Research"],
            desc: "Designed an accessible user interface featuring high-contrast themes and intuitive navigation. Applied UX principles to ensure inclusivity for visually impaired users.",
            github: "", 
            live: "https://www.figma.com/proto/UkHp7jmTmTcOSpBBPk3isa/EchoViz?node-id=92-7&p=f&t=LDLek18PmXRCAphx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=92%3A7",
            icon: <FaFigma className="text-xl" />,
            image: "/projects/EchoViz.png",
            color: "from-cyan-400 to-blue-500"
        },
        {
            title: "Lost & Found System (LFMS)",
            role: "Lead Backend Developer",
            tech: ["PHP (OOP)", "HTML", "MySQL"],
            desc: "Collaborated in creating a system to track lost property using Object-Oriented Programming (OOP) principles. Focused on building a clean, responsive interface.",
            github: "https://github.com/buddiniweerakkodi/Lost-and-Found-Management-System",
            live: "https://lfms.atwebpages.com/public",
            icon: <FaGithub className="text-xl" />,
            image: "/projects/LFMS.png",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Smart Library Management System",
            role: "Independent Developer",
            tech: ["PHP", "HTML", "MySQL"],
            desc: "Developed an automated system for tracking book issues, returns, and member records. Optimized database queries for efficient data management.",
            github: "https://github.com/ashenlakmal/Library-Book-Borrowing-and-Management-System-LBBMS-",
            live: "https://library-book-borrowing-and-management-system-lbbms.atwebpages.com/",
            icon: <FaGithub className="text-xl" />,
            image: "/projects/LBBMS.png",
            color: "from-teal-400 to-cyan-500"
        },
        {
            title: "Touroopi - Travel System",
            role: "Web Developer",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            desc: "Assisted in developing a comprehensive web-based booking system. Supported frontend-backend connectivity to ensure a smooth and responsive user experience.",
            github: "https://github.com/ashenlakmal/Touroopi",
            live: "", 
            icon: <FaGithub className="text-xl" />,
            image: "/projects/Touroopi.png",
            color: "from-fuchsia-400 to-pink-500"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-[#0d0a1a] relative overflow-hidden">
            <div className="container relative z-10 px-5 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl"
                >
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Projects</span>
                </motion.h2>

                <div className="space-y-24">
                    {projectsList.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}
                            >
                                
                                <div className="relative w-full lg:w-1/2 group">
                                    <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500`}></div>
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#130f26] aspect-video">

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                            onError={(e) => {
                                                e.target.src = `https://placehold.co/800x450/130f26/d946ef?text=Image+Not+Found`;
                                            }}
                                        />

                                        
                                        <div className="absolute inset-0 bg-[#0B0914]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <a href={project.live || project.github} target="_blank" rel="noopener noreferrer" className={`bg-gradient-to-r ${project.color} p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:scale-110`}>
                                                <FaExternalLinkAlt className="text-xl" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="w-full px-4 space-y-5 lg:w-1/2 lg:px-8">
                                    <p className="text-sm font-bold tracking-widest uppercase text-fuchsia-400">{project.role}</p>
                                    <h3 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">{project.title}</h3>

                                    <div className="bg-[#130f26]/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl relative z-20 -ml-0 lg:-ml-12 mt-4 text-gray-400 leading-relaxed">
                                        <p>{project.desc}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 pt-4">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-sm font-semibold border rounded-full text-cyan-300 bg-cyan-900/20 border-cyan-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    
                                    <div className="flex flex-wrap gap-4 pt-4 mt-2">
                                       
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-5 py-2.5 rounded-xl font-bold shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-1`}
                                            >
                                                <FaExternalLinkAlt className="text-sm" />
                                                
                                                {project.github === "" ? "View Prototype" : "Live Demo"}
                                            </a>
                                        )}

                                        
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 px-5 py-2.5 rounded-xl font-bold hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all transform hover:-translate-y-1"
                                            >
                                                <FaGithub className="text-lg" />
                                                GitHub
                                            </a>
                                        )}
                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;