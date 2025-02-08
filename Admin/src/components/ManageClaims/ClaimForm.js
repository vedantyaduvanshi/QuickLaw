import React, { useState } from "react";

const ClaimForm = () => {
  // Form states
  const [name, setName] = useState("");
  const [status, setStatus] = useState("pending"); // Default status
  const [isSubmitting, setIsSubmitting] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error handling
  const [successMessage, setSuccessMessage] = useState(""); // Success feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset feedback messages
    setErrorMessage("");
    setSuccessMessage("");

    // Validate form input
    if (name.trim() === "") {
      setErrorMessage("Name is required.");
      return;
    }

    setIsSubmitting(true); // Start loading state

    try {
      // Mock API request (replace this with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

      // Reset form and show success message
      setName("");
      setStatus("pending");
      setSuccessMessage("Claim successfully added!");
    } catch (error) {
      setErrorMessage("Failed to add claim. Please try again.");
    } finally {
      setIsSubmitting(false); // End loading state
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Insurance Claim</h2>

      {/* Show success or error messages */}
      {successMessage && <p className="text-green-600 mb-2">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 mb-2">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter claimant's name"
            required
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <label htmlFor="status" className="block font-semibold mb-1">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none ${isSubmitting && "opacity-50 cursor-not-allowed"}`}
          disabled={isSubmitting} // Disable button during submission
        >
          {isSubmitting ? "Submitting..." : "Add Claim"}
        </button>
      </form>
    </div>
  );
};

export default ClaimForm;
