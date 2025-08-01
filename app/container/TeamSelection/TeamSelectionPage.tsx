import React, { useState } from "react";
import { Users, User } from "lucide-react";
import type { TeamOption } from "./types/types";
import TeamCard from "./components/TeamCard";
import { Button } from "~/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const TeamSelectionPage: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const { t } = useTranslation("home");

  const navigate = useNavigate();

  const teamOptions: TeamOption[] = [
    {
      id: "development",
      title: "developmentTeam",
      description: "addToExistingTeam",
      icon: <Users className="w-6 h-6 text-white" />,
      iconColor: "bg-blue-500",
    },
    {
      id: "private",
      title: "private",
      description: "privateDescription",
      icon: <User className="w-6 h-6 text-white" />,
      iconColor: "bg-gray-600",
    },
  ];

  const handleTeamSelect = (option: TeamOption) => {
    setSelectedTeam(option.id);
    console.log("Selected team:", option);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center lg:text-start mb-12">
          <h1 className="text-3xl font-bold  title mb-3">
            {t("teamSelection")}
          </h1>
          <p className="text-lg text-gray-600">
            {t("teamSelectionDescription")}
          </p>
        </div>

        {/* Team Options */}
        <div className="space-y-4 mb-12">
          {teamOptions.map((option) => (
            <TeamCard
              key={option.id}
              option={option}
              isSelected={selectedTeam === option.id}
              onClick={handleTeamSelect}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button onClick={handleBack} variant={"ghost"}>
            {t("back")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamSelectionPage;
