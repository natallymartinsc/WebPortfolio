"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState();

  // Detect saved theme on load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const isDark = savedTheme === "dark";
      if (isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      setDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header
      style={{ backgroundColor: "#b91372", color: "#ffffff" }}
      className="flex items-center justify-between px-4 py-3 shadow-md"
    >
      <div className="flex items-center space-x-3">
        {/* <span className="text-lg font-semibold">Nátally Martins</span> */}
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a href="#about" style={{ color: "#ffffff" }}>About me</a>
        <a href="#projects" style={{ color: "#ffffff" }}>Projects</a>
        <a href="#infobio" style={{ color: "#ffffff" }}>Biomedical Informatics</a>
        <a href="https://www.instagram.com/natallymartinsdacosta/" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ color: "#ffffff" }} className="hover:opacity-80 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/natallymartins/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ color: "#ffffff" }} className="hover:opacity-80 cursor-pointer"/>
        </a>
        <a href="mailto:natallymartinsdacosta@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope style={{ color: "#ffffff" }} className="hover:opacity-80 cursor-pointer" />
        </a>

        {/* Tema: Lua/Sol */}
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
          {darkMode ? (
            <FaSun style={{ color: "#ffffff" }} className="ml-3 cursor-pointer" />
          ) : (
            <FaMoon style={{ color: "#ffffff" }} className="ml-3 cursor-pointer" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{ backgroundColor: "#b91372", color: "#ffffff" }}
          className="absolute top-16 right-4 p-4 rounded-md shadow-md flex flex-col space-y-3 md:hidden z-50"
        >
          <a href="#about">About me</a>
          <a href="#projects">Projects</a>
          <a href="#thoughts">Biomedical Informatics</a>

    {/* Novo bloco para alinhar os ícones lado a lado */}
    <div className="flex items-center space-x-4 pt-2">
      <a href="https://www.instagram.com/natallymartinsdacosta/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/natallymartins/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:natallymartinsdacosta@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
      <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  </div>
)}
    </header>
  );
}
