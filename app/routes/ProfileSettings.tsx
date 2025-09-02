import React, { useState } from "react";
import {
  Shield,
  Users,
  Monitor,
  Settings,
  Download,
  StarIcon,
  Check,
} from "lucide-react";
import PasswordManagement from "~/components/layout/components/PasswordManagemant";
import UserProfileCard from "~/components/layout/UserProfileCard";
import JoinedProjects from "~/components/layout/components/JoinedProjects";

const ProfileSettings: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordStrength = newPassword.length > 6 ? "Strong" : "Weak";

  return (
    <div className="min-h-screen max-w-[1300px] mx-auto bg-gray-50 p-6 mt-8">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
      <p className="text-gray-600 mt-1 mb-6">
        Manage your account information and preferences
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Basic Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <UserProfileCard
              initialName="田中 太郎"
              initialEmail="tanaka@example.com"
            />
          </div>

          {/* Password Management */}
          <div className="bg-white rounded-2xl shadow p-6">
            {/* <h2 className="text-lg font-semibold mb-4">Password Management</h2>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border rounded-lg p-2"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded-lg p-2"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div
                className={`text-sm ${
                  passwordStrength === "Strong"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {passwordStrength}
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-lg p-2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div className="flex justify-between items-center">
                <button className="text-indigo-600 hover:underline">
                  Reset Password
                </button>
                <div className="space-x-2">
                  <button className="px-4 py-2 rounded-lg border">
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
                    Update Password
                  </button>
                </div>
              </div>
            </div> */}
            <PasswordManagement />
          </div>

          {/* Joined Projects */}
          <div className="bg-white rounded-2xl shadow p-6">
            {/* <h2 className="text-lg font-semibold mb-4">Joined Projects</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">E-commerce Renewal</p>
                <div className="flex bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">75% • Project Manager</p>
              </div>

              <div>
                <p className="font-medium">New App Development</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">30% • Developer</p>
              </div>

              <div>
                <p className="font-medium">Marketing System</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">100% • Consultant</p>
              </div>
            </div> */}
            <JoinedProjects />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Account Permissions */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Account Permissions</h2>
            <div className="mb-4 text-center font-bold">
              <span className="inline-flex items-center px-5 py-3 text-md rounded-full bg-indigo-500 text-white">
                <Shield className="w-5 h-5 mr-1" /> Administrator
              </span>
              <p className="font-normal text-sm text-gray-600 mt-4">
                Full system administration access
              </p>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <p className="text-md font-bold">Available Features:</p>
              <li className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-green-500" /> User
                Management
              </li>
              <li className="flex items-center">
                <Monitor className="w-4 h-4 mr-2 text-green-500" /> Project
                Monitoring
              </li>
              <li className="flex items-center">
                <Settings className="w-4 h-4 mr-2 text-green-500" /> System
                Settings
              </li>
              <li className="flex items-center">
                <Download className="w-4 h-4 mr-2 text-green-500" /> Data Export
              </li>
            </ul>
          </div>

          {/* Token Usage */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Token Usage</h2>
            <div className="flex flex-col items-center">
              {/* Progress Circle */}
              <div className="relative w-24 h-24">
                <svg className="w-24 h-24">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#6366f1"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.3)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                  30%
                </div>
              </div>

              {/* Used */}
              <div className="flex items-center justify-between w-full mt-4">
                <p className="text-sm text-gray-600">Used</p>
                <p className="font-bold text-md">15,420 / 50,000</p>
              </div>

              {/* Progress bar wrapper */}
              <div className="w-full h-3 bg-gray-200 rounded-full mt-4">
                <div
                  className="h-3 bg-indigo-500 rounded-full"
                  style={{ width: "30%" }} // এখানে dynamic % বসবে
                ></div>
              </div>

              {/* Remaining */}
              <div className="flex items-center justify-between w-full mt-4">
                <p className="text-sm text-gray-600">Remaining</p>
                <p className="text-sm font-semibold text-green-600">34,580</p>
              </div>
            </div>
            <div className="mt-4 text-left text-sm text-gray-500">
              <hr />
            </div>
          </div>

          {/* Current Plan */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Current Plan</h2>
            <div className="mb-4 text-center">
              <span className="inline-flex items-center font-bold px-6 py-3 text-md rounded-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white">
                <StarIcon className="w-5 h-5 mr-2" /> Pro Plan
              </span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Check className="text-green-500 font-bold" />
                <li> 50,000 tokens/month</li>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="text-green-500 font-bold" />
                <li> Priority Support</li>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="text-green-500 font-bold" />
                <li> Advanced AI Features</li>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="text-green-500 font-bold" />
                <li> Team Collaboration</li>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="text-green-500 font-bold" />
                <li> Data Export</li>
              </div>
            </ul>
            <div className="my-4 text-left text-sm text-gray-500">
              <hr />
              <p className="mt-4">Next reset: February 1, 2024</p>
            </div>
            <button className="mt-4 w-full px-4 py-2 rounded-lg border text-indigo-600 hover:bg-indigo-50">
              Change Plan
            </button>
          </div>

          {/* Save Button */}
          <div className="bg-white rounded-2xl shadow p-6">
            <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700">
              Save Changes
            </button>
            <p className="font-normal text-sm text-gray-600 mt-4 text-center">
              Last saved: January 15, 2024 14:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
