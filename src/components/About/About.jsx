import React from 'react';
import { motion } from 'framer-motion';
import AboutCard from './AboutCard';
import AboutCard2 from './AboutCard2';

const About = () => {
  return (
    <div id="About" className=" py-16 px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">About</h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="flex flex-col md:flex-row gap-12"
      >
        {/* Education Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2 px-4">
            Education
          </h3>
          <div className="border-l-4 border-[#21293cf1] border-opacity-30 pl-[0.8rem] space-y-10">
            <AboutCard
              title="B.Tech in Ceramic Engineering"
              subTitle="National Institute of Technology, Rourkela"
              result="2021 - 2025"
              des="I'm a final-year Ceramic Engineering student with a strong passion for software development. My interest in the tech field drives me to explore and excel in software engineering."
            />
            <AboutCard
              title="Higher Secondary Education (Science)"
              subTitle="Kalinga Institute of Social Sciences, Bhubaneswar"
              result="2019 - 2021"
              des="Completed courses in Physics, Chemistry, Mathematics, and Biology (PCMB)."
            />
            <AboutCard
              title="Secondary School Education"
              subTitle="Panchakhanda High School, Badabahal"
              result="2017 - 2019"
              des="Gained strong academic discipline and foundation for higher education."
            />
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-2 px-4">
            Experience
          </h3>
          <div className="border-l-4 border-[#21293cf1] border-opacity-30 pl-[0.8rem] space-y-10">
            <AboutCard2
              title="Web Development Intern"
              subTitle="Kshitiksha Foundation (NGO)"
              duration="June 2024"
              des="Worked on frontend development and website deployment, gaining hands-on experience."
            />
            <AboutCard2
              title="Web Developer Workshop"
              subTitle="Microsoft Student Ambassadors"
              duration="May 2024"
              des="Completed workshop focusing on full-stack web development and latest tech practices."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
