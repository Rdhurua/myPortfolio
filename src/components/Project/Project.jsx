import React from 'react'
import { BsGithub } from 'react-icons/bs'
import {FaGlobe} from 'react-icons/fa'

  
const Project = ({title,des,project,Url,github}) => {
 
  return (
   

  <div className="w-full p-4 sm:p-6 md:p-8 xl:px-12 h-auto xl:py-10 rounded-lg shadow-lg hover:shadow-lime-100 flex flex-col shadow-[#131928f1] bg-[#000718f1] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-all duration-700 text-gray-400">

  {/* Project Image */}
  <div className="w-full h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-lg">
    <img
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
      src={project}
      alt={title}
    />
  </div>

  {/* Project Details */}
  <div className="w-full mt-5 flex flex-col gap-4 sm:gap-6">
    <div>
      {/* Title + Icons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg md:text-lg uppercase text-designColor font-semibold">
          {title}
        </h3>
        <div className="flex gap-2 sm:gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor transition-colors duration-300"
          >
            <BsGithub />
          </a>
          <a
            href={Url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor transition-colors duration-300"
          >
            <FaGlobe />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-justify tracking-wide mt-3 hover:text-gray-100 transition-colors duration-300">
        {des}
      </p>
    </div>
  </div>
</div>

  )
}

export default Project
