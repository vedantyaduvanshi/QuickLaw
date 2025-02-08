import React, { useState, useEffect, useMemo } from "react";

const OnlineBenefit = () => {
  // Data for all the cards
  const allCards = useMemo(
    () => [
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/businessman-balancing-plus-minus-business_48369-1399.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Easy to Navigate",
        text: "People have varying legal needs. You can compare the benefits of different bail options online and choose the one that best suits your case. Additionally, you can get an overview of associated costs, which may vary based on the complexity of the case and specific requirements.",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/investment-analysis-money-cash-profits-metaphoremployee-manager-making-investing-plans_183665-538.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Cost-Effective",
        text: "Applying for bail online can save you money and time. Many services offer discounts for first-time online applications and streamline the process, allowing you to handle everything efficiently with just a few clicks.",
      },
      {
        imgSrc:
          "https://img.freepik.com/free-psd/3d-rendering-quotes-frame-box-icon-isolated-3d-render-illustration_47987-7827.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Instant Bail Estimate",
        text: "You can get a quote for your bail application online. Simply select the type of bail process you need and provide details such as case type and urgency. This allows you to compare options, costs, and coverage based on your specific requirements.",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/relaxed-young-man-sitting-armchair-isolated-white_313242-964.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "From the Comfort of Your Home",
        text: "Now you can handle your bail application from the comfort of your home. No need for physical visits—everything you need is available online, making the process quick and convenient.",
      },
      {
        imgSrc:
          "https://img.freepik.com/premium-vector/business-decision-right-wrong-true-false-correct-incorrect-moral-choosing-option-concept-thoughtful-businessman-holding-right-wrong-left-right-hand-while-making-decision_212586-820.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=ais",
        name: "Wide Range of Options",
        text: "You have numerous options, as most bail services offer online applications. Take your time to review and select the best option by analyzing the details thoroughly.",
      },
      {
        imgSrc:
          "https://img.freepik.com/free-vector/partnership-abstract-concept-illustration_335657-4437.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=sph",
        name: "Liability Coverage",
        text: "The terms and conditions of the bail process can be complex. Most bail services list the details and benefits of their options online, making them more transparent and easier to understand.",
      },
      {
        imgSrc:
          "https://img.freepik.com/free-vector/business-background-design_1343-21.jpg?size=626&ext=jpg&ga=GA1.1.969823653.1689870495&semt=sph",
        name: "Transparency",
        text: "Online processes are transparent. After providing the necessary information, you can proceed with your bail application. The cost is determined based on your case specifics. The online platform allows you to adjust details such as the type of bail, case complexity, and related factors. Based on your inputs, you can see how these changes affect the cost.",
      },
    ],
    []
  );

  // State to hold the active card indices
  const [activeCardIndices, setActiveCardIndices] = useState([0, 1]);

  // Function to switch cards every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndices((prevIndices) => {
        const nextIndex = (prevIndices[1] + 1) % allCards.length;
        return [prevIndices[1], nextIndex];
      });
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, [allCards.length]);

  return (
    <div>
      <div className="container px-5 py-15 mx-auto">
        <div className="mt-20">
          <div className="font-md text-blue-600 font-bold text-center my-3">
            ONLINE BENEFITS
          </div>
          <div className="font-md text-4xl font-bold text-center my-3">
            Why Apply for Bail Online?
          </div>
          <div className="font-md font-medium text-center my-3 mx-[200px]">
            Applying for bail online offers numerous benefits. Here are a few of
            them.
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {activeCardIndices.map((index) => (
            <div key={index} className="p-4 md:w-1/2 w-full my-10 h-[300px]">
              <div className="h-full bg-gray-100 p-8 rounded hover:shadow-2xl">
                <button
                  className="inline-flex items-center"
                  onClick={() => {
                    setActiveCardIndices((prevIndices) => {
                      const nextIndices = [...prevIndices];
                      nextIndices[1] = index;
                      return nextIndices;
                    });
                  }}
                >
                  <img
                    alt="online benefits"
                    src={allCards[index].imgSrc}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-xl font- text-gray-900">
                      {allCards[index].name}
                    </span>
                  </span>
                </button>
                <p className="leading-relaxed mb-3 mt-5">
                  {allCards[index].text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineBenefit;
