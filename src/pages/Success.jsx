import { useNavigate } from "react-router-dom";
import { MdCheckCircle } from "react-icons/md";
import { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Success = () => {
  const [loding, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loding) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-5">
        <AiOutlineLoading3Quarters
          className="animate-spin text-green-500 mb-4"
          size={48}
        />
        <p className="text-gray-600">Processing your order...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-5">
      <MdCheckCircle className="text-green-500 mb-4" size={96} />
      <h1 className="text-3xl font-semibold text-gray-800">
        Order Successful!
      </h1>
      <p className="text-gray-600 mt-2 text-center">
        Thank you for your order. Your delicious meal is on its way!
      </p>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-lg font-medium text-gray-800">Order Details</h2>
        <p className="text-gray-600 mt-1">Order #12345</p>
        <p className="text-gray-600">Expected Delivery: 30-40 mins</p>
      </div>

      <button
        onClick={handleHomeClick}
        className="mt-8 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-full shadow-md transition duration-150"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Success;
