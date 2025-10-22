import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
  return (
 <section
  id="home"
  className="w-full min-h-[80vh] flex items-center justify-center text-white bg-transparent overflow-hidden"
>
  <div className="max-w-6xl w-full flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-6 sm:px-10 md:px-16 space-y-4 sm:space-y-6 mx-auto">
    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">
      Hey there!, I'm
    </h1>

    <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-[#0EC95C]">
      Rinku Dhurua
    </span>

    <h2 className="text-base sm:text-2xl md:text-3xl font-semibold text-gray-300">
      I am a passionate
    </h2>

    <h2 className="text-lg sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0EC95C] to-[#16FFB2]">
      <Typewriter
        words={["Web Developer", "Coding Enthusiast", "Photo Editor"]}
        typeSpeed={90}
        deleteSpeed={50}
        loop
      />
      <Cursor cursorColor="#0EC95C" />
    </h2>
  </div>
</section>
  );
};

export default Banner;

