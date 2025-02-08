import React, { useState, useEffect } from "react";
import AdminSectionCard from "./AdminSectionCard";
import { FaClipboardList } from "react-icons/fa"; // Icon representing plans
import Tooltip from "@mui/material/Tooltip"; // Assuming Material-UI for Tooltip

const TotalPlansCard = ({ plansCount }) => {
  const [totalPlans, setTotalPlans] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    setTimeout(() => {
      setTotalPlans(plansCount || 20); // Default or provided plans count
      setLoading(false);
    }, 1000); // Simulate delay
  }, [plansCount]);

  return (
    <AdminSectionCard title="Total Plans">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="flex items-center">
          {/* Icon for visual enhancement */}
          <FaClipboardList className="text-purple-500 text-2xl mr-2" />

          {/* Tooltip for additional info */}
          <Tooltip title="This is the total number of plans available">
            <p
              className={`text-lg font-semibold ${
                totalPlans > 10 ? "text-green-600" : "text-red-500"
              }`}
            >
              {totalPlans.toLocaleString()}
            </p>
          </Tooltip>
        </div>
      )}
    </AdminSectionCard>
  );
};

export default TotalPlansCard;
