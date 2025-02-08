import React, { useState } from "react";

const ClaimUpload = () => {
  const [claimType, setClaimType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [memberName, setMemberName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a delay for API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Clear the form fields
      setClaimType("");
      setPolicyNumber("");
      setMemberName("");
      setUploadFile(null);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Bail Application
        </h2>
        {!isSubmitted ? (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-6">
              <label
                className="block font-semibold mb-2 text-gray-700"
                htmlFor="claimType"
              >
                Case Status Type
              </label>
              <select
                id="claimType"
                name="claimType"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={claimType}
                onChange={(e) => setClaimType(e.target.value)}
                required
              >
                <option value="">Select Case Status</option>
                <option value="Undertrial Prisoner">Undertrial Prisoner</option>
                <option value="Case Proved">Case Proved</option>
                <option value="Case Dismissed">Case Dismissed</option>
                <option value="Case Pending">Case Pending</option>
                <option value="Case Reopened">Case Reopened</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                className="block font-semibold mb-2 text-gray-700"
                htmlFor="policyNumber"
              >
                Case Number
              </label>
              <input
                type="text"
                id="policyNumber"
                name="policyNumber"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block font-semibold mb-2 text-gray-700"
                htmlFor="memberName"
              >
                Client Name
              </label>
              <input
                type="text"
                id="memberName"
                name="memberName"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block font-semibold mb-2 text-gray-700"
                htmlFor="uploadFile"
              >
                Upload Previous Judgements
              </label>
              <input
                type="file"
                id="uploadFile"
                name="uploadFile"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                onChange={(e) => setUploadFile(e.target.files[0])}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Bail Application"}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-500">
              Application Submitted Successfully!
            </h3>
            <p className="text-gray-700 mt-4">
              We will review your application and notify you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Another Application
            </button>
          </div>
        )}
        {!isSubmitted && (
          <div className="mt-8 text-gray-700">
            <h4 className="font-semibold mb-2">Additional Case Details:</h4>
            <p>
              1. To process your bail application efficiently, please upload all
              relevant documents, including case details, court orders, and any
              other paperwork.
            </p>
            <p className="mt-2">
              2. Our team will review your documents and update you on the
              status of your application as soon as possible.
            </p>
            <p className="mt-2">
              3. For assistance, contact our 24/7 helpline in your jurisdiction.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimUpload;
