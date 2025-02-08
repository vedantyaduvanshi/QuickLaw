import React, { useState } from "react";

const Settings = () => {
  // State hooks for controlled components
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("(GMT-08:00) Pacific Time (US & Canada)");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  // Handlers for controlled components
  const handleLanguageChange = (event) => setLanguage(event.target.value);
  const handleTimezoneChange = (event) => setTimezone(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleNewsletterChange = () => setNewsletter(!newsletter);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-6">Settings</h1>

          {/* General Settings */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-4">General Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Language</label>
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  {/* Add more options */}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Timezone</label>
                <select
                  value={timezone}
                  onChange={handleTimezoneChange}
                  className="form-select mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                  <option>(GMT+05:30) India Standard Time</option>
                  {/* Add more options */}
                </select>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Change Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  placeholder="Enter new password"
                />
              </div>
            </div>
          </div>

          {/* Email Notifications */}
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={handleNewsletterChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <label className="ml-2 text-gray-700">Receive newsletter</label>
            </div>
          </div>

          {/* Save Button */}
          <div className="border-t pt-6 mt-6 text-right">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
