import React from "react";
import profileImage from "../../assets/pic.jpeg";
import Button from "../ui/Button";
import ScrollLayout from "../layout/ScrollLayout";
import { motion } from "framer-motion";
import TechTabs from "../tabs/TechTabs";
import { useTranslation } from "react-i18next";

export default function About() {
  const { i18n, t } = useTranslation();

  return (
    <div
      className="min-w-full bg-primary dark:bg-darkPrimary py-10 mx-auto px-8 md:px-12 lg:px-24"
      id="about"
    >
      <ScrollLayout>
        <div className="flex flex-col items-center text-textColor dark:text-darkText mb-8">
          <h1 className="font-bold text-4xl md:text-5xl">
            {t("sectionTitle.about")}
          </h1>
          <h2 className="font-bold text-2xl md:text-3xl mt-4">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t("sectionTitle.aboutSubtitle")}
            </span>
          </h2>
        </div>
      </ScrollLayout>

      <ScrollLayout>
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-center">
          <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              className="card"
              whileHover={{ scale: 0.8, rotate: 3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className=" h-auto rounded-lg  transition-all duration-300 hover:grayscale-0"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-textColor dark:text-darkText font-monserrat lg:w-1/2">
            <p className="w-full text-left text-base md:text-lg py-3">
              {t("aboutMessage1")}
            </p>
            <p className="w-full text-left text-base md:text-lg py-3">
              {t("aboutMessage2")}
            </p>
            <p className="w-full text-justify  py-3  font-bold text-2xl">
              Tech Stack
            </p>
            <div className=" w-full">
              <TechTabs />
            </div>
          </div>
        </div>
      </ScrollLayout>

      <div className="flex justify-center mt-8">
        <a
          href="https://drive.google.com/file/d/1gz1yQf64ZjszE61Jd9MQgxeOjZHTuPbR/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button text={t("button.download")} borderColor={"border-accent"} />
        </a>
      </div>
    </div>
  );
}
