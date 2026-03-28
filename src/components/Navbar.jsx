import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    
    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
    ];

    return (
        
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto px-8 py-3 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 rounded-full z-50 flex justify-between items-center transition-all duration-300">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-extrabold text-white cursor-pointer tracking-widest mr-8">
                BUDDINI<span className="text-fuchsia-500">.</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-1">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.to}
                        smooth={true}
                        duration={500}
                        className="px-4 py-2 text-gray-300 font-medium rounded-full hover:text-white hover:bg-white/10 cursor-pointer transition-all duration-300"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Let's Talk Button (Desktop) */}
            <div className="hidden md:block ml-8">
                <Link to="contact" smooth={true} duration={500}>
                    <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)] hover:scale-105 transition-all">
                        Let's Talk
                    </button>
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
                    {isOpen ? <FaTimes className="text-fuchsia-400" /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-16 left-0 w-full bg-[#130f26]/95 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col items-center py-6 space-y-4 shadow-2xl md:hidden"
                >
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            smooth={true}
                            duration={500}
                            className="text-gray-300 hover:text-fuchsia-400 font-semibold text-lg cursor-pointer w-full text-center py-2"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="contact" onClick={() => setIsOpen(false)} smooth={true} duration={500} className="w-[80%] pt-4">
                        <button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg w-full">
                            Let's Talk
                        </button>
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;