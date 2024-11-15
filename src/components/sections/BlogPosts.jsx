import React, { useEffect, useState } from "react";
import BlogCard from "./BlogPosts";
import ScrollLayout from "../layout/ScrollLayout";
import Button from "../ui/Button";
import axios from "axios";
import ProjectCard from "../cards/ProjectCard";

const DEV_TO_KEY = import.meta.env.DEV_TO_KEY;

export default function BlogPosts() {
  const [articles, setArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const toggleShowAll = () => setShowAll(!showAll);

  const getArticle = async () => {
    try {
      const response = await axios.get(
        "https://dev.to/api/articles?username=oshumbleman"
      );
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetch("https://dev.to/api/articles?username=oshumbleman")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setArticles(data);
    //   })
    //   .catch((error) => {
    //     console.error("Erreur lors de la récupération des articles :", error);
    //   });

    getArticle();
  }, []);

  return (
    <div
      className="w-full bg-primary py-10 mx-auto px-8 md:px-12 lg:px-24 dark:bg-darkPrimary"
      id="blog"
    >
      {/* <ScrollLayout> */}
      <div className="flex justify-center flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat">
        <h1 className="font-bold text-5xl">{"Blog Posts"}</h1>
        <h2 className="font-bold text-3xl  flex items-center">
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            {"Articles I've written "}
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {" "}
        {articles.map((article) => (
          <ScrollLayout>
            <ProjectCard
              key={article.id}
              title={article.title}
              image={article.cover_image}
              url={article.url}
            />
          </ScrollLayout>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button
          onClick={toggleShowAll}
          text={`${showAll ? "Réduire" : "Voir tous les projets"}`}
          borderColor={"border-accent"}
        ></Button>
      </div>
      {/* </ScrollLayout> */}
    </div>
  );
}
