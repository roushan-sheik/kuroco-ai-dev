// src/pages/Projects.tsx
import React from "react";
import LanguageDropdown from "~/container/header/components/LanguageDropdown";
import { useLanguage } from "~/context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Language selector in the top right */}
      <div className="flex justify-end mb-6">
        <LanguageDropdown />
      </div>

      {/* Main content */}
      <div className="space-y-4">
        <h2 className="text-body2 text-3xl font-bold">{t("projectsTitle")}</h2>
        <p className="text-lg text-gray-600">{t("projectsDescription")}</p>

        {/* Example project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              {t("projectsTitle")} 1
            </h3>
            <p className="text-gray-600">{t("projectsDescription")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              {t("projectsTitle")} 2
            </h3>
            <p className="text-gray-600">{t("projectsDescription")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">
              {t("projectsTitle")} 3
            </h3>
            <p className="text-gray-600">{t("projectsDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
