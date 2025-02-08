import React, { useState, useEffect } from "react";
import AdminSectionCard from "./AdminSectionCard";
import { FaDollarSign } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip"; // Assuming Material-UI for Tooltip

const TotalPremiumCard = ({ premiumAmount }) => {
  const [totalPremium, setTotalPremium] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setTotalPremium(premiumAmount || 120000); // Default or provided premium amount
      setLoading(false);
    }, 1000); // Simulating network delay
  }, [premiumAmount]);

  return (
    <AdminSectionCard title="Total Premium Amount">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="flex items-center">
          {/* Icon for visual enhancement */}
          <FaDollarSign className="text-blue-500 text-2xl mr-2" />

          {/* Tooltip for additional info */}
          <Tooltip title="This is the total premium amount collected so far">
            <p
              className={`text-lg font-semibold ${
                totalPremium > 100000 ? "text-green-600" : "text-red-500"
              }`}
            >
              ₹{totalPremium.toLocaleString()}
            </p>
          </Tooltip>
        </div>
      )}
    </AdminSectionCard>
  );
};

export default TotalPremiumCard;
