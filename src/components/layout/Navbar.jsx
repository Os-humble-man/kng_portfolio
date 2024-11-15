import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny, MdLanguage } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { FaRegMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const { i18n, t } = useTranslation();

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

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "services",
        "contact",
        "blog",
      ];
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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-2 md:py-3 z-40 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-white/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between mx-auto px-6 md:px-12 lg:px-32 w-full text-textColor dark:text-darkText">
        <div className="w-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-logofont">
            Oscar K.
          </h1>
        </div>

        <div className="hidden md:flex w-auto">
          <ul className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-10 font-monserrat">
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "home" ? "text-accent" : ""
              }`}
            >
              <a href="#home">{t("menu.home")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "about" ? "text-accent" : ""
              }`}
            >
              <a href="#about">{t("menu.about")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "services" ? "text-accent" : ""
              }`}
            >
              <a href="#services">{t("menu.service")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "projects" ? "text-accent" : ""
              }`}
            >
              <a href="#projects">{t("menu.project")}</a>
            </li>

            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "blog" ? "text-accent" : ""
              }`}
            >
              <a href="#blog">Blog</a>
            </li>

            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "contact" ? "text-accent" : ""
              }`}
            >
              <a href="#contact">{t("menu.contact")}</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center justify-between gap-4 md:gap-6 lg:gap-10">
          <div className="flex items-center gap-2">
            {darkMode ? (
              <MdOutlineWbSunny
                size={30}
                className="cursor-pointer hover:bg-accent p-1 text-center rounded-full"
                onClick={toggleTheme}
              />
            ) : (
              <FaRegMoon
                size={28}
                className="cursor-pointer hover:bg-accent p-1 text-center rounded-full"
                onClick={toggleTheme}
              />
            )}

            <div className="relative">
              <MdLanguage
                size={30}
                className="cursor-pointer hover:bg-accent p-1 text-center rounded-full"
                onClick={toggleLanguageMenu}
              />
              {showLanguageMenu && (
                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => changeLanguage("fr")}
                  >
                    Français
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

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
          <div className="relative">
            <MdLanguage
              size={24}
              className="cursor-pointer hover:text-accent"
              onClick={toggleLanguageMenu}
            />
            {showLanguageMenu && (
              <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden z-50">
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => changeLanguage("en")}
                >
                  English
                </li>
                <li
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => changeLanguage("fr")}
                >
                  Français
                </li>
              </ul>
            )}
          </div>
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-primary dark:bg-dark-image z-50 transform ${
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
              <a href="#home">{t("home")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "about" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#about">{t("about")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "services" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#services">{t("services")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "projects" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#projects">{t("projects")}</a>
            </li>
            <li
              className={`cursor-pointer hover:text-accent ${
                activeSection === "resume" ? "text-accent" : ""
              }`}
              onClick={toggleMenu}
            >
              <a href="#resume">{t("contact")}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
