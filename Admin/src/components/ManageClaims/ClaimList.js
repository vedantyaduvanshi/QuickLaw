import React, { useState } from "react";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa"; // Importing icons

const ClaimList = () => {
  // Fetch claim data from API or context
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const claimsPerPage = 5;

  const claims = [
    { id: 1, name: "John Doe", status: "Pending" },
    { id: 2, name: "Jane Smith", status: "Approved" },
    { id: 3, name: "Alice Johnson", status: "Pending" },
    { id: 4, name: "Bob Wilson", status: "Approved" },
    { id: 5, name: "Eve Brown", status: "Pending" },
    { id: 6, name: "Charlie Davis", status: "Approved" },
    // Add more claims
  ];

  const filteredClaims = claims.filter((claim) =>
    claim.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedClaims = filteredClaims.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const indexOfLastClaim = currentPage * claimsPerPage;
  const indexOfFirstClaim = indexOfLastClaim - claimsPerPage;
  const currentClaims = sortedClaims.slice(
    indexOfFirstClaim,
    indexOfLastClaim
  );

  const totalPages = Math.ceil(sortedClaims.length / claimsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">List of Insurance Claims</h2>
      
      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded pl-10 py-2 w-full"
            placeholder="Search by Name"
          />
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <FaSearch />
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">
                <button
                  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  className="flex items-center"
                >
                  Name
                  <span className="ml-1">
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </span>
                </button>
              </th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentClaims.map((claim) => (
              <tr key={claim.id} className="bg-gray-50 hover:bg-gray-100 transition duration-150">
                <td className="py-3 px-4">{claim.id}</td>
                <td className="py-3 px-4">{claim.name}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      claim.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td className="py-3 px-4 space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center">
                    <FaEdit className="mr-1" /> Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 flex items-center">
                    <FaTrash className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          className={`px-4 py-2 rounded transition duration-200 ease-in-out ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          className={`px-4 py-2 rounded transition duration-200 ease-in-out ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClaimList;
