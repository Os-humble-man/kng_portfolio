import React from 'react'

export default function ProjectCard({title,image}) {
  return (
    <div className="p-4 border rounded-lg bg-gray-800 text-white flex flex-col items-start font-monserrat h-full w-full">
    <div className="text-gray-800 mb-2 bg-white rounded-md p-2 flex justify-center items-center">
      <FaBookOpenReader size={30} />
    </div>
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="mt-2 text-gray-400 p-2 flex-grow">{description}</p>
  </div>
  )
}
