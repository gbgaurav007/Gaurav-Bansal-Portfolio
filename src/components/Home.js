import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const skills = ["Programming...", "Full Stack Development...", "Web App Development..."];

const Home = () => {
    const [currentSkill, setCurrentSkill] = useState("");
    const [skillIndex, setSkillIndex] = useState(0);
    const [typing, setTyping] = useState(true);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let typingTimeout;

        const cycleSkills = () => {
            if (typing) {
                if (currentSkill.length < skills[skillIndex].length) {
                    setCurrentSkill(skills[skillIndex].slice(0, currentSkill.length + 1));
                } else {
                    setTyping(false);
                }
            } else {
                if (currentSkill.length > 0) {
                    setCurrentSkill(currentSkill.slice(0, -1));
                } else {
                    setSkillIndex((skillIndex + 1) % skills.length);
                    setTyping(true);
                }
            }
        };

        typingTimeout = setTimeout(cycleSkills, typing ? 100 : 80);

        return () => clearTimeout(typingTimeout);
    }, [currentSkill, typing, skillIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-slate-900 text-white p-4 top-0">
            <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
                <img
                    src="assets/img.jpeg"
                    alt="Gaurav Bansal"
                    className="w-1/2 h-auto rounded-full border-b border-slate-300 shadow-lg"
                />
            </motion.div>

            <motion.div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <h1 className="text-xl md:text-2xl">
                        Hi, my name is <span className="text-cyan-400 text-2xl md:text-4xl tracking-wide">Gaurav Bansal</span>.
                    </h1>
                    <p className="text-2xl md:text-4xl">I'm passionate and skilled</p>
                    <p className="text-2xl md:text-3xl">
                        in <span className="font-mono text-3xl md:text-5xl text-cyan-400">{currentSkill}</span>
                    </p>
                </motion.div>

                <motion.div
                    className="flex justify-center md:justify-start space-x-4 mt-4"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    <motion.a
                        href="https://github.com/gbgaurav007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-3 text-2xl text-cyan-400 border-2 border-cyan-400 hover:text-black hover:bg-cyan-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <FiGithub />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/gauravbansal007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-3 text-2xl text-cyan-400 border-2 border-cyan-400 hover:text-black hover:bg-cyan-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                        <FaLinkedinIn />
                    </motion.a>
                </motion.div>

                <motion.a
                    href="assets/Gaurav_Bansal_Resume.pdf"
                    download
                    className="inline-block mt-6 px-6 py-2 border-2 border-cyan-400 bg-cyan-400 text-slate-900 rounded-2xl hover:bg-transparent hover:text-cyan-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="mr-2">Download Resume</span>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default Home;