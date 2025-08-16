import type { Section } from "../../types/types";
import ProgressBar from "./ProgressBar";

const SectionHeader: React.FC<{
  section: Section;
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ section, isExpanded, onToggle }) => {
  const completedCount = section.subItems.filter(
    (item) => item.completed
  ).length;
  const totalCount = section.subItems.length;

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={onToggle}
          className="text-foreground hover:text-primary transition-colors duration-200 focus:outline-none cursor-pointer w-full"
          aria-expanded={isExpanded}
          aria-controls={`section-${section.id}`}
        >
          <div className="flex items-center justify-between text-body1 w-full">
            <span>{section.title}</span>
            <span className="text-caption1 text-muted-foreground">
              {section.progress}%
            </span>
          </div>
        </button>
      </div>
      <ProgressBar progress={section.progress} />
      <div className="text-caption2 text-muted-foreground mt-1">
        {completedCount} of {totalCount} completed
      </div>
    </div>
  );
};

export default SectionHeader;
