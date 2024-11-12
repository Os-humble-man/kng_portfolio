import React from "react";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import BlogPosts from "../components/sections/BlogPosts";

export default function Home() {
  return (
    <div className=" dark:bg-darkPrimary bg-primary">
      <Header />
      <About />

      <Services />

      <Projects />
      <BlogPosts />
      <Contact />

      <Footer />
    </div>
  );
}
