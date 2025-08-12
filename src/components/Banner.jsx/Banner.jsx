import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import rinku2 from '/src/assets/images/pic-9.png';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-gradient-to-br
       from-gray-900 via-black to-gray-800 flex flex-col lg:flex-row items-center justify-center px-6 py-10 md:py-16 gap-12"
    >
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hello, Myself <span className="text-orange-400">Rinku</span>
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold">
          I am a passionate
        </h2>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
          <Typewriter words={["Web Developer", "Coding Enthusiast", "Photo Editor"]} typeSpeed={90} loop />
          <Cursor cursorColor="white" />
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-justify pr-2">
          I am passionate about the software field, where creativity meets logic. I love exploring new technologies
          and solving complex problems through coding. Constantly learning, I am driven to build innovative solutions.
          My goal is to make a meaningful impact in the tech industry.
        </p>

        <div className="flex items-center flex-wrap gap-5 mt-4">
          <a href="https://www.linkedin.com/in/rinku-dhurua/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <BsLinkedin className="text-2xl hover:text-blue-500 transition-all duration-200" />
          </a>
          <a href="https://github.com/Rdhurua" target="_blank" rel="noopener noreferrer" title="GitHub">
            <BsGithub className="text-2xl hover:text-gray-300 transition-all duration-200" />
          </a>
          <a href="https://www.instagram.com/rdhurua_1118?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" title="Instagram">
            <BsInstagram className="text-2xl hover:text-pink-400 transition-all duration-200" />
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=130qLnUDZ_lN_qpIndjMSkYbM9gFXXW7Y"
            download="Rinku_CV.pdf"
            className="bg-orange-400 hover:bg-orange-500 text-black px-5 py-2 rounded-full font-medium transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-600 shadow-md shadow-gray-500 hover:scale-105 transition-transform duration-300">
          <img
            src={rinku2}
            alt="Rinku"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
