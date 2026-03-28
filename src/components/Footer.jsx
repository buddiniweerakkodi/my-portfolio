import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#06040a] text-gray-400 py-12 text-center border-t border-white/5 relative overflow-hidden">

            {/* Footer Top Glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50"></div>

            <div className="container mx-auto px-5 relative z-10">

                <div className="flex flex-col items-center justify-center mb-8">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                        <h2 className="text-3xl font-extrabold tracking-widest text-white mb-2">
                            BUDDINI<span className="text-fuchsia-500">.</span>
                        </h2>
                    </Link>
                    <p className="text-sm text-gray-500 max-w-sm mt-2">
                        Building efficient, user-centric software solutions & accessible UI/UX designs.
                    </p>
                </div>

                <div className="w-24 h-[1px] bg-white/10 mx-auto mb-8"></div>

                <p className="text-gray-600 text-sm font-medium">
                    &copy; {currentYear} Nadisha Buddini. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;