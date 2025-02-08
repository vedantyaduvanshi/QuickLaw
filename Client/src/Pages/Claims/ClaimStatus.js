import React from "react";
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa'; // Import icons for status representation

// ProgressBar Component
const ProgressBar = ({ status }) => {
  const statusMap = {
    Pending: 25,
    Approved: 75,
    Rejected: 0,
    InProgress: 50,
  };

  const progress = statusMap[status] || 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
      <div
        className={`h-2.5 rounded-full ${status === 'Approved' ? 'bg-green-500' : status === 'Rejected' ? 'bg-red-500' : status === 'InProgress' ? 'bg-yellow-500' : 'bg-blue-500'}`}
        style={{ width: `${progress}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
        {progress}%
      </div>
    </div>
  );
};

const ClaimStatus = () => {
  // Simulated claim status data - Replace this with actual data from API or state
  const claimStatusData = [
    {
      claimNumber: "CLM123456",
      status: "Pending",
      amount: "₹25,000",
      date: "2023-07-29",
      policyHolder: "Sarvesh Pandey",
      phoneNumber: "+91 8511411930",
      email: "sarveshpandey@example.com",
    },
    {
      claimNumber: "CLM789012",
      status: "Approved",
      amount: "₹15,000",
      date: "2023-07-20",
      policyHolder: "Meghan Adhav",
      phoneNumber: "+91 9328373131",
      email: "meghanadhav@example.com",
    },
    // Add more claim status data as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Bail Status</h2>
      {claimStatusData.length === 0 ? (
        <p className="text-center text-gray-600">No Bail status available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="p-3 text-left border">Application Number</th>
                <th className="p-3 text-left border">Status</th>
                <th className="p-3 text-left border">Amount</th>
                <th className="p-3 text-left border">Date</th>
                <th className="p-3 text-left border">Applicant</th>
                <th className="p-3 text-left border">Phone Number</th>
                <th className="p-3 text-left border">Email</th>
                <th className="p-3 text-left border">Progress</th> {/* Added column for progress bar */}
              </tr>
            </thead>
            <tbody>
              {claimStatusData.map((claim) => (
                <tr key={claim.claimNumber} className="hover:bg-gray-50">
                  <td className="p-3 border">{claim.claimNumber}</td>
                  <td className="p-3 border flex items-center">
                    {claim.status === "Approved" && <FaCheckCircle className="text-green-500 mr-2" />}
                    {claim.status === "Pending" && <FaHourglassHalf className="text-yellow-500 mr-2" />}
                    {claim.status === "Rejected" && <FaTimesCircle className="text-red-500 mr-2" />}
                    {claim.status}
                  </td>
                  <td className="p-3 border">{claim.amount}</td>
                  <td className="p-3 border">{claim.date}</td>
                  <td className="p-3 border">{claim.policyHolder}</td>
                  <td className="p-3 border">{claim.phoneNumber}</td>
                  <td className="p-3 border">{claim.email}</td>
                  <td className="p-3 border">
                    <ProgressBar status={claim.status} /> {/* Progress bar */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClaimStatus;
