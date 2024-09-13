import React, { useState } from "react";
import technologies from "../utils/TechData";

export default function TechTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="flex justify-around mb-4 border-b-2 border-gray-300 dark:border-gray-700">
        {technologies.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 focus:outline-none font-semibold transition-colors ${
              activeTab === index
                ? "bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent border-b-2 border-accent"
                : "text-gray-500 dark:text-gray-300"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <ul className="list-none space-y-4">
          {technologies[activeTab].items.map((tech, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-4 text-gray-800 dark:text-gray-200"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />
              <span className="font-medium">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
