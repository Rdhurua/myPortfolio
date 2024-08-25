import React from 'react'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <>
    
    < div className=' w-full flex flex-col text-white mt-20' initial={{ opacity: 0 }}
      >
         <span className="w-full h-1  rounded-md inline-flex mt-2  ">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-1/2 bg-gray-300 rounded-md relative"
                >
                </motion.span>
              </span>
        <h2 className='text-center mt-2 py-2'>&#169;2024.All rights reserved by Rinku Dhurua</h2>
    </div>
    </>
  )
}

export default Footer
