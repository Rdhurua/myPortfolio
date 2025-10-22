import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import rinku2 from "/src/assets/images/pic-9.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 px-6 sm:px-10 md:px-16 lg:px-20 text-white flex flex-col-reverse lg:flex-row items-center justify-between gap-12 "
    >
      {/* Left Section - Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col space-y-6 text-center lg:text-left"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
          About Me
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
          I’m deeply passionate about the software field — where creativity meets logic.
          I love exploring emerging technologies and solving complex challenges through code.
          My curiosity drives me to continuously learn, innovate, and build impactful solutions
          that contribute to the tech industry.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-4">
          <a
            href="https://www.linkedin.com/in/rinku-dhurua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            title="LinkedIn"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/Rdhurua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
            title="GitHub"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.instagram.com/rdhurua_1118?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-400 transition-all duration-300 transform hover:scale-110"
            title="Instagram"
          >
            <BsInstagram />
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1pZHRyjODcFjaEZ2KUsae0-NueNSm_ZSs"
            download="Rinku_CV.pdf"
            className="mt-3 bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-black px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-600 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500">
          <img
            src={rinku2}
            alt="Rinku Dhurua"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
