"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // 👈 for mobile menu icons

export default function Navbar({ themeDark, setThemeDark, name }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPos = window.scrollY + 100;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
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

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {["home", "about", "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`hover:text-purple-400 ${
              activeSection === section
                ? "text-purple-400 font-semibold"
                : "text-gray-200"
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

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 py-4 flex flex-col items-center space-y-4 md:hidden">
          {["home", "about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-purple-400 ${
                activeSection === section
                  ? "text-purple-400 font-semibold"
                  : "text-gray-200"
              } transition-colors duration-200`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}

          <button
            onClick={() => {
              setThemeDark(!themeDark);
              setMenuOpen(false);
            }}
            className="px-3 py-1 rounded-lg border border-gray-700/40 text-sm hover:bg-gray-800/50 transition-colors duration-200"
          >
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
}
