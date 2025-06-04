import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import experiences from '../data/experience';

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2 }
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
        <div ref={ref} id="experience" className="bg-slate-900 text-white pt-40 px-8 min-h-screen">
            <motion.h2
                className="text-3xl md:text-4xl font-semibold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span className="text-white">Work</span> <span className="text-cyan-400">Experience</span>
            </motion.h2>

            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {experiences.map((exp, index) => {
                    const isOpen = index === openIndex;

                    return (
                        <motion.div
                            key={index}
                            className="rounded-lg overflow-hidden bg-slate-800"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                        >
                            <button
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                                className={`w-full flex justify-between items-center px-6 py-4 text-left bg-gradient-to-r ${isOpen ? 'from-cyan-500 to-purple-700' : 'from-slate-700 to-slate-800'
                                    } text-white font-semibold text-lg transition-colors duration-300`}
                            >
                                <div>
                                    {exp.role} <span className="text-cyan-200">@ {exp.company}</span>
                                </div>
                                <div className="text-white text-xl">
                                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="px-6 pb-6 pt-4 bg-slate-800"
                                    >
                                        <div className="flex-col items-center mb-4">
                                            {exp.logo ? (
                                                <img src={exp.logo} alt={exp.company} className="size-24 object-contain mb-4" />
                                            ) : (
                                                <div className="text-xl font-bold mb-4">{exp.company}</div>
                                            )}

                                            <div className="flex items-center gap-2 text-sm text-cyan-300">
                                                <FaMapMarkerAlt className="inline" /> {exp.location}
                                            </div>
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-cyan-400 flex items-center gap-1"
                                            >
                                                {new URL(exp.website).hostname} <FaExternalLinkAlt size={12} />
                                            </a>

                                        </div>

                                        <p className="text-sm text-white mb-4">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {exp.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-cyan-600/20 text-cyan-300 text-sm px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;