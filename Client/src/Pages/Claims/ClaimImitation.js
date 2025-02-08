import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './Payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileUpload, faSignature, faGavel, faCalendar } from '@fortawesome/free-solid-svg-icons';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51PD4VWSEhovWYNlwWuMavuFL8ogJdyh8xhmH8vo75BsKNXcOUUJrrDplFgL7y10LifKUwOHVqalKnKa5l9EgcXiF00EfAkRW3k');

const ClaimImitation = () => {
  const [name, setName] = useState('');
  const [clientName, setClientName] = useState('');
  const [bailType, setBailType] = useState('');
  const [ipcCrpc, setIpcCrpc] = useState('');
  const [bailBondAmount, setBailBondAmount] = useState('');
  const [guarantorName, setGuarantorName] = useState('');
  const [guarantorSignature, setGuarantorSignature] = useState('');
  const [lawyerName, setLawyerName] = useState('');
  const [lawyerSignature, setLawyerSignature] = useState('');
  const [bailApplicationDate, setBailApplicationDate] = useState('');
  const [totalAmount] = useState(1000); // Adjust this if needed
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [documents, setDocuments] = useState(null);
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!paymentStatus) {
      alert('Please complete the payment first.');
      return;
    }

    if (!isAcknowledged) {
      alert('Please acknowledge that the information is true.');
      return;
    }


    console.log('Form submitted successfully with payment details:', {
      name,
      clientName,
      bailType,
      ipcCrpc,
      bailBondAmount,
      guarantorName,
      guarantorSignature,
      lawyerName,
      lawyerSignature,
      bailApplicationDate,
      paymentDetails,
      documents,
    });
  };

  const handleFileChange = (e) => {
    setDocuments(e.target.files);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Bail Application Form</h1>
        <form onSubmit={handleFormSubmit}>
          {/* Client Information */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Client Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="clientName">
                Client Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faUser} className="ml-3" />
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="bailType">
                Bail Type
              </label>
              <select
                id="bailType"
                name="bailType"
                className="w-full border rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={bailType}
                onChange={(e) => setBailType(e.target.value)}
                required
              >
                <option value="" disabled>Select Bail Type</option>
                <option value="Interim Bail">Interim Bail</option>
                <option value="Regular Bail">Regular Bail</option>
                <option value="Anticipatory Bail">Anticipatory Bail</option>
                <option value="Default Bail">Default Bail</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="ipcCrpc">
                IPC/CRPC Section
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faGavel} className="ml-3" />
                <input
                  type="text"
                  id="ipcCrpc"
                  name="ipcCrpc"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={ipcCrpc}
                  onChange={(e) => setIpcCrpc(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="bailBondAmount">
                Bail Bond Amount
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faFileUpload} className="ml-3" />
                <input
                  type="number"
                  id="bailBondAmount"
                  name="bailBondAmount"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={bailBondAmount}
                  onChange={(e) => setBailBondAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="documents">
                Upload Documents
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faFileUpload} className="ml-3" />
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  className="w-full py-3 px-4 focus:outline-none"
                  onChange={handleFileChange}
                  multiple
                  required
                />
              </div>
            </div>
          </div>

          {/* Guarantor Information */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Guarantor Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="guarantorName">
                Guarantor Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faUser} className="ml-3" />
                <input
                  type="text"
                  id="guarantorName"
                  name="guarantorName"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={guarantorName}
                  onChange={(e) => setGuarantorName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="guarantorSignature">
                Guarantor Signature
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faSignature} className="ml-3" />
                <input
                  type="text"
                  id="guarantorSignature"
                  name="guarantorSignature"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={guarantorSignature}
                  onChange={(e) => setGuarantorSignature(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Lawyer Bond Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Lawyer Bond</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="lawyerName">
                Lawyer Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faUser} className="ml-3" />
                <input
                  type="text"
                  id="lawyerName"
                  name="lawyerName"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={lawyerName}
                  onChange={(e) => setLawyerName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="lawyerSignature">
                Lawyer Signature
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faSignature} className="ml-3" />
                <input
                  type="text"
                  id="lawyerSignature"
                  name="lawyerSignature"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={lawyerSignature}
                  onChange={(e) => setLawyerSignature(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Bail Application Date */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Bail Application Date</h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="bailApplicationDate">
                Date
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <FontAwesomeIcon icon={faCalendar} className="ml-3" />
                <input
                  type="date"
                  id="bailApplicationDate"
                  name="bailApplicationDate"
                  className="w-full py-3 px-4 focus:outline-none"
                  value={bailApplicationDate}
                  onChange={(e) => setBailApplicationDate(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Payment</h2>
            <Payment
              totalAmount={bailBondAmount}
              setPaymentStatus={setPaymentStatus}
              setPaymentDetails={setPaymentDetails}
            />
          </div>

          {/* Acknowledgment Checkbox */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="acknowledge"
              checked={isAcknowledged}
              onChange={(e) => setIsAcknowledged(e.target.checked)}
              required
              className="mr-2"
            />
            <label htmlFor="acknowledge" className="text-gray-700">
              I acknowledge that the above information is true and accurate.
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </Elements>
  );
};

export default ClaimImitation;
