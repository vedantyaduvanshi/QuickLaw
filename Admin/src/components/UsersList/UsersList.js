import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTableRow from "./UserTableRow";
import EditUser from "./EditUser"; // Import the EditUser component

const USER_API_BASE_URL = "http://localhost:5000/users"; // Constant for the base URL

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedUser, setSelectedUser] = useState(null); // Track the selected user for editing
  const [message, setMessage] = useState(null); // Success/error message

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get(`${USER_API_BASE_URL}/getAll`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
        setLoading(false);
        setMessage("Failed to fetch users");
      });
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`${USER_API_BASE_URL}/${userId}`)
        .then(() => {
          const updatedUsers = users.filter((user) => user._id !== userId);
          setUsers(updatedUsers);
          setMessage("User successfully deleted");
        })
        .catch((error) => {
          console.error("Error deleting user: ", error);
          setMessage("Failed to delete user");
        });
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  const handleUserUpdate = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user._id === updatedUser._id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setSelectedUser(null);
    setMessage("User updated successfully");
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>
      {message && <div className="bg-green-100 p-3 rounded-md mb-4">{message}</div>}
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Search by username"
        />
      </div>
      {loading ? (
        <div>Loading users...</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Country</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <UserTableRow
                      key={user._id}
                      user={user}
                      onDeleteClick={handleDeleteUser}
                      onUpdateClick={handleEditClick}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center py-4">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {selectedUser && (
            <EditUser
              user={selectedUser}
              onCancelEdit={handleCancelEdit}
              onUpdateUser={handleUserUpdate}
            />
          )}
        </>
      )}
    </div>
  );
};

export default UserList;
