import React, { useState } from "react";
import { ChevronDown, User, LogOut, Settings, HelpCircle } from "lucide-react";

const HeaderUserProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative ml-6">
      {/* Profile section */}
      <div
        className="flex items-center space-x-1 lg:space-x-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {/* Profile Icon Circle */}
        <div className="h-8 w-8 flex justify-center items-center rounded-full bg-primary text-white">
          <User className="w-4 h-4" />
        </div>

        {/* Username with dropdown icon */}
        <div className="flex items-center text-body1 text-gray-700 hover:text-primary transition-colors">
          {/* User name  */}
          <span className="mr-1 select-none">田中 太郎</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <User className="w-4 h-4 mr-2 text-gray-500" />
              Profile
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Settings className="w-4 h-4 mr-2 text-gray-500" />
              Settings
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <HelpCircle className="w-4 h-4 mr-2 text-gray-500" />
              Help
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-100">
              <LogOut className="w-4 h-4 mr-2 text-gray-500" />
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderUserProfile;
