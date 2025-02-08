import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = "http://localhost:5000/admin/getAll"; // Replace with your API URL

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data
        // Access the first element in the response array
        if (Array.isArray(response.data) && response.data.length > 0) {
          setUserData(response.data[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
        setError("Failed to load user data.");
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-6">Profile</h1>
          <div className="flex items-center mb-6">
            <img
              src={
                userData.profileImage ||
                "https://media.licdn.com/dms/image/D4D03AQHB5OXCVNGwNQ/profile-displayphoto-shrink_400_400/0/1668274351781?e=1700697600&v=beta&t=ceLl17lLJTboeLfyiQUPTMWKmBs7jgU_r_QAejzGySE"
              }
              alt="Profile"
              className="h-24 w-24 rounded-full object-cover border-4 border-blue-500"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {userData.firstname} {userData.lastname}
              </h2>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">First Name</label>
                <p className="text-gray-800">{userData.firstname || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Last Name</label>
                <p className="text-gray-800">{userData.lastname || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Date of Birth</label>
                <p className="text-gray-800">
                  {userData.DOB ? new Date(userData.DOB).toDateString() : "N/A"}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Gender</label>
                <p className="text-gray-800">{userData.gender || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Age</label>
                <p className="text-gray-800">{userData.age || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Username</label>
                <p className="text-gray-800">{userData.username || "N/A"}</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Email</label>
                <p className="text-gray-800">{userData.email || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Phone</label>
                <p className="text-gray-800">{userData.phonenumber || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Address</label>
                <p className="text-gray-800">{userData.address || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Role</label>
                <p className="text-gray-800">{userData.role || "N/A"}</p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Active</label>
                <p className="text-gray-800">{userData.active ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-4">Biography</h3>
            <p className="text-gray-800">{userData.biography || "No biography available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
