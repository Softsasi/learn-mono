import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <LoginForm />
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <p className="text-center">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
