import React from "react";
import gmailLogo from "../../assets/gmail.png";
import ScrollLayout from "../layout/ScrollLayout";

export default function Contact() {
  return (
    <div
      className="w-full bg-primary dark:bg-darkPrimary py-10 px-4 sm:px-8 md:px-12 lg:px-24"
      id="resume"
    >
      <ScrollLayout>
        <div className="flex flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Get In Touch
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Let's work together
            </span>
          </h2>
        </div>
      </ScrollLayout>

      <ScrollLayout>
        <div className="w-full flex justify-center text-textColor dark:text-darkText">
          <form action="" className="w-full max-w-lg flex flex-col gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary  bg-primary"
                id="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary bg-primary"
                id="email"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="block">
                Service
              </label>
              <select
                name="service"
                id="service"
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary bg-primary"
              >
                <option value="">Please select a service</option>
                {/* Add more options here */}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full p-3 rounded-md border border-gray-500 dark:border-gray-600 dark:bg-darkPrimary bg-primary"
                rows={5}
              ></textarea>
            </div>

            <button className="w-full p-3 bg-gray-300 text-darkPrimary rounded-md font-semibold hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              Get In Touch
            </button>
          </form>
        </div>
      </ScrollLayout>

      <ScrollLayout>
        <div className="w-full py-10 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textColor dark:text-darkText text-center lg:text-left mb-6 lg:mb-0">
              Let’s Work Together -
            </h1>
            <div className="flex items-center border  border-gray-500 dark:border-white rounded-md px-4 py-3 md:px-5 md:py-4">
              <img
                src={gmailLogo}
                className="w-8 h-8 md:w-10 md:h-10"
                alt="gmail logo"
              />
              <h2 className="ml-3 text-textColor dark:text-darkText font-normal text-base md:text-lg">
                Oscarkanangila01@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </ScrollLayout>
    </div>
  );
}
