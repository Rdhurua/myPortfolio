import React from 'react'
 import Project from './Project'
 import project1 from "/src/assets/images/currency.png"
 import project3 from "/src/assets/images/dictionary .png"

 import project2 from "/src/assets/images/musicplayer.png"

const BaseProject = () => {
  return (
    <section
    id="project"
    className="w-full py-20 border-b-[1px] border-b-black"
  >
    <div className="flex justify-center items-center text-center">
        <h1 className='text-4xl  font-extrabold text-gray-300 '>Projects</h1>
      
    </div>
    <div className="flex justify-center items-center text-center">
        
        <p className='text-2xl  font-semibold text-gray-100 mb-20 mt-3'>following are my projects</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10 lg:px-16">
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
      <Project
        title="Online-Dictionary"
        des=" This online dictionary website project features word pronunciation, meanings, synonyms, and example sentences, offering a streamlined and user-friendly tool for language learning and reference."
        project={project3}
       Url="https://rdhurua.github.io/Online-Dictionary/"
       github="https://github.com/Rdhurua/Online-Dictionary"
      />
      {/* <Project
         title="Music-Player "
         des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem! "
         project={project2}
        Url="https://rd-music-playlist.netlify.app/"
      />
      <Project
        title="SOCIAL MEDIA CLONE"
        des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        project={project1}
       Url="https://currencyconverter-rinku-world.netlify.app/"
      />
      <Project
         title="Music-Player "
         des="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
         project={project2}
        Url="https://rd-music-playlist.netlify.app/"
      /> */}
      
    </div>
  </section>
  )
}

export default BaseProject
