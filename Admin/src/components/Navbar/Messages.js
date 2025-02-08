import React from "react";

const Messages = () => {
  const messages = [
    {
      id: 1,
      sender: "John Doe",
      subject: "Regarding Your Policy",
      content:
        "Dear customer, we would like to inform you about the new policy updates...",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      sender: "Caresure Support",
      subject: "Claim Status",
      content:
        "Hello, your claim request has been processed and the payment will be...",
      timestamp: "1 day ago",
    },
    // Add more messages as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-6">Messages</h1>
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className="p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-blue-800">{message.sender}</h2>
                  <p className="text-xs text-gray-500">{message.timestamp}</p>
                </div>
                <h3 className="text-md font-medium text-gray-800 mb-2">{message.subject}</h3>
                <p className="text-gray-700">{message.content}</p>
                {/* Optionally add an action button */}
                <div className="mt-4">
                  <button className="text-blue-600 hover:underline focus:outline-none">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
