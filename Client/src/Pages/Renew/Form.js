import React, { useEffect, useState } from "react";

const Form = () => {
  const [charge, setCharge] = useState("");
  const [offenseType, setOffenseType] = useState("");
  const [timeServed, setTimeServed] = useState("");
  const [caseStatus, setCaseStatus] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bailStatus, setBailStatus] = useState(null); // bailStatus: true for granted, false for denied
  const [imprisonment, setImprisonment] = useState(""); // to store imprisonment duration
  const [reason, setReason] = useState(""); // to store reason for bail decision
  const [bailChance, setBailChance] = useState(0); // Bail chance percentage

  const images = [
    "https://static.mygov.in/static/s3fs-public/styles/large-image/public/mygov_15053012759017401.png",
    "https://kashmirconvener.com/wp-content/uploads/2023/11/IMG-20231101-WA0022.jpg",
    "https://seed.nih.gov/images/eligibility.png",
    "https://images.shiksha.com/mediadata/images/articles/1624288506phpgaFcoO.jpeg",
    "https://cdn.vectorstock.com/i/1000x1000/44/58/eligibility-icon-monochrome-simple-sign-from-vector-45754458.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const ipcSections = [
    { section: "IPC 302: Murder", imprisonment: "Life imprisonment or death" },
    { section: "IPC 307: Attempt to Murder", imprisonment: "Up to 10 years" },
    { section: "IPC 323: Voluntarily causing hurt", imprisonment: "Up to 1 year" },
    { section: "IPC 376: Rape", imprisonment: "Minimum 7 years, can extend to life" },
    { section: "IPC 420: Cheating", imprisonment: "Up to 7 years" },
    { section: "IPC 498A: Cruelty by Husband or Relatives", imprisonment: "Up to 3 years" },
    { section: "IPC 120B: Criminal Conspiracy", imprisonment: "Depends on the nature of the crime" },
    { section: "IPC 144: Unlawful Assembly", imprisonment: "Up to 6 months" },
    { section: "IPC 147: Rioting", imprisonment: "Up to 2 years" },
    { section: "IPC 295A: Insulting Religious Beliefs", imprisonment: "Up to 3 years" },
    { section: "IPC 304: Culpable Homicide Not Amounting to Murder", imprisonment: "Up to 10 years" },
    { section: "IPC 326: Voluntarily causing grievous hurt", imprisonment: "Up to 10 years" },
    { section: "IPC 379: Theft", imprisonment: "Up to 3 years" },
    { section: "IPC 392: Robbery", imprisonment: "Up to 10 years" },
    { section: "IPC 395: Dacoity", imprisonment: "Minimum 10 years" },
    { section: "IPC 397: Robbery with Attempt to Cause Death", imprisonment: "Minimum 7 years" },
    { section: "IPC 499: Defamation", imprisonment: "Up to 2 years" },
    { section: "IPC 504: Intentional insult with intent to provoke breach of peace", imprisonment: "Up to 2 years" },
    { section: "IPC 506: Criminal Intimidation", imprisonment: "Up to 7 years" },
    { section: "IPC 509: Insulting the modesty of a woman", imprisonment: "Up to 1 year" },
    { section: "IPC 511: Attempt to commit offenses punishable with imprisonment", imprisonment: "Varies based on the offense attempted" },
    { section: "IPC 153A: Promoting enmity between groups", imprisonment: "Up to 3 years" },
    { section: "IPC 141: Unlawful assembly", imprisonment: "Up to 6 months" },
    { section: "IPC 342: Wrongful Confinement", imprisonment: "Up to 1 year" },
    { section: "IPC 377: Unnatural Offenses", imprisonment: "Up to 10 years" },
    { section: "IPC 364A: Kidnapping for Ransom", imprisonment: "Life imprisonment or death" },
    { section: "IPC 409: Criminal breach of trust by public servant", imprisonment: "Up to life imprisonment" },
    { section: "IPC 467: Forgery of valuable security, will, etc.", imprisonment: "Up to 10 years" },
    { section: "IPC 471: Using a forged document", imprisonment: "Up to 7 years" },
    { section: "IPC 489A: Counterfeiting currency notes", imprisonment: "Up to life imprisonment" },
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    let grantBail = false;
    let reason = "";
    let chance = 0;

    if (offenseType === "minor" && caseStatus === "Pending" && timeServed < 6) {
      grantBail = true;
      reason = "Minor offense with less time served and case still pending.";
      chance = 80;
    } else if (offenseType === "major" && caseStatus === "Closed") {
      grantBail = true;
      reason = "Major offense, but the case is closed.";
      chance = 60;
    } else {
      grantBail = false;
      reason = "Serious offense or too much time served. Case is ongoing.";
      chance = 20;
    }

    setBailStatus(grantBail);
    setReason(reason);
    setBailChance(chance);
  };

  const handleChargeChange = (e) => {
    const selectedSection = ipcSections.find(
      (section) => section.section === e.target.value
    );
    setCharge(e.target.value);
    if (selectedSection) {
      setImprisonment(selectedSection.imprisonment);
    } else {
      setImprisonment("");
    }
    console.log("Selected Section:", selectedSection); // Debugging line
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex justify-center my-12 shadow-2xl">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex bg-white">
            <div className="w-full h-[700px] bg-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`object-cover object-center rounded h-full ${
                    index === currentImageIndex ? "block" : "hidden"
                  }`}
                  alt="hero"
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                />
              ))}
            </div>
            <div className="w-full lg:w-7/12 bg-white p-5 mt-20 rounded-lg h-[620px] lg:rounded-l-none">
              <h3 className="pt-4 text-3xl font-semibold text-center">
                Bail Eligibility Form
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="charge"
                  >
                    Charges:
                  </label>
                  <select
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="charge"
                    value={charge}
                    onChange={handleChargeChange}
                  >
                    <option value="">Select Charges (IPC Section)</option>
                    {ipcSections.map((section, index) => (
                      <option key={index} value={section.section}>
                        {section.section}
                      </option>
                    ))}
                  </select>
                  {imprisonment && (
                    <p className="text-sm text-gray-500">
                      Imprisonment: {imprisonment}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="offenseType"
                  >
                    Offense Type
                  </label>
                  <select
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="offenseType"
                    value={offenseType}
                    onChange={(e) => setOffenseType(e.target.value)}
                  >
                    <option value="">Select Offense Type</option>
                    <option value="minor">Minor</option>
                    <option value="major">Major</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="timeServed"
                  >
                    Time Served (in months)
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="timeServed"
                    type="number"
                    value={timeServed}
                    onChange={(e) => setTimeServed(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="caseStatus"
                  >
                    Case Status
                  </label>
                  <select
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="caseStatus"
                    value={caseStatus}
                    onChange={(e) => setCaseStatus(e.target.value)}
                  >
                    <option value="">Select Case Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Closed">Closed</option>
                    <option value="Ongoing">Ongoing</option>
                  </select>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Check Bail Eligibility
                  </button>
                </div>

                {bailStatus !== null && (
                  <div className="text-center">
                    <p className={`text-xl font-semibold ${bailStatus ? "text-green-600" : "text-red-600"}`}>
                      Bail Status: {bailStatus ? "Granted" : "Denied"}
                    </p>
                    <p className="text-sm text-gray-500">
                      Reason: {reason}
                    </p>
                    <p className="text-sm text-gray-500">
                      Chances of Bail: {bailChance}%
                    </p>
                  </div>
                )}

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
