import React, { useState, useEffect } from "react";
import AdminSectionCard from "./AdminSectionCard";
import { FaUsers } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip"; // Assuming Material-UI for Tooltip

const TotalCustomersCard = ({ customerCount }) => {
  const [totalCustomers, setTotalCustomers] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setTotalCustomers(customerCount || 1500); // Default or provided customer count
      setLoading(false);
    }, 1000); // Simulating network delay
  }, [customerCount]);

  return (
    <AdminSectionCard title="Total Customers">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="flex items-center">
          {/* Icon for visual enhancement */}
          <FaUsers className="text-blue-500 text-2xl mr-2" />

          {/* Tooltip for additional info */}
          <Tooltip title="Total number of customers currently active">
            <p
              className={`text-lg font-semibold ${
                totalCustomers > 1000 ? "text-green-600" : "text-yellow-500"
              }`}
            >
              {totalCustomers.toLocaleString()}
            </p>
          </Tooltip>
        </div>
      )}
    </AdminSectionCard>
  );
};

export default TotalCustomersCard;
