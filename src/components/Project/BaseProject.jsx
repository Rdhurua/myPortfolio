import React from "react";
import Project from "./Project";
import project4 from "../../assets/images/skill-exchange.png";
import project5 from "../../assets/images/agri.png";
import project8 from "../../assets/images/url-shortner.png";
import project9 from "../../assets/images/brieflink.png";

const projects = [
  {
    title: "BriefLink",
    des: "A web application that uses AI to generate concise summaries from long documents or transcripts.It also provides secure, time-limited shareable links for controlled access to the summaries.",
    project: project9,
    Url: "https://brief-link-six.vercel.app/",
    github: "https://github.com/Rdhurua/BriefLink",
  },
  {
    title: "URL Shortener",
    des: "A full-stack app that converts long URLs into short, shareable links with instant results. It includes an admin panel for managing links and secure access for authorized users.",
    project: project8,
    Url: "https://url-shortner-rinkudhurua.netlify.app/",
    github: "https://github.com/Rdhurua/URL_shortner",
  },
  {
    title: "Skill-exchanger",
    des: "A platform that helps people share and learn skills by matching users based on their interests.It supports real-time chat and includes an admin dashboard to manage community interactions and growth.",
    project: project4,
    Url: "https://skill-exchanged.netlify.app/",
    github: "https://github.com/Rdhurua/Skill-exchanged",
  },
  // {
  //   title: "Agriculture Universe",
  //   des: "A website designed to support farmers and promote sustainable farming practices.It provides weather updates, a knowledge-sharing blog, and resources to help connect and grow agricultural communities.",
  //   project: project5,
  //   Url: "https://agricultural-universe.netlify.app/",
  //   github: "https://github.com/Rdhurua/Agriculture",
  // },
];

const BaseProject = () => {
  return (
    <section id="project" className="w-full pt-20 border-b border-black">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-300">Projects</h1>
        <p className="text-2xl font-semibold text-gray-100 mt-3">
          Following are my projects
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="px-4 lg:px-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((proj, index) => (
          <div key={index} className="p-4">
            <Project
              title={proj.title}
              des={proj.des}
              project={proj.project}
              Url={proj.Url}
              github={proj.github}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BaseProject;
