import React from "react";
import Navbar from "../layout/Navbar";
import profile from "../../assets/Profile.png";
import Button from "../ui/Button";
import { FaAnglesDown } from "react-icons/fa6";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollLayout from "../layout/ScrollLayout";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="min-w-full min-h-screen  dark:bg-dark-image bg-cover bg-center"
      id="home"
    >
      <motion.div className="progress-bar z-50" style={{ scaleX }} />
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen pt-24">
        <div className="flex flex-col items-center gap-y-6 py-8 px-4 w-full max-w-screen-lg">
          <img
            src={profile}
            alt="Photo de profil d'Oscar Kanangila"
            className="w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full"
          />
          <div className="flex flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat text-center">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Oscar Kanangila
            </h1>
            <h2 className="font-bold text-2xl md:text-3xl flex items-center">
              <span className="dark:text-white text-textColor ">&lt;/</span>
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Mythe Coder
              </span>
              <span className="dark:text-white text-textColor">&gt;</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl px-4 md:px-8 lg:px-16 py-3">
              As a passionate web developer, I thrive on solving technical challenges and creating efficient solutions. I focus on delivering seamless user experiences while constantly improving my skills and exploring new approaches.
            </p>

            <ScrollLayout>
              <Button text={"Contact Me"} borderColor={"border-accent"} />
            </ScrollLayout>

            <FaAnglesDown
              size={30}
              className="animate-bounce ease-in-out transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
