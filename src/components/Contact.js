import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faEnvelope, faPhone, faMapMarkerAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Contact() {

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
    <div id="contact" ref={ref} className="min-h-screen bg-slate-900 text-white pt-40 px-8">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-white">Get in</span> <span className="text-cyan-400">Touch</span>
      </motion.h2>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-900 text-white px-4 lg:px-16">

        <motion.div
          className="w-full lg:w-2/3 max-w-lg space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gbgauravbansal007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-black rounded-xl p-5 bg-white text-black hover:shadow-md transition  hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
              <div>
                <h3 className="text-xl font-bold">Gmail</h3>
                <p className="text-gray-700">gbgauravbansal007@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/gauravbansal007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-black rounded-xl p-5 bg-white text-black hover:shadow-md transition hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              <div>
                <h3 className="text-xl font-bold">LinkedIn</h3>
                <p className="text-gray-700">linkedin.com/in/gauravbansal007</p>
              </div>
            </div>
          </a>


          <a
            href="https://github.com/gbgaurav007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border border-black rounded-xl p-5 bg-white text-black hover:shadow-md transition hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              <div>
                <h3 className="text-xl font-bold">GitHub</h3>
                <p className="text-gray-700">github.com/gbgaurav007</p>
              </div>
            </div>
          </a>

        </motion.div>


        <motion.div
          className="w-full lg:w-1/3 text-center lg:text-left mt-12 lg:mt-0 lg:ml-10"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="space-y-8 mb-8">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-cyan-400 text-2xl" />
              <span className="text-lg">+91 96461-52465</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400 text-2xl" />
              <span className="text-lg">Bathinda, India</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6 mt-4">
            <a href="https://www.instagram.com/gaurav_bansal._" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500 transition-colors duration-200 text-3xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/gbgaurav__007" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-500 transition-colors duration-200 text-3xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
