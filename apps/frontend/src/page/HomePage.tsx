const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to the Home Page
        </h1>
        <p className="text-center text-gray-600">
          This is the home page of our application. You can navigate to
          different pages using the links below.
        </p>
        <div className="text-center mt-6">
          <a
            href="/login"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-2"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
