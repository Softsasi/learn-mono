import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <RegisterForm />
      </div>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
