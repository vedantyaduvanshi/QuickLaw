import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PaymentComponent = ({ amount, onPaymentStatus }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);
    setPaymentStatus(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      setPaymentStatus("failed");
    } else {
      // Here you would send paymentMethod.id to your server
      console.log("PaymentMethod ID:", paymentMethod.id);
      setPaymentStatus("success");
    }

    if (onPaymentStatus) {
      onPaymentStatus(paymentStatus);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <CardElement className="mb-4 w-full border rounded-lg p-3" />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {paymentStatus === "success" && (
        <div className="text-green-500 mb-2 flex items-center">
          <FaCheckCircle className="text-2xl mr-2" />
          <span>Payment Successful!</span>
        </div>
      )}
      {paymentStatus === "failed" && (
        <div className="text-red-500 mb-2 flex items-center">
          <FaTimesCircle className="text-2xl mr-2" />
          <span>Payment Failed. Please try again.</span>
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-green-500 mt-4 w-full"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
};

export default PaymentComponent;
