import React from "react";
import { Check, Circle } from "lucide-react";
import type { DocumentStructureProps, Section, SubItem } from "../types/types";
import { defaultSections } from "../constants/documentStructure";
import ProgressBar from "./ui/ProgressBar";
import SectionHeader from "./ui/SectionHeader";

const CompletionIcon: React.FC<{ completed: boolean }> = ({ completed }) => {
  if (completed) {
    return (
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
        <Check size={12} className="text-white" />
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
      <Circle size={12} className="text-gray-500" />
    </div>
  );
};

const SubItem: React.FC<{ item: SubItem }> = ({ item }) => (
  <div className="flex items-center gap-3 py-2 px-4 hover:bg-gray-50 transition-colors duration-200 rounded-md">
    <span
      className={`text-body3 flex-1 ${
        item.completed ? "text-foreground" : "text-muted-foreground"
      }`}
    >
      {item.title}
    </span>
    <CompletionIcon completed={item.completed} />
  </div>
);

const DocumentStructure: React.FC<DocumentStructureProps> = ({
  sections = defaultSections,
  className = "",
}) => {
  const [expandedSections, setExpandedSections] = React.useState<Set<string>>(
    new Set(sections.map((section) => section.id))
  );

  const toggleSection = React.useCallback((sectionId: string) => {
    setExpandedSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }, []);

  const overallProgress = React.useMemo(() => {
    const totalItems = sections.reduce(
      (acc, section) => acc + section.subItems.length,
      0
    );
    const completedItems = sections.reduce(
      (acc, section) =>
        acc + section.subItems.filter((item) => item.completed).length,
      0
    );
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  }, [sections]);

  return (
    <div
      className={`bg-white min-w-[315px]
         border-r border-gray-300  overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-border bg-gray-50/50">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-heading3 text-foreground font-semibold">
            Document Structure
          </h2>
          <span className="text-caption1 text-muted-foreground">
            {overallProgress}% Complete
          </span>
        </div>
        <ProgressBar progress={overallProgress} />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-8">
          {sections.map((section) => {
            const isExpanded = expandedSections.has(section.id);

            return (
              <div key={section.id} className="space-y-2">
                <SectionHeader
                  section={section}
                  isExpanded={isExpanded}
                  onToggle={() => toggleSection(section.id)}
                />

                {isExpanded && (
                  <div
                    id={`section-${section.id}`}
                    className="ml-2 space-y-1 animate-in slide-in-from-top-1 duration-200"
                  >
                    {section.subItems.map((item) => (
                      <SubItem key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DocumentStructure;
