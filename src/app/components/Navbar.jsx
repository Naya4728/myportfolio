"use client";

import React, { useState, useEffect } from "react";

export default function Navbar({ themeDark, setThemeDark, name }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + 100; // Adjust for navbar height
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-700/50 h-16 flex items-center justify-between px-6">
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {name}
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {["home", "about", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`hover:text-purple-400 ${
              activeSection === section ? "text-purple-400 font-semibold" : "text-gray-200"
            } transition-colors duration-200`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={() => setThemeDark(!themeDark)}
          className="px-3 py-1 rounded-lg border border-gray-700/40 text-sm hover:bg-gray-800/50 transition-colors duration-200"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
