import React from "react";

const CaresuranceHero = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="w-full mb-10">
          <img
            className="rounded-lg shadow-lg object-cover object-center w-full h-auto"
            alt="hero"
            src="https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/SCI-banner.jpg"
            style={{ height: "auto", width: "100%", maxHeight: "2000px" }} // Super extra large with maxHeight 2000px
          />
        </div>

        <div className="text-center lg:w-4/5 w-full">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
            GOVERNMENT OF INDIA
          </h1>
          <p className="mb-8 text-xl leading-relaxed">
            Ensure your rights and access to justice with the Supreme Court of
            India's Bail Application System. Our specialized platform supports
            undertrial prisoners, legal aid providers, and judicial authorities,
            streamlining the bail process with utmost efficiency. Trust in our
            system to uphold your legal needs and safeguard your freedom.
          </p>
          <p className="mb-4 text-gray-700 text-xl">
            The Supreme Court of India, as the highest judicial authority in the
            country, is dedicated to upholding the principles of law and
            justice. It ensures that the rule of law is maintained and justice
            is served fairly, interpreting the Constitution and resolving legal
            disputes with authority and integrity.
          </p>
          <p className="mb-8 text-gray-700 text-xl">
            The Supreme Court of India is the apex judicial body, tasked with
            safeguarding the Constitution and ensuring justice. It serves as the
            final arbiter in legal disputes, upholding fundamental rights and
            interpreting laws with the utmost authority. As the guardian of the
            Constitution, the Supreme Court plays a crucial role in shaping the
            legal landscape of India and ensuring equitable justice for all
            citizens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaresuranceHero;
