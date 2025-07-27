import { useTranslation } from "react-i18next";
import type { ProjectCreationOption } from "../types/types";
import { NavLink } from "react-router";

interface ProjectCardProps {
  option: ProjectCreationOption;
  onClick: (option: ProjectCreationOption) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ option, onClick }) => {
  const { t } = useTranslation("home");
  return (
    <div
      onClick={() => onClick(option)}
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer group"
    >
      <NavLink to={option.route}>
        <div className="flex flex-col items-center text-center space-y-4">
          <div
            className={`p-4 rounded-full ${option.color} group-hover:scale-110 transition-transform duration-200`}
          >
            {option.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t(option.title)}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t(option.description)}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default ProjectCard;
