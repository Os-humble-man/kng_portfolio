import React, { useState } from "react";
import ScrollLayout from "../layout/ScrollLayout";
import { useTranslation } from "react-i18next";
import ProjectCard from "../cards/ProjectCard";
import Button from "../ui/Button";

export default function Projects() {
  const { i18n, t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // Exemple de liste de projets
  const projects = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    title: `Project ${index + 1}`,
    image: "", // ajoutez les images correspondantes ici
  }));

  // Divisez la liste des projets en groupes de base et supplémentaires
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // Fonction pour alterner l'état d'affichage
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <div
      className="w-full bg-primary py-10 mx-auto px-8 md:px-12 lg:px-24 dark:bg-darkPrimary"
      id="projects"
    >
      <ScrollLayout>
        <div className="flex justify-center flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat">
          <h1 className="font-bold text-5xl">{t("sectionTitle.project")}</h1>
          <h2 className="font-bold text-3xl flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t("sectionTitle.projectSubtitle")}
            </span>
          </h2>
        </div>

        {/* Conteneur des cartes avec une grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
            />
          ))}
        </div>

        {/* Bouton View All Projects */}
        <div className="flex justify-center mt-8">
          <Button
            onClick={toggleShowAll}
            text={`${showAll ? t("Réduire") : t("Voir tous les projets")}`}
            borderColor={"border-accent"}
          ></Button>
        </div>
      </ScrollLayout>
    </div>
  );
}
