import React, { useState } from "react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [exportFormat, setExportFormat] = useState("Word (.docx)");
  const [exportRange, setExportRange] = useState("all");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Export Settings</h2>

        {/* Export Format */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Export Format
          </label>
          <input
            type="text"
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Export Range */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Export Range
          </label>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="exportRange"
                value="all"
                checked={exportRange === "all"}
                onChange={() => setExportRange("all")}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>All Sections</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="exportRange"
                value="selected"
                checked={exportRange === "selected"}
                onChange={() => setExportRange("selected")}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>Selected Sections Only</span>
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => {
              alert(`Exporting as ${exportFormat} | Range: ${exportRange}`);
              onClose();
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
          >
            Execute Export
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 mb-4 text-end"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
