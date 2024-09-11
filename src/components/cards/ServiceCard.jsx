import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 text-textColor  dark:bg-gray-800 dark:text-darkText flex flex-col items-start font-monserrat h-full w-full">
      <div className="text-gray-800 mb-2 bg-blue-300 dark:bg-white rounded-md p-2 flex justify-center items-center">
        <FaBookOpenReader size={30} />
      </div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-gray-400 p-2 flex-grow">{description}</p>
    </div>
  );
}
