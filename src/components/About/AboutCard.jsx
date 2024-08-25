import React from 'react'

const AboutCard = ({title,subTitle,result,des}) => {
  return (
    <div className="w-full h-1/3  group flex">
      <div className="w-10 h-[6px] bg-[#131928f1] mt-16 relative sm:pl-7">
        <span className=" absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#9ca3af] bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-[rgb(0,7,24)] inline-flex group-hover:bg-orange-200 duration-900"></span>
        </span>
      </div>
      <div className="w-full shadow-[#131928f1] shadow-xl bg-[#000718f1] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-30 text-gray-400 bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lg:px-10 flex flex-col justify-center gap-6 lg:gap-10 shadow-shadowOne">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-orange-300 bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default AboutCard