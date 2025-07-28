import React from "react";
import { Plus, FileText, File } from "lucide-react";
import HomeSearch from "./components/HomeSearch";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const Home = () => {
  const { t } = useTranslation("home");
  const recentItems = [
    {
      id: 1,
      title: "開発チーム > ECサイトリニューアル > 要件定義書",
      lastUpdated: "最終更新: 2024/12/10 14:30",
      type: "document",
    },
    {
      id: 2,
      title: "営業チーム > CRM導入 > ヒアリングシート",
      lastUpdated: "最終更新: 2024/12/09 16:45",
      type: "sheet",
    },
  ];

  return (
    <div className="min-h-screen lg:mt-18  p-6">
      <div className="w-full mx-auto">
        {/* Quick Actions Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t("quickActions")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Create New Project Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
              <NavLink to={"/create-new-project"}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {t("createNewProject")}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t("startRequirementsWithAI")}
                    </p>
                  </div>
                </div>
              </NavLink>
            </div>

            {/* Create Interview Sheet Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t("createInterviewSheet")}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t("conductInterviews")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <HomeSearch />

        {/* Recent Access History Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t("recentAccessHistory")}
          </h2>

          <div className="space-y-4 rounded-lg border border-gray-200 lg:p-8 p-4 bg-white">
            {recentItems.map((item) => (
              <div key={item.id} className=" cursor-pointer">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    {item.type === "document" ? (
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <File className="w-4 h-4 text-blue-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">{item.lastUpdated}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
