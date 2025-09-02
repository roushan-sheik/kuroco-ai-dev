import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default function PasswordManagement() {
  const [newPassword, setNewPassword] = useState("");
  const [strength, setStrength] = useState<"Weak" | "Medium" | "Strong">(
    "Weak"
  );

  // Simple strength checker
  const checkStrength = (password: string) => {
    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      setStrength("Strong");
    } else if (password.length > 5) {
      setStrength("Medium");
    } else {
      setStrength("Weak");
    }
  };

  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    checkStrength(value);
  };

  const strengthColor =
    strength === "Strong"
      ? "bg-green-500"
      : strength === "Medium"
      ? "bg-yellow-500"
      : "bg-red-500";

  const strengthWidth =
    strength === "Strong"
      ? "w-full"
      : strength === "Medium"
      ? "w-2/3"
      : "w-1/3";

  return (
    <Card className=" border-none shadow-none">
      <h2 className="text-lg font-semibold mb-4">Password Management</h2>
      <form className="space-y-4">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="********"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPassword}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="********"
          />
          {/* Strength bar */}
          <div className="flex gap-2 p-1">
            <div className="mt-2 h-1 w-full bg-gray-200 rounded">
              <div
                className={`h-1 rounded ${strengthColor} ${strengthWidth}`}
              ></div>
            </div>
            <p className="text-xs mt-1 text-right text-gray-600">{strength}</p>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="********"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-2">
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Reset Password
          </a>
          <div className="flex space-x-3">
            <Button variant="ghost" className="text-gray-600">
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Update Password
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}
