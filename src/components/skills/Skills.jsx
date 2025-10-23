import React from 'react'
import { motion } from 'framer-motion'
import { GrReactjs } from "react-icons/gr"
import { IoLogoHtml5 } from "react-icons/io"
import { SiCss3, SiJavascript, SiAdobephotoshop, SiExpressvpn, SiSocketdotio, SiMysql } from "react-icons/si"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi"
import photoshop from "/src/assets/images/photoshop.png"
import microsoft from "/src/assets/images/microsoft.png"
import social from "/src/assets/images/social.png"
import github from "/src/assets/images/github.png"
import cpp from "/src/assets/images/c-.png"
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRadixUi, TbBrandRedux } from 'react-icons/tb'
import { DiMysql, DiRedis } from 'react-icons/di'

const Skills = () => {

  const frontendSkills = [
    { id: 1, name: "HTML5", icon: <IoLogoHtml5 className="text-orange-500 text-4xl" /> },
    { id: 2, name: "CSS3", icon: <SiCss3 className="text-blue-400 text-4xl" /> },
    { id: 3, name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
    { id: 4, name: "React.js", icon: <GrReactjs className="text-cyan-400 text-4xl" /> },
    { id: 5, name: "Next.js", icon: <RiNextjsFill className="text-gray-900 text-4xl bg-white rounded-full" /> },
    { id: 6, name: "Redux", icon: <TbBrandRedux className="text-purple-600 text-4xl  rounded-full" /> },
  
    { id: 7, name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-sky-400 text-4xl" /> },
  ]

  const backendSkills = [
    { id: 1, name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { id: 2, name: "Express.js", icon: <SiExpressvpn className="text-gray-300 text-4xl" /> },
    { id: 3, name: "MongoDB", icon: <BiLogoMongodb className="text-green-400 text-4xl" /> },
    { id: 4, name: "MySQL", icon: <DiMysql className="text-blue-500 text-4xl" /> },
    { id: 5, name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-700 text-4xl" /> },
    { id: 6, name: "Redis", icon: <DiRedis className="text-[#DC382D] text-4xl" /> },


    { id: 7, name: "Socket.io", icon: <SiSocketdotio className="text-white text-4xl" /> },
  ]

  const otherSkills = [
    { id: 1, name: "C++", img: cpp },
    { id: 2, name: "GitHub", img: github },
    { id: 3, name: "Social Media", img: social },
    { id: 4, name: "Windows", img: microsoft },
    { id: 5, name: "Photoshop", img: photoshop },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <div id="Skills" className="py-20">
      <h1 className="text-4xl font-extrabold text-gray-200 text-center mb-12">Skills</h1>

      {/* Frontend + Backend Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 md:px-12">

        {/* Frontend Section */}
        <section className="flex-1 bg-[#001845]/30 rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Frontend</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {frontendSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                className="flex flex-col items-center justify-center p-4 rounded-xl w-28 md:w-32 shadow-md transition-all border border-gray-500"
                style={{
                  borderTopLeft: "2px solid white",
                  borderBottomRight: "2px solid white"
                }}
              >
                {skill.icon}
                <p className="mt-2 text-sm text-gray-300 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Backend Section */}
        <section className="flex-1 bg-[#001845]/30 rounded-2xl shadow-lg p-6">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Backend</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {backendSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                 whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
                className="flex flex-col items-center justify-center  p-4 rounded-xl w-28 md:w-32 shadow-md transition-all shadow-md border border-gray-500"
                style={{
                  borderTopLeft: "2px solid white",
                  borderBottomRight: "2px solid white"
                }}
              >
                {skill.icon}
                <p className="mt-2 text-sm text-gray-300 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Other Skills */}
      <section className="mt-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Other</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {otherSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col items-center justify-center  p-4 rounded-xl w-28 md:w-32 shadow-md transition-all"
              style={{
                borderTopLeft: "2px solid white",
                borderBottomRight: "2px solid white"
              }}
            >
              <img src={skill.img} alt={skill.name} className="h-12 w-12 object-contain" />
              <p className="mt-2 text-sm text-gray-300 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
