import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 dark:bg-gray-800 text-textColor dark:text-darkText flex flex-col items-start font-monserrat h-full w-full transition-transform transform  shadow-lg hover:shadow-xl">
      <div className="rounded-md p-2 flex justify-center items-center w-full mb-4">
        <img src={icon} className="w-20 h-auto sm:w-24 lg:w-32" alt={icon} />
      </div>
      <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2 text-center w-full ">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-300 p-2 flex-grow text-sm sm:text-base lg:text-lg text-left">
        {description}
      </p>
    </div>
  );
}
