import React from "react";

const Stat = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-10 py-10 mx-auto">
          <div className="flex  justify-center gap-8">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-white border rounded shadow-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3 flex-shrink-0">
                <img
                  src="https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/2023101931.svg"
                  alt="Caresure"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-3">
                  8861 Crore+
                </h2>
                <p className="leading-relaxed text-base">
                  Bail Applications Processed in FY 2022-23
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-white border rounded shadow-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3 flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-vector/start_53876-25533.jpg?w=740&t=st=1689337845~exp=1689338445~hmac=5ed6a7b3ecc8a98b781028b5aa6a62041487db4c43b60d262e7268b70fbfbacf"
                  alt="Caresure"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-3">
                  4.68 /5
                </h2>
                <p className="leading-relaxed text-base">
                  Top-Rated Legal Assistance Platform
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-white border rounded shadow-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-3 flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-vector/illustration-paper_53876-5860.jpg?w=740&t=st=1689338744~exp=1689339344~hmac=d46f4a64ff5238bd180c8049560062ddf1fdcbc136d859b8d7aff9f12076d2fc"
                  alt="Caresure"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-3xl title-font font-medium mb-3">
                  30385 Crore+
                </h2>
                <p className="leading-relaxed text-base">
                  Financial Claim Settlement Report
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
