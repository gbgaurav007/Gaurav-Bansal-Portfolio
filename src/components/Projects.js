import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { GrDeploy } from "react-icons/gr";
import projects from '../data/projects';

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

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
    <div id="projects" ref={ref} className="min-h-screen bg-slate-900 text-white pt-40 px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-white">My</span> <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-500 ease-in-out"
            />
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-cyan-400 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-bold mb-2 text-black">{project.title}</h3>
              <p className="text-lg text-center mb-4 text-black">{project.description}</p>
              <div className="flex space-x-5">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-white border-2 border-black bg-black rounded-full p-3 hover:text-cyan-400">
                  <FiGithub />
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-white border-2 border-black bg-black rounded-full p-3 hover:text-cyan-400">
                  <GrDeploy />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;