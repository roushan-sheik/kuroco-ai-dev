import React from "react";
import { Bot, FileText, Edit3, Upload } from "lucide-react";
import type { ProjectCreationOption } from "./types/types";
import ProjectCard from "./components/ProjectCard";
import { Button } from "~/components/ui/button";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const CreateNewProjectPage: React.FC = () => {
  const { t } = useTranslation("home");

  const projectOptions: ProjectCreationOption[] = [
    {
      id: "ai-auto",
      title: "aiSupportedAutoGeneration",
      description: "aiDescription",
      icon: <Bot className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      route: "#",
    },
    {
      id: "template",
      title: "templateBasedCreation",
      description: "templateDescription",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-green-500",
      route: "#",
    },
    {
      id: "free-form",
      title: "freeForm",
      description: "freeFormDescription",
      icon: <Edit3 className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
      route: "/create-new-project/team-selection",
    },
    {
      id: "import",
      title: "import",
      description: "importDescription",
      icon: <Upload className="w-8 h-8 text-white" />,
      color: "bg-gray-800",
      route: "#",
    },
  ];

  const handleCardClick = (option: ProjectCreationOption) => {
    console.log("Selected project creation method:", option);
    // Handle navigation or modal opening based on selected option
  };

  const handleBack = () => {
    console.log("Back button clicked");
    // Handle back navigation
  };

  return (
    <div className="min-h-screen bg-gray-50  py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center lg:text-start mb-12">
          <h1 className="text-3xl font-bold title mb-3">
            {t("createNewProject")}
          </h1>
          <p className="text-lg text-gray-600">{t("selectCreationMethod")}</p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projectOptions.map((option) => (
            <ProjectCard
              key={option.id}
              option={option}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <NavLink to={"/"}>
            <Button onClick={handleBack} variant={"ghost"}>
              {t("back")}
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProjectPage;
