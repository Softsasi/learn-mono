const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-4">404</h1>
        <p className="text-center text-gray-600">
          The page you are looking for does not exist.
        </p>
        <div className="text-center mt-6">
          <a
            href="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
