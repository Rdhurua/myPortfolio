import React, { useState } from "react";
import img from "/r18.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-[] bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm shadow-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src={img} alt="Logo" className="h-14 w-14 rounded-full shadow-md" />
        </a>

        {/* Hamburger Toggle (visible below md) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu */}
        <div className={`w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:space-x-8">
            {["home", "Skills", "project", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={closeMenu}
                  className="block py-2 px-3 text-md md:text-lg text-gray-900 dark:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#58E095] md:p-0 dark:hover:text-[#58E095] dark:hover:bg-gray-700 md:dark:hover:bg-transparent transition-all"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
