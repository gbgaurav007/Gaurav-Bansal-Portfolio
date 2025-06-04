import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills';

const Skills = () => {
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
    <div ref={ref} id="skills" className="min-h-screen bg-slate-900 text-white pt-40 px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-white">My</span> <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg bg-slate-800 hover:bg-slate-700 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center mb-4">
              <div className="text-3xl text-cyan-400 mr-3">
                {skillCategory.category === 'Programming'}
                {skillCategory.category === 'Front-end Development'}
                {skillCategory.category === 'Back-end Development'}
                {skillCategory.category === 'Databases'}
                {skillCategory.category === 'Tools and Technologies'}
              </div>
              <h3 className="text-3xl">{skillCategory.category}</h3>
            </div>
            <ul className="space-y-2">
              {skillCategory.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center text-lg">
                  <span className="mr-2">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;