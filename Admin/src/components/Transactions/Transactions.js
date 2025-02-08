import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa"; // Example icons

const transactionsData = [
  { id: 1, user: "John Doe", amount: 150, status: "Approved" },
  { id: 2, user: "Jane Smith", amount: 200, status: "Pending" },
  { id: 3, user: "Alice Johnson", amount: 100, status: "Approved" },
  { id: 4, user: "Bob Wilson", amount: 75, status: "Pending" },
  { id: 5, user: "Eve Brown", amount: 250, status: "Approved" },
  { id: 6, user: "Charlie Davis", amount: 300, status: "Pending" },
  // ... add more transactions
];

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const filteredTransactions = transactionsData.filter((transaction) =>
    transaction.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPagination = () => (
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
        <FaArrowLeft />
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
        <FaArrowRight />
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Transactions</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Search Bar */}
        <div className="flex items-center mb-4">
          <label htmlFor="search" className="mr-2">
            Search by User:
          </label>
          <div className="relative w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-2 flex items-center">
              <FaSearch className="text-gray-500" />
            </span>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded pl-8 py-2 w-full"
              placeholder="Search for a user"
            />
          </div>
        </div>

        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="py-3 px-6">ID</th>
                <th className="py-3 px-6">User</th>
                <th className="py-3 px-6">Amount (₹)</th>
                <th className="py-3 px-6">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-t hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-3 px-6">{transaction.id}</td>
                  <td className="py-3 px-6">{transaction.user}</td>
                  <td className="py-3 px-6">₹{transaction.amount}</td>
                  <td className="py-3 px-6">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        transaction.status === "Approved"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-gray-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {renderPagination()}
      </div>
    </div>
  );
};

export default Transactions;
