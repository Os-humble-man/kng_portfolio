import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full dark:bg-darkPrimary bg-primary">
      <hr className="border-t border-gray-400" />
      <div className="py-6 md:py-10 mx-auto px-4 md:px-8 lg:px-12">
        <div className="w-full gap-y-3  flex flex-col md:flex-row justify-between items-center text-textColor dark:text-darkText">
          <h1 className="text-sm md:text-base  md:mb-0">
            &copy; 2024 All rights reserved to Oscar Kanangila
          </h1>
          <div className="flex items-center gap-3">
            <FaLinkedinIn
              size={20}
              className="cursor-pointer hover:text-accent"
            />
            <FaGithub size={20} className="cursor-pointer hover:text-accent" />
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
