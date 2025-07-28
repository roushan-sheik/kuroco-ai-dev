import { useTranslation } from "react-i18next";
import type { TeamOption } from "../types/types";

interface TeamCardProps {
  option: TeamOption;
  isSelected: boolean;
  onClick: (option: TeamOption) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ option, isSelected, onClick }) => {
  const { t } = useTranslation("home");
  return (
    <div
      onClick={() => onClick(option)}
      className={`bg-white border rounded-lg p-6 cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-blue-500 shadow-md ring-2 ring-blue-100"
          : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-2 rounded-full ${option.iconColor}`}>
          {option.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {t(option.title)}
          </h3>
          <p className="text-sm text-gray-600">{t(option.description)}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
