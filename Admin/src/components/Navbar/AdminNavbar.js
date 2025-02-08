import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiBell, FiChevronDown, FiUser, FiSettings, FiLogOut } from "react-icons/fi";

const AdminNavbar = ({ toggleSidebar }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav className="bg-blue-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between relative">
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link
          to="/"
          className="text-white text-xl font-semibold flex items-center space-x-2"
        >
          <img
            src="https://clipground.com/images/government-of-india-logo-clipart-9.jpg"
            alt="Government of India Logo"
            className="h-8"
          />
          <span className="hidden md:inline">GOVERNMENT OF INDIA</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button
              onClick={toggleUserDropdown}
              className="relative text-white flex items-center space-x-1 focus:outline-none"
              aria-label="User Menu"
            >
              <span className="hidden md:inline">Welcome, Admin</span>
              <FiChevronDown
                className={`h-5 w-5 transition-transform duration-300 transform ${isUserDropdownOpen ? "rotate-180" : ""}`}
              />
              {isUserDropdownOpen && (
                <div className="origin-bottom-right absolute mt-2 right-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                  <Link
                    to="/profile"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FiUser className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FiSettings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left transition-colors duration-200"
                  >
                    <FiLogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </button>
          </div>
          <div className="relative group">
            <button
              onClick={toggleNotificationDropdown}
              className="text-white hover:text-gray-300 transition-colors duration-300 focus:outline-none"
              aria-label="Notification Menu"
            >
              <FiBell className="h-6 w-6" />
            </button>
            {isNotificationDropdownOpen && (
              <div className="origin-bottom-right absolute mt-2 right-0 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-20">
                <Link
                  to="/notifications"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                >
                  Notifications
                </Link>
                <Link
                  to="/messages"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
                >
                  Messages
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
