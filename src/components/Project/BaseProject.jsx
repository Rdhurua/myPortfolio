import React from "react";
import Project from "./Project";
import project4 from "../../assets/images/skill-exchange.png";
import project5 from "../../assets/images/agri.png";
import project8 from "../../assets/images/url-shortner.png";
import project9 from "../../assets/images/brieflink.png";

const projects = [
  {
    title: "BriefLink-AI summarizer",
    des: "An AI-powered web application that generates concise summaries from lengthy documents or transcripts using the Groq API. Built with Next.js and TypeScript, featuring a secure shareable-link system for time-limited access, JWT-based authentication, and a responsive Tailwind CSS interface. Backend powered by MongoDB (Mongoose) for storing summaries and access metadata.",
    project: project9,
    Url: "https://brief-link-six.vercel.app/",
    github: "https://github.com/Rdhurua/BriefLink",
  },
  {
    title: "URL Shortener",
    des: "A full-stack application for converting long URLs into short, shareable links with instant response. Includes an admin panel for managing and deleting URLs, JWT-based authentication for secure admin access, and a modern, responsive UI built with Tailwind CSS. Backend powered by Express, MongoDB, and Mongoose with secure API endpoints.",
    project: project8,
    Url: "https://url-shortner-rinkudhurua.netlify.app/",
    github: "https://github.com/Rdhurua/URL_shortner",
  },
  {
    title: "Skill-exchanger",
    des: "A platform designed to foster community growth by enabling users to share and learn skills. Users can match based on their interests, connect, and communicate through real-time chat. An admin dashboard ensures efficient management, promoting collaboration and skill development within communities.",
    project: project4,
    Url: "https://skill-exchanged.netlify.app/",
    github: "https://github.com/Rdhurua/Skill-exchanged",
  },
  {
    title: "Agriculture Universe",
    des: "I developed an interactive agriculture website to support farmers and promote sustainable farming practices. The platform includes features like a dynamic gallery, real-time weather updates, and a blog for sharing modern agricultural techniques. It aims to connect communities and foster growth in the agricultural sector.",
    project: project5,
    Url: "https://agricultural-universe.netlify.app/",
    github: "https://github.com/Rdhurua/Agriculture",
  },
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
