import React, { useState } from "react";
import {
  ArrowLeft,
  RotateCcw,
  RotateCw,
  Square,
  Download,
  Bot,
  Settings,
  X,
} from "lucide-react";

const ExportModal = ({ isOpen, onClose }) => {
  const [exportFormat, setExportFormat] = useState("word");
  const [exportRange, setExportRange] = useState("all");

  if (!isOpen) return null;

  const handleExport = () => {
    // Handle export logic here
    console.log("Exporting with format:", exportFormat, "range:", exportRange);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Export Settings
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6">
          {/* Export Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Export Format
            </label>
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="word">Word (.docx)</option>
              <option value="pdf">PDF (.pdf)</option>
              <option value="markdown">Markdown (.md)</option>
            </select>
          </div>

          {/* Export Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Export Range
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="all"
                  checked={exportRange === "all"}
                  onChange={(e) => setExportRange(e.target.value)}
                  className="mr-3 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">All Sections</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="selected"
                  checked={exportRange === "selected"}
                  onChange={(e) => setExportRange(e.target.value)}
                  className="mr-3 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Selected Sections Only
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Execute Export
          </button>
        </div>
      </div>
    </div>
  );
};

const Layout = () => {
  const [content, setContent] = useState("");
  const [currentSection, setCurrentSection] = useState("Project Overview");
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </button>
            <h1 className="text-lg font-medium text-gray-900">要件定義書</h1>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <RotateCcw size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <RotateCw size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Square size={20} />
            </button>
            <button
              onClick={() => setIsExportModalOpen(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              <span className="text-sm font-medium">Export</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Content Editor */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-md min-h-[600px]">
                <div className="p-8">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="要件定義書の内容をここに入力してください..."
                    className="w-full h-96 p-4 resize-none focus:outline-none rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="flex-1 px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600 bg-blue-50">
                <div className="flex items-center justify-center space-x-2">
                  <Bot size={16} />
                  <span>AI Consultation</span>
                </div>
              </button>
              <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                <div className="flex items-center justify-center space-x-2">
                  <Settings size={16} />
                  <span>Tools</span>
                </div>
              </button>
            </nav>
          </div>

          {/* AI Consultation Content */}
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                AI Consultation
              </h3>
              <p className="text-xs text-gray-600">
                Current Section: {currentSection}
              </p>
            </div>

            {/* AI Suggestion Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-start space-x-3">
                <Bot size={16} className="text-blue-600 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-800">
                    こんにちは！要件定義書の作成をお手伝いします。現在編集中のセクションについて質問があれば、お気軽にお聞かせください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
};

const EditorPageForFreeFormPage = () => {
  return <Layout />;
};

export default EditorPageForFreeFormPage;
