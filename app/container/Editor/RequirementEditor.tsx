import React, { useState } from "react";
import { RotateCcw } from "lucide-react";
import { RotateCw } from "lucide-react";
import { Save } from "lucide-react";
import ExportModal from "./ExportModal";
import { Bot } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const RequirementEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"consultation" | "tools">(
    "consultation"
  );
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
        <div className="flex items-center space-x-3">
          <button
            // go back to previous page
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <h1 className="text-lg font-semibold">要件定義書</h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-gray-600 hover:text-gray-800 mr-2">
            <RotateCcw />
          </button>
          <button className="text-gray-600 hover:text-gray-800 mr-2">
            {" "}
            <RotateCw />
          </button>
          <button className="text-gray-600 hover:text-gray-800 mr-2">
            <Save />
          </button>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Export
          </button>
          <ExportModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-1">
        {/* Left Panel */}
        <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow px-10 pt-14 h-[65vh] space-y-24">
            <h2 className="text-lg font-semibold">Purpose &amp; Background</h2>
            <h2 className="text-lg font-semibold">Project Scope</h2>
            <h2 className="text-lg font-semibold">Functional Requirements</h2>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-96 border-l bg-white flex flex-col">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("consultation")}
              className={`flex items-center justify-center gap-2 flex-1 px-4 py-3 text-sm font-semibold transition ${
                activeTab === "consultation"
                  ? "border-b-2 bg-blue-100 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Bot className="pb-1 h-6 w-6" />
              <span>AI Consultation</span>
            </button>

            <button
              onClick={() => setActiveTab("tools")}
              className={`flex-1 px-4 py-2 text-sm font-semibold ${
                activeTab === "tools"
                  ? "border-b-2 bg-blue-100 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Tools
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto ">
            {activeTab === "consultation" ? (
              <div>
                <div className="border-b px-8 py-2">
                  <h2 className="text-lg font-bold mt-2"> AI Consultation</h2>
                  <h3 className="text-sm text-gray-400 my-2">
                    Current Section: Project Overview
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  <div className="bg-blue-50 border border-blue-200 p-3 mb-70 rounded-md text-sm text-gray-700 flex items-start space-x-2">
                    <span className="text-blue-500">
                      <Bot className="pb-1 h-6 w-6" />
                    </span>
                    <p>
                      Hello! I'm here to help you create requirements documents.
                      Feel free to ask questions about the section you’re
                      currently editing.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-600 text-sm p-8">
                  Tools will appear here...
                </p>
              </div>
            )}
          </div>

          {/* Chat Input */}
          {activeTab === "consultation" && (
            <div className="p-3 border-t flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter message..."
                className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">
                ➤
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequirementEditor;
