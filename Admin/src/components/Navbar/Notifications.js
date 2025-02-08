import React from "react";
import { BellIcon } from '@heroicons/react/24/outline'; // Importing Heroicons for notifications

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      content: "You have received a new message from a user.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "Payment Received",
      content: "Your payment for the premium plan has been received.",
      timestamp: "1 day ago",
    },
    // Add more notifications
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold mb-6">Notifications</h1>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex-shrink-0">
                  <BellIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{notification.title}</h2>
                  <p className="text-gray-700 mt-1">{notification.content}</p>
                  <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
