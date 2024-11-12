import React, { useEffect, useState } from "react";
import BlogCard from "./BlogPosts";

const DEV_TO_KEY = import.meta.env.DEV_TO_KEY;

export default function BlogPosts() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles/me", {
      headers: {
        "api-key": DEV_TO_KEY,
      },
    })
      .then((response) => console.log(response))
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des articles :", error);
      });
  }, []);

  return (
    <div
      className="w-full bg-primary py-10 mx-auto px-8 md:px-12 lg:px-24 dark:bg-darkPrimary"
      id="blog"
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {articles.map((article) => (
          <BlogCard
            key={article.id}
            title={article.title}
            description={article.description}
            coverImage={article.cover_image}
            url={article.url}
          />
        ))}
      </div>
    </div>
  );
}
