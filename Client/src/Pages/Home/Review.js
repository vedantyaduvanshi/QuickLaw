import React from "react";

const Review = () => {
  return (
    <section className="bg-white body-font rounded border shadow-lg overflow-hidden m-4 ">
      <div className="font-md text-blue-600 font-bold text-center my-3">
        OUR CUSTOMERS
      </div>
      <div className="font-md text-4xl font-bold text-center my-3">
        Happily Secured with Our Bail Application Process
      </div>
      <div className="font-md  font-medium text-center my-3">
        Discover the Value Through Our Customers' Feedback
      </div>
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center rounded-sm">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-[50%] ms-[150px] w-[300px] h-[300px]"
            alt="hero"
            src="https://www.dbalawyers.com.au/wp-content/uploads/2014/07/director-daniel-butler.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <span className="mb-8 leading-relaxed text-lg">
            I’ve been using the Bail Application System for the past 8 years and
            have submitted multiple bail applications during this time. Each
            application was processed efficiently, and the support provided
            throughout was exceptional, ensuring a smooth legal process.
          </span>
          <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900">
            Harpik Mehta
          </h1>
          <p className="text-md mt-2 text-gray-500 mb-8 w-full font-bold">
            Lawyer
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <button className="inline-flex text-white bg-[#EE744D] border-0 py-2 px-6 focus:outline-none hover:bg-[#EE744D] rounded text-lg">
              Get Legal Assistance
            </button>
          </div>

          <div className="flex lg:flex-row md:flex-col"></div>
        </div>
      </div>
    </section>
  );
};

export default Review;
