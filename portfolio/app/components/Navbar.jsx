"use client";

import { useState } from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#aa1155" }} className="flex items-center justify-between px-4 py-3 text-white shadow-md">
      <div className="flex items-center space-x-3">
        
        <span className="text-lg font-semibold">Nátally Martins</span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <a href="#about" className="hover:text-primary">About me</a>
        <a href="#projects" className="hover:text-primary">Projects</a>
        <a href="#thoughts" className="hover:text-primary">Thoughts</a>
        <a href="https://www.instagram.com/natallymartinsdacosta/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-primary cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/natallymartins/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-primary cursor-pointer" />
        </a>
        <a href="mailto:natallymartinsdacosta@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="hover:text-primary cursor-pointer" />
        </a>

      </nav>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen  && (
        
        <div style={{ backgroundColor: "#aa1155" }} className="absolute top-16 right-4 text-white p-4 rounded-md shadow-md flex flex-col space-y-3 md:hidden z-50">
          <a href="#about" className="hover:text-primary">About me</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#thoughts" className="hover:text-primary">Thoughts</a>
          <FaInstagram className="hover:text-primary cursor-pointer" />
          <FaLinkedin className="hover:text-primary cursor-pointer" />
          <FaEnvelope className="hover:text-primary cursor-pointer" />
        </div>
      )}
    </header>
  );
}
