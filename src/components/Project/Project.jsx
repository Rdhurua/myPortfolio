import React from 'react'
import { BsGithub } from 'react-icons/bs'
 import {FaGlobe} from 'react-icons/fa'
 import project2 from "/src/assets/images/musicplayer.png"

  
const Project = ({title,des,project,Url,github}) => {
  //  let title="project k is here";
  //   let des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic facilis quidem natus voluptate ipsa officia minima eaque, sed facere architecto impedit. Ipsa nobis blanditiis illum. Facere natus repellat sed voluptas! tex";
  //   let src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
  return (
   

    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne hover:shadow-md hover:shadow-lime-100 flex flex-col shadow-[#131928f1] shadow-xl bg-[#000718f1] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 text-gray-400">
      
    <div className="w-full h-[80%] overflow-hidden rounded-lg">
      <img
        className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
        src={project}
        alt="src"
      />
    </div>
    <div className="w-full mt-5 flex flex-col  gap-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal">
            {title}
          </h3>
          <div className="flex gap-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <a href={github} className='text-blue-200' target='blank'><BsGithub/></a> 
              
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
             <a href={Url} className='text-blue-200' target='blank'><FaGlobe/></a> 
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Project
