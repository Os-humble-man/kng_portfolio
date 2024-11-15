import React from "react";
import img from "../../assets/gameHub.png";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectCard({ title, image, description, url }) {
  return (
    <div className="p-4 flex flex-col items-start font-monserrat max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto hover:scale-105 transition-all duration-300">
      <img src={image} className="w-full h-auto rounded-lg" alt="project" />
      <h3 className="font-semibold text-lg md:text-xl lg:text-2xl py-4 text-gray-950 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full space-y-2 sm:space-y-0">
        <p className="mt-2 line-clamp-2 text-gray-400 p-2 flex-grow text-sm sm:text-base md:text-lg">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          className="p-2 bg-accent rounded-full flex items-center justify-center mt-2 sm:mt-0 cursor-pointer hover:bg-cyan-400"
        >
          <GoArrowUpRight size={25} />
        </a>
      </div>
    </div>
  );
}
