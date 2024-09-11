import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny, MdLanguage } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import Button from "../ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false); // Nouveau état pour gérer le scroll

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Fonction pour gérer le scroll et définir la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "resume"];
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { top, height } = sectionElement.getBoundingClientRect();
          if (top <= 100 && top + height > 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 50); // Met à jour l'état de défilement à partir de la position de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-6 z-40 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-white/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-auto px-6 md:px-12 lg:px-32 w-full text-textColor dark:text-darkText">
        {/* Logo */}
        <div className="w-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-logofont">
            Oscar K.
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-auto">
          <ul className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-10 font-monserrat">
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "home" ? "text-accent" : ""
              }`}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "about" ? "text-accent" : ""
              }`}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "services" ? "text-accent" : ""
              }`}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "projects" ? "text-accent" : ""
              }`}
            >
              <a href="#projects">Projects</a>
            </li>

            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "resume" ? "text-accent" : ""
              }`}
            >
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>

        {/* Buttons for desktop */}
        <div className="hidden md:flex items-center justify-between gap-4 md:gap-6 lg:gap-10">
          <Button text={"Contact Me"} borderColor={"border-accent"} />
          <div className="flex items-center gap-2">
            {darkMode ? (
              <MdOutlineWbSunny
                size={24}
                className="cursor-pointer hover:text-accent"
                onClick={toggleTheme}
              />
            ) : (
              <FaRegMoon
                size={24}
                className="cursor-pointer hover:text-accent"
                onClick={toggleTheme}
              />
            )}

            <MdLanguage
              size={24}
              className="cursor-pointer hover:text-accent"
            />
          </div>
        </div>

        {/* Mobile Hamburger Menu Icon with Language and Theme Icons */}
        <div className="md:hidden flex items-center gap-4">
          {darkMode ? (
            <MdOutlineWbSunny
              size={24}
              className="cursor-pointer hover:text-accent"
              onClick={toggleTheme}
            />
          ) : (
            <FaRegMoon
              size={24}
              className="cursor-pointer hover:text-accent"
              onClick={toggleTheme}
            />
          )}
          <MdLanguage size={24} className="cursor-pointer hover:text-accent" />
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gradient-light dark:bg-dark-image z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start p-6 space-y-6">
          <ul className="flex flex-col items-start gap-y-4 font-monserrat text-textColor dark:text-darkText">
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "home" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "about" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "projects" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "services" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "resume" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
