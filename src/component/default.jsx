import { useNavigate } from "react-router-dom";

export const DefaultPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleBack}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Back
      </button>
      <p className="text-lg text-center text-gray-700 mb-4">
        Under the working
      </p>
    </div>
  );
};
