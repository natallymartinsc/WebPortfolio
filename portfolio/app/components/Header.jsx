"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.body.classList.contains("dark");
      setDarkMode(isDark);
    };

    // Atualiza no carregamento inicial
    updateTheme();

    // Listener para mudanças de classe no <body>
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const backgroundColor = darkMode ? "var(--bg-dark)" : "var(--bg-light)";
  const textColor = darkMode ? "var(--text-dark)" : "var(--text-light)";
  const subtitleColor = darkMode ? "var(--subtitle-dark)" : "var(--subtitle-light)";
  const buttonBg = "var(--primary)";
  const buttonHover = "var(--primary-hover)";
  

  return (
    <section
      className="min-h-screen flex items-center px-6 md:px-20 transition-colors duration-500"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Hi! <br />
          <span>I'm Nátally</span>
        </h1>

        <p className="text-base sm:text-lg mb-8 max-w-md" style={{ color: subtitleColor }}>
        I’m a Biomedical Informatics and Software Engineer.
        Here, you’ll find my projects, current work and a bit about who I am.
        </p>

        <a
          href="#projects"
          className="inline-block text-white text-lg font-semibold px-6 py-3 rounded-full transition-colors duration-300"
          style={{
            backgroundColor: buttonBg,
            transition: "background-color 0.3s",
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = buttonHover)}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = buttonBg)}
        >
          Let's go!
        </a>
      </div>
    </section>
  );
}
