import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {  handleSubmit } = useForm();

  return (
    <>
      <legend className="text-2xl font-bold text-center mb-4">
        {' '}
        Login Form
      </legend>

      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
