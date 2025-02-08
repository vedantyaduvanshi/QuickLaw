import React, { useState, useEffect } from "react";
import AdminSectionCard from "./AdminSectionCard";
import { FaMoneyBillWave } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip"; // Assuming Material-UI for Tooltip

const TotalClaimsCard = ({ claimsAmount }) => {
  const [totalClaimsAmount, setTotalClaimsAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    // Simulate an API call to fetch claims amount
    setTimeout(() => {
      setTotalClaimsAmount(claimsAmount || 50000); // Default or provided claim amount
      setLoading(false);
    }, 1000);
  }, [claimsAmount]);

  return (
    <AdminSectionCard title="Total Claims Amount">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="flex items-center">
          {/* Icon for visual enhancement */}
          <FaMoneyBillWave className="text-green-500 text-2xl mr-2" />
          
          {/* Tooltip for additional info */}
          <Tooltip title="This is the total amount claimed so far">
            <p
              className={`text-lg font-semibold ${
                totalClaimsAmount > 50000 ? "text-red-500" : "text-green-500"
              }`}
            >
              ₹{totalClaimsAmount.toLocaleString()}
            </p>
          </Tooltip>
        </div>
      )}
    </AdminSectionCard>
  );
};

export default TotalClaimsCard;
