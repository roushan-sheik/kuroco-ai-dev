import React, { useState } from "react";
import {
  Home,
  Users,
  Lock,
  ChevronDown,
  ChevronRight,
  Folder,
  TrendingUp,
  Megaphone,
} from "lucide-react";
import { FaUser } from "react-icons/fa";

interface TeamItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface DropdownTeam {
  id: string;
  name: string;
  icon: React.ReactNode;
  items?: TeamItem[];
}

const SidebarList = () => {
  const [expandedTeams, setExpandedTeams] = useState<string[]>(["development"]);

  const toggleTeam = (teamId: string) => {
    setExpandedTeams((prev) =>
      prev.includes(teamId)
        ? prev.filter((id) => id !== teamId)
        : [...prev, teamId]
    );
  };

  const teams: DropdownTeam[] = [
    {
      id: "development",
      name: "Development Team",
      icon: <Users className="w-4 h-4 text_third" />,
      items: [
        {
          id: "ec-renewal",
          name: "ECサイトリニューアル",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "management-system",
          name: "顧客管理システム",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
      ],
    },
    {
      id: "sales",
      name: "Sales Team",
      icon: <TrendingUp className="w-4 h-4 text_third" />,
      items: [
        {
          id: "lead-management",
          name: "リード管理システム",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "sales-dashboard",
          name: "営業ダッシュボード",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "crm-integration",
          name: "CRM統合プロジェクト",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "sales-automation",
          name: "営業自動化ツール",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing Team",
      icon: <Megaphone className="w-4 h-4 text_third" />,
      items: [
        {
          id: "campaign-management",
          name: "キャンペーン管理",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "social-media",
          name: "ソーシャルメディア戦略",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "content-strategy",
          name: "コンテンツ戦略",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "analytics-reporting",
          name: "分析レポートシステム",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
        {
          id: "email-marketing",
          name: "メールマーケティング",
          icon: <Folder className="w-4 h-4 text_third" />,
        },
      ],
    },
  ];

  return (
    <div className="w-64 bg-white  min-h-screen">
      <div className="p-4">
        {/* Private */}
        <div className="flex items-center select-none gap-3 p-2 mb-2 text-gray-700 hover:bg-gray-50 rounded-md cursor-pointer">
          <FaUser className="text_third" />
          <h4 className="text_sec">Private</h4>
        </div>

        {/* Teams with Dropdowns */}
        {teams.map((team) => (
          <div key={team.id} className="mb-1">
            <div
              className="flex items-center gap-2 p-2 text-gray-700 select-none hover:bg-gray-50 rounded-md cursor-pointer group"
              onClick={() => toggleTeam(team.id)}
            >
              {/* Arrow on the left */}
              {team.items && team.items.length > 0 && (
                <div className="transition-transform duration-200">
                  {expandedTeams.includes(team.id) ? (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              )}

              {/* Team icon and name */}
              <div className="flex items-center gap-3">
                {team.icon}
                <span className="text-sm">{team.name}</span>
              </div>
            </div>

            {/* Dropdown Items */}
            {expandedTeams.includes(team.id) &&
              team.items &&
              team.items.length > 0 && (
                <div className="ml-6 mt-1 space-y-1">
                  {team.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 p-2 text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer text-sm"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarList;
