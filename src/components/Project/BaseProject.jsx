import React from 'react'
 import Project from './Project'
 import project1 from "/src/assets/images/currency.png"
 import project2 from "/src/assets/images/musicplayer.png"
 import project4 from "../../assets/images/skill-exchange.png"
 import project5 from "../../assets/images/agri.png"

const BaseProject = () => {
  return (
    <section
    id="project"
    className="w-full pt-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
        <h1 className='text-4xl  font-extrabold text-gray-300 '>Projects</h1>
      
    </div>
    <div className="flex justify-center items-center text-center">
        
        <p className='text-2xl  font-semibold text-gray-100 mb-20 mt-3'>following are my projects</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 px-4 lg:px-16">

    <Project
        title="Skill-exchanger"
        des=" A platform designed to foster community growth by enabling users to share and learn skills. Users can match based on their interests, connect, and communicate through real-time chat. An admin dashboard ensures efficient management, promoting collaboration and skill development within communities."
        project={project4}
       Url="https://skill-exchanged.netlify.app/"
       github="https://github.com/Rdhurua/Skill-exchanged"
      />

     <Project
        title="Agriculture Universe"
        des=" I developed an interactive agriculture website to support farmers and promote sustainable farming practices. The platform includes features like a dynamic gallery, real-time weather updates, and a blog for sharing modern agricultural techniques. It aims to connect communities and foster growth in the agricultural sector"
        project={project5}
       Url="https://agricultural-universe.netlify.app/"
       github="https://github.com/Rdhurua/Agriculture"
      />


      <Project
        title="Currency-Converter"
        des=" I developed a responsive currency converter website that allows users to easily convert between multiple currencies in real-time, using up-to-date exchange rates. The project includes a clean and intuitive interface with a focus on user experience."
        project={project1}
       Url="https://currencyconverter-rinku-world.netlify.app/"
       github="https://github.com/Rdhurua/Currency-converter"
      />
      <Project
         title="Music-Player "
         des="This music player website provides a modern and responsive interface, allowing users to effortlessly control playback and navigate through tracks while enjoying a visually captivating design optimized for all devices."
         project={project2}
        Url="https://rd-music-playlist.netlify.app/"
      github="https://github.com/Rdhurua/My-music-player"
      />
      
    </div>
  </section>
  )
}

export default BaseProject
