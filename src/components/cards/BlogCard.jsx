import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function BlogCard({ title, description, coverImage, url }) {
  return (
    <div className="p-4 text-white flex flex-col items-start font-monserrat bg-secondary rounded-lg shadow-md">
      <img
        src={coverImage}
        className="w-full h-40 object-cover rounded-t-lg"
        alt={title}
      />
      <h3 className="font-semibold text-xl py-2">{title}</h3>
      <p className="text-gray-400 p-2 flex-grow">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-accent rounded-full flex items-center justify-center mt-4"
      >
        <GoArrowUpRight size={25} />
      </a>
    </div>
  );
}
