import React from 'react'
 import { Link } from 'react-router-dom'
 import { BsLinkedin,BsGithub,BsInstagram,BsFacebook } from 'react-icons/bs'
 import { Typewriter,Cursor } from 'react-simple-typewriter'
const Home = () => {
     
  return (
    <>
     <div className='sm:h-[160vh] md:h-[140vh] lg:h-[95vh] w-full  sm:flex sm:flex-column md:flex md:flex-wrap  lg:flex lg:flex-nowrap lg:justify-between lg:items-center   lg:px-16  ' id='home' >
        <div className=' sm:w-full sm:h-[37%] md:w-full md:h-[42%] md:mr-8 md:pt-3 lg:w-1/2 lg:h-1/2  sm:ml-12 lg:mb-52 lg:mx-8 lg:py-10 px-8 '>
        <div >
        <h1 className=' md:text-4xl lg:text-5xl text-2xl text-gray-300 mb-2 font-mono font-bold'>Hello,Myself Rinku</h1>
                 <h1 className=' md:text-4xl lg:text-5xl text-2xl text-gray-300 mt-2 mb-2 font-mono font-bold'> I am a passionate</h1>
                 <h2> <span className='md:text-4xl lg:text-5xl text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 via-orange-400 to-pink-500 mt-2'><Typewriter words={["Web-Developer","Problem-solver","Photo-editor"]} typeSpeed={100} loop /></span>
                  <Cursor cursorBlinking="false"/>
                 </h2>

                 <p className='text-gray-50 md:text-xl sm:text-[15px] mt-3 text-justify font-sans'> <span>I am passionate about the software field,</span> where creativity meets logic. I love exploring new technologies and solving complex problems through coding. Constantly learning, I'm driven to build innovative solutions. My goal is to make a meaningful impact in the tech industry.</p>
        </div>

                  <div className='text-orange-200 flex  mt-8 w-full'>
                   <a href="https://www.linkedin.com/in/rinku-dhurua-788199260/" target='_blank'><BsLinkedin className='h-8 w-8 ml-4 '/></a>  
                   <a href="https://github.com/Rdhurua" target='_blank'><BsGithub className='h-8 w-8 ml-4 '/></a>  
                   <a href="https://www.instagram.com/rdhurua_1118?igsh=YzljYTk1ODg3Zg==" target='_blank'><BsInstagram className='h-8 w-8 ml-4 '/></a>  
                   <a href="#" target='_blank'><BsFacebook className='h-8 w-8 ml-4 '/></a>  
                       
                  </div>
         </div>

         <div className=" lg:w-[40%] lg:h-[70%]  border-3xl border-white   ml-4 mt-8 md:ml-[160px]  lg:mx-0 lg:mb-40  ">
        <img className="md:w-full md:h-full sm:w-[70%] sm:h-[70%] lg:w-[80%] lg:h-auto  object-cover shadow-md shadow-gray-300 " src="/src/assets/images/r7.png" alt="Rinku" />
      </div>
     </div>
    
    
    </>
   
  )
}

export default Home
