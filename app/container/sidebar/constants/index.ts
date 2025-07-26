import { FileText, Home, Users } from "lucide-react";
import type { TSidebarItem } from "../types";
import { useLanguage } from "~/context/LanguageContext";
const { t } = useLanguage();
export const sidebarItems: TSidebarItem[] = [
  {
    id: "home",
    label: t("home"),
    icon: Home,
    href: "/",
  },
  {
    id: "team-project",
    label: t("teamProject"),
    icon: Users,
    children: [
      {
        id: "private",
        label: t("private"),
        icon: Users,
        href: "/team/private",
      },
      {
        id: "development",
        label: t("developmentTeam"),
        icon: Users,
        href: "/team/development",
      },
      {
        id: "sales",
        label: t("salesTeam"),
        icon: Users,
        href: "/team/sales",
      },
      {
        id: "marketing",
        label: t("marketingTeam"),
        icon: Users,
        children: [
          {
            id: "ma-tools",
            label: t("maToolSettings"),
            href: "/team/marketing/ma-tools",
          },
          {
            id: "hearing-sheet",
            label: t("hearingSheet"),
            href: "/team/marketing/hearing-sheet",
          },
        ],
      },
    ],
  },
  {
    id: "required-items",
    label: t("requiredItems"),
    icon: FileText,
    children: [
      {
        id: "business-background",
        label: t("businessBackground"),
        status: "completed",
        href: "/requirements/business-background",
      },
      {
        id: "utilization-info",
        label: t("utilizationInfo"),
        status: "inProgress",
        href: "/requirements/utilization-info",
      },
      {
        id: "function-requirements",
        label: t("functionRequirements"),
        status: "pending",
        href: "/requirements/function-requirements",
      },
      {
        id: "technical-constraints",
        label: t("technicalConstraints"),
        status: "pending",
        href: "/requirements/technical-constraints",
      },
    ],
  },
];
