import React from 'react'
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';
import AboutCard2 from './AboutCard2';


const About = () => {
  return (
    <div id='About' className='py-10 md:py-20'>
    
    <h2 className='text-4xl font-extrabold text-gray-300 text-center mb-10 mt-16'>About</h2>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col md:flex-row lg:flex-row gap-10  "
    >
      {/* part one */}
      <div className='px-4 lg:px-10 md:px-5 sm:w-full md:w-1/2 '>
      <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4 mx-9 mt-8">
          <h2 className="text-3xl md:text-3xl font-bold text-white ">Education</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1300px] lg:max-h-[1000px]  border-l-[6px] border-l-[#131928f1] border-opacity-30 flex flex-col gap-10">
          <AboutCard
            title="B.tech in Ceramic Engineering"
            subTitle="National Institute of Technology ,Rourkela."
            result="2021 - 2025"
            des="I'm a final-year Ceramic Engineering student with a strong passion for software development. My interest in the tech field drives me to explore and excel in software engineering."
          />
          <AboutCard
            title="Higher Secondary Education (Science)"
            subTitle="Kalinga Institute of Social Sciences,Bhubaneswar."
            result="2019 - 2021"
            des="Higher education, also known as post-secondary education, involves pursuing academic degrees beyond the secondary level. I had completed courses in Physics, Chemistry, Mathematics, and Biology (PCMB) as part of my education."
          />
          <AboutCard
            title="Secondary School Education"
            subTitle="PanchaKhanda High School,Badabahal."
            result="2017 - 2019"
            des="Secondary education, often referred to as post-primary education, is divided into two distinct phases. These stages are categorized according to the International Standard Classification of Education scale. This level of education typically follows primary schooling and precedes higher education."
          />
        </div>
      </div>
      {/* part Two */}
      <div className=' px-4 lg:px-10 md:px-5 sm:w-full md:w-1/2 '>
      <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4 mx-9 mt-8">
          <h2 className="text-3xl md:text-3xl font-bold text-white ">Experience</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1300px] lg:max-h-[1000px] border-l-[6px] border-l-[#131928f1] border-opacity-30 flex flex-col gap-10">
          <AboutCard2
            title="Web Development Intern"
            subTitle="Kshitiksha Foundation (NGO)"
            duration="June 2024"
            des="I completed a web development internship at Kshitiksha Foundation, where I gained hands-on experience in creating and optimizing websites. This experience deepened my skills and passion for the field."
             
          />
          
            <AboutCard2
              title="Web Developer Workshop"
              subTitle=" Microsoft Student Ambassadors"
              duration="May 2024"
              des="I participated in and successfully completed a web developer workshop, which enhanced my technical skills and knowledge in web development."
            />
        </div>
      </div>

      
    </motion.div>
    </div>
  );
}

export default About;