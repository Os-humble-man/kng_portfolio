import React from "react";
import profileImage from "../../assets/pic.jpeg";
import Button from "../ui/Button";
import ScrollLayout from "../layout/ScrollLayout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="min-w-full bg-primary dark:bg-darkPrimary py-10 mx-auto px-8 md:px-12 lg:px-24"
      id="about"
    >
      <ScrollLayout>
        <div className="flex flex-col items-center text-textColor dark:text-darkText mb-8">
          <h1 className="font-bold text-4xl md:text-5xl">About Me</h1>
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Get to know me
            </span>
          </h2>
        </div>
      </ScrollLayout>

      <ScrollLayout>
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
          {/* Photo de profil */}

          <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              className="card"
              whileHover={{ scale: 0.8, rotate: 3 }} // Augmente légèrement la taille et fait pivoter la carte
              whileTap={{ scale: 0.9 }} // Réduit la taille lors du clic
              transition={{ type: "spring", stiffness: 300, damping: 20 }} // Animation avec un ressort pour l'effet rebond
            >
              <img
                src={profileImage}
                alt="Profile"
                className=" h-auto rounded-lg grayscale transition-all duration-300 hover:grayscale-0"
              />
            </motion.div>
          </div>

          {/* Texte */}
          <div className="flex flex-col items-center lg:items-start text-textColor dark:text-darkText font-monserrat lg:w-1/2">
            <p className="w-full text-center lg:text-left text-base md:text-lg py-3">
              Hi there! I'm [Your Name], a data scientist specializing in data
              analytics, predictive modeling, natural language processing,
              machine learning, and AI chatbots. With a passion for unraveling
              insights from complex datasets, I'm dedicated to helping
              businesses make informed decisions and stay ahead in today's
              data-driven world.
            </p>
            <p className="w-full text-center lg:text-left text-base md:text-lg py-3">
              I bring a blend of technical expertise, hands-on experience, and a
              commitment to clear communication to every project. Whether it's
              uncovering hidden patterns, predicting future trends, or
              automating processes with AI, I'm here to help you harness the
              full potential of your data.
            </p>
            <p className="w-full text-center lg:text-left text-base md:text-lg py-3">
              Let's work together to transform your data into actionable
              insights that drive real results. Get in touch, and let's start
              unlocking the power of your data today!
            </p>
          </div>
        </div>
      </ScrollLayout>

      {/* Bouton de téléchargement du CV */}
      <div className="flex justify-center mt-8">
        <Button text={"Download Resume"} borderColor={"border-accent"} />
      </div>
    </div>
  );
}
