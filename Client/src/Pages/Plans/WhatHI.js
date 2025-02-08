import React from "react";

const WhatHI = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="hero"
              src="https://media.istockphoto.com/id/1128492129/photo/bail-bonds-and-fine-concept-money-and-gavel-as-symbol-of-law.jpg?b=1&s=170667a&w=0&k=20&c=aEEB0Zn9M-NDgEHtjmCj3ln7R95tn72pk8MJ98lHMFE="
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="font-md text-blue-600 font-bold text-center my-3">
              BAIL APPLICATION
            </div>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
              What is a Bail Application ?
            </h1>
            <p className="mb-5 leading-relaxed">
              A Bail Application System is a digital platform designed to
              streamline and manage the bail application process for undertrial
              prisoners, legal aid providers, and judicial authorities. It
              simplifies the complexities of bail procedures by automating
              workflows, providing real-time updates, and ensuring secure data
              management. This system helps reduce delays, ensures transparency,
              and makes the bail process more efficient, accessible, and easier
              to navigate for all parties involved
            </p>
            <p className="mb-8 leading-relaxed">
              Uncertainties like legal delays and case backlogs have highlighted
              the importance of an efficient Bail Application System. In a time
              when navigating the legal process can be overwhelming, a
              streamlined bail system can be a game-changer, expediting bail
              applications and reducing delays. Our Bail Application System
              offers the flexibility to cater to individuals and legal teams,
              providing a seamless experience with automated workflows,
              real-time updates, and secure data management. It ensures
              transparency and efficiency, making the bail process smoother and
              more accessible for all involved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatHI;
