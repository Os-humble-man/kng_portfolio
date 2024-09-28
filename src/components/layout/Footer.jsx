import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { i18n, t } = useTranslation();

  return (
    <div className="w-full dark:bg-darkPrimary bg-primary">
      <hr className="border-t border-gray-400" />
      <div className="py-6 md:py-10 mx-auto px-4 md:px-8 lg:px-12">
        <div className="w-full gap-y-3  flex flex-col md:flex-row justify-between items-center text-textColor dark:text-darkText">
          <h1 className="text-sm md:text-base  md:mb-0">
            &copy; {`${new Date().getFullYear()}`} {t("copyright")}
          </h1>
          <div className="flex items-center gap-3">
            <a
              href="https://cd.linkedin.com/in/oscar-kanangila-2a1887142"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={20}
                className="cursor-pointer hover:text-accent"
              />
            </a>
            <a
              href="https://github.com/Os-humble-man"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={20}
                className="cursor-pointer hover:text-accent"
              />
            </a>

            <FaFacebookF
              size={20}
              className="cursor-pointer hover:text-accent"
            />
            <BsTwitterX
              size={20}
              className="cursor-pointer hover:text-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
