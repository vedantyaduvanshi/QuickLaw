import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBook, FaClipboardList, FaDollarSign, FaUsers } from "react-icons/fa"; // Example icons

const SidebarLink = ({ to, label, icon, isActive }) => (
  <li>
    <Link
      to={to}
      className={`flex items-center p-2 text-white rounded-md hover:bg-blue-700 transition duration-300 ${
        isActive ? "bg-blue-700" : ""
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </Link>
  </li>
);

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`fixed left-0 top-0 w-64 h-full bg-blue-800 text-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-10`}
      role="navigation"
      aria-label="Sidebar"
    >
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
        <ul className="space-y-2">
          <SidebarLink
            to="/dashboard"
            label="Dashboard"
            icon={<FaTachometerAlt />}
            isActive={currentPath === "/dashboard"}
          />
          <SidebarLink
            to="/manage-plans"
            label="Manage Plans"
            icon={<FaBook />}
            isActive={currentPath === "/manage-plans"}
          />
          <SidebarLink
            to="/manage-claims"
            label="Manage Claims"
            icon={<FaClipboardList />}
            isActive={currentPath === "/manage-claims"}
          />
          <SidebarLink
            to="/transactions"
            label="Transactions"
            icon={<FaDollarSign />}
            isActive={currentPath === "/transactions"}
          />
          <SidebarLink
            to="/user-list"
            label="Users List"
            icon={<FaUsers />}
            isActive={currentPath === "/user-list"}
          />
          {/* Add more links here */}
        </ul>
      </div>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
