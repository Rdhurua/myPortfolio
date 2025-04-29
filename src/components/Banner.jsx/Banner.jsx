import React from 'react'
 import { Link } from 'react-router-dom'
 import { BsLinkedin,BsGithub,BsInstagram,BsFacebook } from 'react-icons/bs'
 import { Typewriter,Cursor } from 'react-simple-typewriter'
import rinku from "/src/assets/images/picture2.png" 
import rinku2 from "/src/assets/images/picture3.png" 

const Banner = () => {
     
  return (
    <>
     <div
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-12  gap-8"
      id="home"
    >
      <div className="flex flex-col items-start text-center lg:text-left w-full lg:w-1/2 space-y-4 ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-gray-300 font-mono font-bold">
          Hello,Myself Rinku
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-gray-300 font-mono font-bold">
          I am a passionate
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-orange-400 to-pink-500">
          <Typewriter words={["Web Developer", "Problem Solver", "Photo Editor"]} typeSpeed={100} loop />
          <Cursor cursorBlinking={false} />
        </h2>
        <p className="text-gray-50 text-sm md:text-lg text-justify font-sans leading-relaxed">
          I am passionate about the software field, where creativity meets logic. I love exploring new technologies
          and solving complex problems through coding. Constantly learning, I am driven to build innovative solutions.
          My goal is to make a meaningful impact in the tech industry.
        </p>
        <div className="flex items-center space-x-4 text-orange-200">
          <a href="https://www.linkedin.com/in/rinku-dhurua-788199260/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin className="h-8 w-8" />
          </a>
          <a href="https://github.com/Rdhurua" target="_blank" rel="noopener noreferrer">
            <BsGithub className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/rdhurua_1118?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
            <BsInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=130qLnUDZ_lN_qpIndjMSkYbM9gFXXW7Y"
            download="Rinku_CV.pdf"
            className="bg-orange-200 text-black px-4 py-2 rounded-md hover:bg-orange-300 transition-all duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <div className=" w-[80%] md:w-[60%] lg:w-[65%] rounded-xl overflow-hidden shadow-md shadow-gray-300">
          <img src={rinku2} alt="Rinku" className="w-auto h-auto object-cover" />
        </div>
      </div>
    </div>
    
    
    </>
   
  )
}

export default Banner;
