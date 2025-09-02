import React, { useState } from "react";
import { CameraIcon } from "@heroicons/react/24/solid";

interface UserProfileCardProps {
  initialName: string;
  initialEmail: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  initialName,
  initialEmail,
}) => {
  const [name, setName] = useState("田中 太郎");
  const [email, setEmail] = useState("tanaka@example.com");

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  return (
    <div className=" px-4 py-8">
      {/* Title Section */}
      {/* Card Section */}
      <div className="bg-white rounded-lg p-0">
        {/* Profile Info Row */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
              T
            </div>
            {/* Camera Icon */}
            <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
              <CameraIcon className="h-4 w-4 text-blue-500" />
            </button>
          </div>

          {/* Name and Email */}
          <div className="flex-1 space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 block">
                Name
              </label>
              <div className="flex items-center ">
                <input
                  type="text"
                  value={name}
                  disabled={!isEditingName}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    isEditingName ? "bg-white" : ""
                  }`}
                />
                <button
                  onClick={() => setIsEditingName(!isEditingName)}
                  className="text-sm text-blue-600 ml-4 hover:underline"
                >
                  {isEditingName ? "Save" : "Edit"}
                </button>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 block">
                Email Address
              </label>
              <div className="flex items-center ">
                <input
                  type="email"
                  value={email}
                  disabled={!isEditingEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    isEditingEmail ? "bg-white" : ""
                  }`}
                />
                <button
                  onClick={() => setIsEditingEmail(!isEditingEmail)}
                  className="text-sm text-blue-600 ml-4 hover:underline"
                >
                  {isEditingEmail ? "Save" : "Change"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
