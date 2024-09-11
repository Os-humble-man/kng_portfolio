import React from "react";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import ScrollLayout from "../components/layout/ScrollLayout";

export default function Home() {
  return (
    <div className=" dark:bg-darkPrimary bg-primary">
      {/* <ScrollLayout> */}
      <Header />
      {/* </ScrollLayout> */}

      {/* <ScrollLayout> */}
      <About />
      {/* </ScrollLayout> */}

      {/* <ScrollLayout> */}
      <Services />
      {/* </ScrollLayout> */}

      {/* <ScrollLayout> */}
      <Projects />
      {/* </ScrollLayout> */}
      {/* <ScrollLayout> */}
      <Contact />
      {/* </ScrollLayout> */}

      <Footer />
    </div>
  );
}
