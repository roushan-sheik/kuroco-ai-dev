import type { Question } from "../types/types";

export const questions: Question[] = [
  {
    id: "purpose",
    title: "質問 1",
    question: "What is the main purpose of this project?",
    options: [
      "New system development",
      "Existing system improvement",
      "Business efficiency",
      "Other",
    ],
  },
  {
    id: "timeline",
    title: "質問 2",
    question: "What is your expected timeline for completion?",
    options: [
      "Less than 3 months",
      "3-6 months",
      "6-12 months",
      "More than 12 months",
    ],
  },
  {
    id: "budget",
    title: "質問 3",
    question: "What is your approximate budget range?",
    options: [
      "Under $10,000",
      "$10,000 - $50,000",
      "$50,000 - $100,000",
      "Over $100,000",
    ],
  },
  {
    id: "team",
    title: "質問 4",
    question: "How many team members will be involved?",
    options: [
      "1-5 members",
      "6-10 members",
      "11-20 members",
      "More than 20 members",
    ],
  },
  {
    id: "priority",
    title: "質問 5",
    question: "What is your top priority for this project?",
    options: [
      "Speed of delivery",
      "Quality and reliability",
      "Cost effectiveness",
      "Innovation and features",
    ],
  },
];
