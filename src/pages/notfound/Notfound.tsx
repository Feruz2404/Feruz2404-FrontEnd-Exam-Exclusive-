import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-white to-indigo-700 text-white">
      <h1 className="text-8xl font-extrabold mb-6">404</h1>
      <p className="text-xl text-center mb-10 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist. You may have mistyped the URL or the page might have been removed.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-8 py-4 text-lg bg-yellow-500 text-gray-900 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 transform hover:scale-105"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
