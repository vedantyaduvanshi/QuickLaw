import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionOpen = (accordionId) => {
    return openAccordion === accordionId;
  };

  return (
    <div className="bg-white rounded-lg shadow-md my-5">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
        <div className="space-y-4">
          <div>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 border border-gray-200 rounded ${
                isAccordionOpen("accordion-open-body-1") ? "bg-gray-100" : ""
              }`}
              onClick={() => toggleAccordion("accordion-open-body-1")}
              aria-expanded={isAccordionOpen("accordion-open-body-1")}
              aria-controls="accordion-open-body-1"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                What does the Bail Application cover?
              </span>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${
                  isAccordionOpen("accordion-open-body-1")
                    ? "transform rotate-0"
                    : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            <div
              id="accordion-open-body-1"
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                isAccordionOpen("accordion-open-body-1")
                  ? "max-h-screen"
                  : "max-h-0"
              }`}
              aria-labelledby="accordion-open-heading-1"
            >
              <div className="p-4 bg-gray-100">
                <p className="text-gray-500">
                  A Bail Application outlines the applicant's request for
                  temporary release, including case details, reasons for bail,
                  and assurances of compliance with court conditions
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 border border-gray-200 rounded ${
                isAccordionOpen("accordion-open-body-2") ? "bg-gray-100" : ""
              }`}
              onClick={() => toggleAccordion("accordion-open-body-2")}
              aria-expanded={isAccordionOpen("accordion-open-body-2")}
              aria-controls="accordion-open-body-2"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                When can we file a Bail Application?
              </span>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${
                  isAccordionOpen("accordion-open-body-2")
                    ? "transform rotate-0"
                    : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            <div
              id="accordion-open-body-2"
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                isAccordionOpen("accordion-open-body-2")
                  ? "max-h-screen"
                  : "max-h-0"
              }`}
              aria-labelledby="accordion-open-heading-2"
            >
              <div className="p-4 bg-gray-100">
                <p className="text-gray-500">
                  A Bail Application can be filed after an arrest or during
                  court proceedings to request temporary release until trial or
                  further hearings
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 border border-gray-200 rounded ${
                isAccordionOpen("accordion-open-body-3") ? "bg-gray-100" : ""
              }`}
              onClick={() => toggleAccordion("accordion-open-body-3")}
              aria-expanded={isAccordionOpen("accordion-open-body-3")}
              aria-controls="accordion-open-body-3"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                How do I file a Bail Application?
              </span>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${
                  isAccordionOpen("accordion-open-body-3")
                    ? "transform rotate-0"
                    : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            <div
              id="accordion-open-body-3"
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                isAccordionOpen("accordion-open-body-3")
                  ? "max-h-screen"
                  : "max-h-0"
              }`}
              aria-labelledby="accordion-open-heading-3"
            >
              <div className="p-4 bg-gray-100">
                <p className="text-gray-500">
                  To file a Bail Application, you need to submit a formal
                  request to the court, either through a lawyer or by yourself,
                  detailing the case, reasons for bail, and providing necessary
                  documents and surety information.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-4 font-medium text-left text-gray-500 border border-gray-200 rounded ${
                isAccordionOpen("accordion-open-body-4") ? "bg-gray-100" : ""
              }`}
              onClick={() => toggleAccordion("accordion-open-body-4")}
              aria-expanded={isAccordionOpen("accordion-open-body-4")}
              aria-controls="accordion-open-body-4"
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Is there a time limit to file a Bail Application?
              </span>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${
                  isAccordionOpen("accordion-open-body-4")
                    ? "transform rotate-0"
                    : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
            <div
              id="accordion-open-body-2"
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                isAccordionOpen("accordion-open-body-4")
                  ? "max-h-screen"
                  : "max-h-0"
              }`}
              aria-labelledby="accordion-open-heading-2"
            >
              <div className="p-4 bg-gray-100">
                <p className="text-gray-500">
                  There is generally no strict time limit to file a Bail
                  Application, but it should be submitted as soon as possible
                  after the arrest or during ongoing court proceedings to
                  request release from custody.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
