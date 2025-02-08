import React, { useState } from "react";
import GaugeChart from 'react-gauge-chart';
import Chatbot from './Chatbot'; // Make sure to import the Chatbot component

const RiskAssessmentModel = () => {
  const [formData, setFormData] = useState({
    criminalHistory: "",
    flightRisk: "",
    chargeSeverity: "",
  });

  const [riskScore, setRiskScore] = useState(null);
  const [riskLevel, setRiskLevel] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateRiskScore = () => {
    let score = 0;

    score += formData.criminalHistory === "high" ? 3 : 1;
    score += formData.flightRisk === "high" ? 3 : 1;
    score += formData.chargeSeverity === "high" ? 3 : 1;

    setRiskScore(score);
    setRiskLevel(score > 6 ? "High Risk" : "Low Risk");
  };

  const riskMessage = (riskLevel) => {
    let message = "";

    switch (riskLevel) {
      case "High Risk":
        message = "The individual is considered high risk. Additional measures or conditions may be necessary.";
        break;
      case "Low Risk":
        message = "The individual is considered low risk. Bail may be granted with standard conditions.";
        break;
      default:
        message = "Please assess the risk to get insights.";
    }

    // Add comment regarding the chances of leaving the country
    if (formData.flightRisk === "high") {
      message += " There is a high risk that the individual might attempt to leave the country, considering their high absconding risk.";
    } else if (formData.flightRisk === "medium") {
      message += " The individual has a moderate risk of absconding. Monitoring their travel permissions is recommended.";
    }

    return message;
  };

  return (
    <div className="relative max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Bail Risk Assessment</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Criminal History</label>
          <select
            name="criminalHistory"
            value={formData.criminalHistory}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Absconding Risk</label>
          <select
            name="flightRisk"
            value={formData.flightRisk}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Charge Severity</label>
          <select
            name="chargeSeverity"
            value={formData.chargeSeverity}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={calculateRiskScore}
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded"
      >
        Assess Risk
      </button>

      {riskScore !== null && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">Risk Score</h3>
          <GaugeChart
            id="risk-gauge"
            nrOfLevels={10}
            percent={(riskScore / 9).toFixed(2)}
            colors={["#00C49F", "#FFBB28", "#FF8042"]}
            arcWidth={0.3}
          />
          <p className="text-lg mt-2">{riskScore}</p>
          <p className={`mt-2 ${riskLevel === 'High Risk' ? 'text-red-500' : 'text-green-500'}`}>
            {riskLevel}
          </p>
          <p className="mt-2 text-sm text-gray-600">{riskMessage(riskLevel)}</p>
        </div>
      )}

      {/* Add the Chatbot at the end of the page */}
      <Chatbot />
    </div>
  );
};

export default RiskAssessmentModel;
