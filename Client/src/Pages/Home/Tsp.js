import React from "react";

const Tsp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold my-5">
          Our Most Requested Bail Solutions
        </div>
        <div className="font-bold my-1 text-4xl">
          Bail Options Most Preferred by Our Users
        </div>
        <div className="my-3">
          Our top Bail Application Solutions cater to your legal needs.
        </div>
        <div className="max-w-7xl">
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row ">
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20171017010130/ri/673/picture/2017/10/shutterstock_626843165.jpg"
                alt="policy1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Default Bail
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Secure your release with default bail when the prosecution fails
                to file charges within the prescribed time.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View More
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Regular Bail
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Regular bail allows an accused to secure release during trial by
                applying to the court, ensuring their freedom while legal
                proceedings continue.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View More
              </button>
            </div>
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://blog.bakshiandassociates.com/wp-content/uploads/2024/05/Obtain-Anticipatory-Bail.jpeg"
                alt="policy2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row">
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://thelawcodes.com/wp-content/uploads/2023/03/anticipatory-bail-the-law-codes.jpg"
                alt="policy3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Anticipatory Bail
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Anticipatory bail protects individuals from arrest in
                anticipation of being accused of a non-bailable offense,
                allowing them to seek release before any formal arrest is made.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View More
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="grid p-4">
              <div className="font-bold  text-black mt-10 text-2xl">
                Interim Bail
              </div>
              <div className="text-gray-500 mt-2 text-md">
                Secure interim bail quickly with our efficient processing
                system. Get timely approvals to address urgent release needs
                seamlessly.
              </div>
              <button className="inline-flex items-center w-32 justify-center px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-500 h-10 ">
                View More
              </button>
            </div>
            <div className="h-49 w-48 md:w-1/3 overflow-hidden">
              <img
                src="https://advocatetanwar.com/wp-content/uploads/2024/06/Interim-Bail-1-900x600.jpg"
                alt="policy2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-7xl"></div>
      </div>
    </>
  );
};

export default Tsp;
