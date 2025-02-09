import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <div className="w-full max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
          <p className="text-lg text-gray-600 mb-10">
            Your visited page not found. You may go home page.
          </p>
          <button
            onClick={handleGoHome}
            className="px-8 py-4 bg-red-500 text-white text-base rounded-md hover:bg-red-600 transition focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
