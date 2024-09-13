import React from "react";
import ScrollLayout from "../layout/ScrollLayout";
import { useTranslation } from "react-i18next";


export default function Projects() {
  const { i18n, t } = useTranslation(); 

  return (
    <div
      className="min-w-full  bg-primary dark:bg-darkPrimary py-10"
      id="projects"
    >
      <ScrollLayout>
        <div className="flex justify-center flex-col items-center gap-4 text-textColor dark:text-darkText font-monserrat">
          <h1 className=" font-bold text-5xl ">{t('sectionTitle.project')}</h1>
          <h2 className="font-bold text-3xl flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              {t('sectionTitle.projectSubtitle')}
            </span>
          </h2>
        </div>
      </ScrollLayout>
    </div>
  );
}
