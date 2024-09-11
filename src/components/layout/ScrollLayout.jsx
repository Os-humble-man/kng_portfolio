import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollLayout({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.2, // Le pourcentage de la section visible avant le déclenchement
    triggerOnce: true, // Ne déclenche qu'une seule fois
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Position initiale avant d'être visible
      animate={inView ? { opacity: 1, y: 0 } : {}} // Quand la section est visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Durée et style de la transition
    >
      {children}
    </motion.div>
  );
}
