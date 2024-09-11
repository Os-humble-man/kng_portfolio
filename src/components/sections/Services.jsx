import React from "react";
import cardData from "../utils/CardData";
import ServiceCard from "../cards/ServiceCard";
import ScrollLayout from "../layout/ScrollLayout";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div
      className="w-full bg-primary dark:bg-darkPrimary py-10 mx-auto px-8 md:px-12 lg:px-24"
      id="services"
    >
      <ScrollLayout>
        <div className="flex justify-center flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat">
          <h1 className="font-bold text-5xl">What I do</h1>
          <h2 className="font-bold text-3xl flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              My Services
            </span>
          </h2>
        </div>
      </ScrollLayout>
      <ScrollLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                index === 3 ? "md:col-span-2" : ""
              }`}
            >
              <motion.div
                className="card"
                whileHover={{ scale: [null, 0.99, 0.99] }}
                transition={{ duration: 0.3 }} // Durée de la transition
              >
                <ServiceCard
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </ScrollLayout>
    </div>
  );
}
