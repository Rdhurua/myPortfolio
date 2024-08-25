import React from 'react'
import { motion } from 'framer-motion';
import { GrReactjs } from "react-icons/gr";
import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript,SiAdobephotoshop } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpressvpn } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import photoshop from "/src/assets/images/photoshop.png"

const Skills = () => {
  return (
    <div id='Skills' className=' mb-16 '>
      <h1 className='text-4xl font-extrabold text-gray-300 text-center mb-10 mt-16'>Skills</h1>

      < motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
      >
          
        <div className="w-full lg:w-1/2 md:px-20 px-4 lg:px-20 text-gray-300 shadow-2xl shadow-[#131928f1]">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Front-end</h2>
          </div>
          <div className="flex flex-col gap-5 mb-8">

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex gap-3"><GrReactjs className='text-4xl text-[#06b6d4]' />React</p>
              <span className="w-full h-2 bg-gray-500 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[87%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">87%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex items-center gap-3"><IoLogoHtml5 className='text-4xl text-red-600' />HTML</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex items-center gap-3"><SiCss3 className='text-4xl text-blue-600' />CSS</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[83%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">83%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex items-center gap-3"><RiTailwindCssFill className='text-5xl text-[#06b6d4]' />Tailwind CSS</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">85%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex gap-3"><SiJavascript className='text-3xl text-yellow-400' />Javascript</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>

         
          </div>
        </div>

        <div className="w-full lg:w-1/2 md:px-20 px-4 lg:px-20 text-gray-300 shadow-2xl shadow-[#161d30f1] ">
          <div className="py-12 font-titleFont flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">Backend</h2>
          </div>
          <div className="flex flex-col gap-6">

          <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex gap-3 items-center"><FaNodeJs  className='text-4xl text-lime-400' />Node Js</p>
              <span className="w-full h-2 bg-gray-500 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex gap-3 items-center"><SiExpressvpn className='text-4xl text-blue-600' />express</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex gap-3 items-center"><BiLogoMongodb className='text-5xl text-lime-600' />MongoDB</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">78%</span>
                </motion.span>
              </span>
            </div>

            <div className="overflow-x-hidden">
              <p className="text-md uppercase font-medium flex items-center gap-3"><SiMysql className='text-5xl text-blue-400' />MySql</p>
              <span className="w-full h-2 bg-gray-700 rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>

          </div>
        </div>


      </motion.div>

          <div className='w-full h-auto mt-16 '>
                 <h2 className='text-3xl font-extrabold  text-white text-center'>Other</h2>
             <div className='flex justify-center items-center mt-7'>
                   <img src="./src/assets/images/c-.png" alt="github" className='h-10 md:h-16 ml-8 shadow-md shadow-yellow-50 rounded-lg' />
                    <img src="./src/assets/images/github.png" alt="github" className='h-10 md:h-16 ml-8 shadow-md shadow-yellow-100 rounded-lg' />
                    <img src="./src/assets/images/social.png" alt="github" className='h-10 md:h-16 ml-8 shadow-md shadow-yellow-100 rounded-lg' />
                    <img src="./src/assets/images/microsoft.png" alt="github" className='h-10 md:h-16 ml-8 shadow-md shadow-yellow-100 rounded-lg' />
                    <img src={photoshop} alt="github" className='h-10 md:h-16 ml-8 shadow-md shadow-yellow-100 rounded-lg' />
               </div>
          </div>
    </div>

  );
}

export default Skills