import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    const [result, setResult] = useState("");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
        setUserAnswer("");
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        if (parseInt(userAnswer) !== num1 + num2) {
            setResult("CAPTCHA Failed! Please check the math.");
            generateCaptcha();
            return;
        }

        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1185652d-f309-45fd-8f4b-0f9011222a4f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
            generateCaptcha();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#0B0914] relative overflow-hidden">

            <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 px-5 mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-4xl font-extrabold tracking-tight text-center text-white md:text-5xl"
                >
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
                </motion.h2>

                <div className="flex flex-col max-w-6xl gap-16 mx-auto lg:flex-row">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:w-1/3"
                    >
                        <h3 className="mb-4 text-3xl font-bold text-white">Let's build something awesome!</h3>
                        <p className="mb-8 leading-relaxed text-gray-400">
                            Feel free to reach out for collaborations, full-time opportunities, or just a friendly chat about technology and design.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-5 group">
                                <div className="p-4 transition-all duration-300 border bg-white/5 rounded-xl border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Email</p>
                                    <p className="font-bold text-gray-200">nadishabuddini12@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5 group">
                                <div className="p-4 text-purple-400 transition-all duration-300 border bg-white/5 rounded-xl border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Location</p>
                                    <p className="font-bold text-gray-200">Gampaha, Sri Lanka</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-5 group">
                                <div className="p-4 text-purple-400 transition-all duration-300 border bg-white/5 rounded-xl border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50">
                                    <FaPhoneAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Phone</p>
                                    <p className="font-bold text-gray-200">+94 764425415</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex pt-6 space-x-4 border-t border-white/10">
                            <a href="https://linkedin.com/in/buddini-weerakkodi-8244043b8/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-4 rounded-full text-gray-300 hover:text-white hover:bg-[#0077b5] border border-white/10 transition-all duration-300">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="https://github.com/buddiniweerakkodi" target="_blank" rel="noopener noreferrer" className="p-4 text-gray-300 transition-all duration-300 border rounded-full bg-white/5 hover:text-white hover:bg-gray-700 border-white/10">
                                <FaGithub className="text-xl" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-[#130f26]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
                            <form className="space-y-6" onSubmit={onSubmit}>

                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="ml-1 text-sm font-medium text-gray-400">Your Name</label>
                                        <input type="text" name="name" required placeholder="John Doe" className="w-full px-5 py-4 text-white placeholder-gray-600 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-fuchsia-500 focus:bg-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="ml-1 text-sm font-medium text-gray-400">Your Email</label>
                                        <input type="email" name="email" required placeholder="john@example.com" className="w-full px-5 py-4 text-white placeholder-gray-600 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-cyan-500 focus:bg-white/10" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-medium text-gray-400">Subject</label>
                                    <input type="text" name="subject" required placeholder="Job Inquiry" className="w-full px-5 py-4 text-white placeholder-gray-600 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-purple-500 focus:bg-white/10" />
                                </div>

                                <div className="space-y-2">
                                    <label className="ml-1 text-sm font-medium text-gray-400">Message</label>
                                    <textarea rows="4" name="message" required placeholder="Hello Nadisha, I would like to..." className="w-full px-5 py-4 text-white placeholder-gray-600 transition-all border resize-none rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-fuchsia-500 focus:bg-white/10"></textarea>
                                </div>

                                {/* Math CAPTCHA */}
                                <div className="flex flex-col items-start justify-between gap-4 p-5 border bg-black/30 rounded-xl border-white/5 sm:flex-row sm:items-center">
                                    <label className="text-sm font-medium text-gray-300">
                                        Security Check: <span className="ml-2 text-xl font-extrabold text-fuchsia-400">{num1} + {num2} = ?</span>
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        placeholder="Answer"
                                        className="w-full px-5 py-3 text-center text-white border sm:w-32 rounded-xl bg-white/10 border-white/20 focus:outline-none focus:border-cyan-500"
                                    />
                                </div>

                                <button type="submit" className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(192,38,211,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                                    Send Message
                                </button>
                            </form>

                            {result && (
                                <div className={`mt-6 p-4 text-center rounded-xl font-bold ${result.includes("Failed") || result.includes("Error") ? "bg-red-500/10 text-red-400 border border-red-500/30" : result === "Sending...." ? "bg-white/5 text-cyan-400" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"}`}>
                                    {result}
                                </div>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;