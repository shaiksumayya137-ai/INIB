import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <h1 className="text-2xl font-bold text-cyan-400">Bharathi</h1>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications" className="hover:text-cyan-400 transition">
            Certifications
          </a>
          <a href="#contact">Contact</a>
        </div>

        <button
          type="button"
          className="md:hidden text-white text-2xl"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 px-6 py-4 flex flex-col gap-3 shadow-lg">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>
            Certifications
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;