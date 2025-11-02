"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Portfolio Data
const data = {
  name: "Olayinka Stephen Adenaya",
  title: "Front-End & Back-End Developer",
  intro:
    "I build responsive, modern web applications and APIs. I create web experiences that are interactive, user-friendly, and visually appealing.",
  skills: ["React", "Next.js", "Tailwind CSS", "Django", "Node.js", "JavaScript", "Framer Motion"],
  projects: [
    {
      id: 1,
      title: "Vaultico — Business Valuation UI",
      desc: "Interactive Next.js homepage with filtering, search, cart & wishlist UI.",
      tech: ["Next.js", "Tailwind CSS", "React"],
      link: "https://funstuff-alpha.vercel.app/",
    },
    {
      id: 2,
      title: "School Event Page",
      desc: "Animated student event page using Framer Motion.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      link: "https://school-zeta-flax.vercel.app/",
    },
    {
      id: 3,
      title: "Hospital Management System",
      desc: "Full-stack hospital management system with patient records, appointments, and doctor management.",
      tech: ["Django", "React", "Tailwind CSS", "PostgreSQL"],
      link: "https://hospital-eight-steel.vercel.app/",
    },
  ],
  contact: {
    email: "olayinka4728@gmail.com",
    github: "https://github.com/Naya4728",
    linkedin: "https://www.linkedin.com/in/olayinka-adenaya-b92462267/",
  },
};

// Badge Component
function Badge({ children }) {
  return (
    <span className="inline-block px-3 py-1 mr-2 mb-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium">
      {children}
    </span>
  );
}

export default function PortfolioWebsite() {
  const [themeDark, setThemeDark] = useState(true);

  return (
    <div
      className={`${
        themeDark
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-black"
      } min-h-screen transition-colors duration-500`}
    >
      <Navbar themeDark={themeDark} setThemeDark={setThemeDark} name={data.name} />

      <main className="scroll-smooth">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-center h-screen max-w-6xl mx-auto px-6 gap-10 pt-20 md:pt-0"
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              {data.name}
            </h1>
            <h2
              className={`text-lg sm:text-xl md:text-3xl mt-4 ${
                themeDark ? "text-gray-300" : "text-black"
              }`}
            >
              {data.title}
            </h2>
            <p
              className={`mt-6 max-w-xl ${
                themeDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              {data.intro}
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/my.jpg"
              alt={data.name}
              width={250}
              height={250}
              className="rounded-full border-4 border-purple-500 shadow-xl object-cover"
            />
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16"
        >
          <motion.h2
            className="text-4xl font-semibold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className={`mb-6 ${
              themeDark ? "text-gray-300/90" : "text-gray-800"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {data.intro}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {data.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </motion.div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16"
        >
          <h2 className="text-4xl font-semibold mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {data.projects.map((project) => (
              <motion.div
                key={project.id}
                className={`relative group h-64 border rounded-2xl p-6 flex flex-col justify-between transition ${
                  themeDark
                    ? "bg-gray-800/20 border-gray-700/50 hover:bg-gray-800/40"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-semibold text-purple-500 mb-2">
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      themeDark ? "text-gray-300/90" : "text-gray-800"
                    }`}
                  >
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap mt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-4 text-sm underline ${
                    themeDark
                      ? "text-pink-400 hover:text-pink-600"
                      : "text-purple-600 hover:text-purple-800"
                  }`}
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="max-w-6xl mx-auto px-6 py-24 scroll-mt-16"
        >
          <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
          <div
            className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
              themeDark ? "text-gray-300/90" : "text-black"
            }`}
          >
            <a
              href={`mailto:${data.contact.email}`}
              className="flex items-center gap-2 text-purple-500 hover:underline"
            >
              <FaEnvelope /> {data.contact.email}
            </a>
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-purple-500 hover:underline"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-purple-500 hover:underline"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
