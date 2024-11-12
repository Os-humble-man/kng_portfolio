import React from "react";
import ScrollLayout from "../layout/ScrollLayout";
import { useTranslation } from "react-i18next";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  const { i18n, t } = useTranslation();

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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </ScrollLayout>
    </div>
  );
}
