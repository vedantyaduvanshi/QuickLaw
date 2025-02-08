import React, { useState } from "react";
import axios from "axios";

const EditUser = ({ user, onUpdateUser, onCancelEdit }) => {
  const [editedUser, setEditedUser] = useState({ ...user });
  const [isSaving, setIsSaving] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const [successMessage, setSuccessMessage] = useState(""); // Success message

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Validate form input (e.g., required fields)
  const validateForm = () => {
    if (!editedUser.name || !editedUser.username || !editedUser.email) {
      setErrorMessage("Please fill out all required fields.");
      return false;
    }
    return true;
  };

  // Handle form save
  const handleSave = async () => {
    if (!validateForm()) return; // Stop submission if validation fails

    setIsSaving(true); // Set loading state
    setErrorMessage(""); // Clear error message
    setSuccessMessage(""); // Clear success message

    try {
      // Send PUT request to update user
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/users/${editedUser._id}`,
        editedUser
      );
      // Call parent method to update user in the list
      onUpdateUser(response.data);
      setSuccessMessage("User updated successfully!");
      setTimeout(onCancelEdit, 2000); // Close the edit form after success
    } catch (error) {
      setErrorMessage("Error updating user. Please try again.");
      console.error("Error updating user: ", error);
    } finally {
      setIsSaving(false); // Stop loading state
    }
  };

  return (
    <div className="bg-white shadow-lg rounded px-8 pt-10 mt-5 pb-8 mb-4">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>

      {/* Success or Error Message */}
      {successMessage && (
        <p className="text-green-600 mb-4 font-semibold">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600 mb-4 font-semibold">{errorMessage}</p>
      )}

      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={editedUser.name}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter user's name"
        />
      </div>

      {/* Username Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Username <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={editedUser.username}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter username"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter email address"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleSave}
          disabled={isSaving} // Disable button when saving
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isSaving ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
        <button
          onClick={onCancelEdit}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditUser;
