import React from 'react';
import { FaHome, FaCode, FaEnvelope } from 'react-icons/fa';
import { AiFillProject } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed w-full z-10 bg-slate-900 top-0"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="container mx-auto flex justify-center py-6">
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li className="hidden sm:inline-block hover:text-cyan-400 transition duration-300">
            <a href="#home">Home</a>
          </li>
          <li className="hidden sm:inline-block hover:text-cyan-400 transition duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="hidden sm:inline-block hover:text-cyan-400 transition duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="hidden sm:inline-block hover:text-cyan-400 transition duration-300">
            <a href="#experience">Experience</a>
          </li>
          <li className="hidden sm:inline-block hover:text-cyan-400 transition duration-300">
            <a href="#contact">Contact</a>
          </li>

          <motion.li
            className="sm:hidden text-xl"
            whileHover={{ scale: 1.2, color: "#67e8f9" }}
          >
            <a href="#home"><FaHome /></a>
          </motion.li>
          <motion.li
            className="sm:hidden text-xl"
            whileHover={{ scale: 1.2, color: "#67e8f9" }}
          >
            <a href="#projects"><AiFillProject /></a>
          </motion.li>
          <motion.li
            className="sm:hidden text-xl"
            whileHover={{ scale: 1.2, color: "#67e8f9" }}
          >
            <a href="#skills"><FaCode /></a>
          </motion.li>
          <motion.li
            className="sm:hidden text-xl"
            whileHover={{ scale: 1.2, color: "#67e8f9" }}
          >
            <a href="#experience"><BsPersonWorkspace /></a>
          </motion.li>
          <motion.li
            className="sm:hidden text-xl"
            whileHover={{ scale: 1.2, color: "#67e8f9" }}
          >
            <a href="#contact"><FaEnvelope /></a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;