import type { Section } from "../types/types";

export const defaultSections: Section[] = [
  {
    id: "project-overview",
    title: "Project Overview",
    progress: 50,
    subItems: [
      { id: "purpose", title: "Purpose & Background", completed: true },
      { id: "scope", title: "Project Scope", completed: true },
      {
        id: "deliverables",
        title: "Deliverables & Definitions",
        completed: false,
      },
      { id: "schedule", title: "Schedule Overview", completed: false },
    ],
  },
  {
    id: "requirements",
    title: "Requirements Specification",
    progress: 25,
    subItems: [
      { id: "functional", title: "Functional Requirements", completed: true },
      {
        id: "non-functional",
        title: "Non-functional Requirements",
        completed: false,
      },
      { id: "security", title: "Security Requirements", completed: false },
      { id: "interface", title: "Interface Requirements", completed: false },
    ],
  },
  {
    id: "system-design",
    title: "System Design",
    progress: 0,
    subItems: [
      { id: "architecture", title: "System Architecture", completed: false },
      { id: "data-design", title: "Data Design", completed: false },
      { id: "ui-design", title: "UI Design", completed: false },
    ],
  },
];
