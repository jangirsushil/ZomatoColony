import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4 text-red-600">
        Oops! Page Not Found
      </h1>
      <p className="text-lg mb-2">
        We're sorry, but the page you're looking for doesn't exist.
      </p>
      <p className="text-base mb-6">
        You can return to the homepage or contact support if you need further
        assistance.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
