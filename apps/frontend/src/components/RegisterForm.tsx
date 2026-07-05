import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const reactAppUrl = 'http://localhost:8080';

    const response = await fetch(`${reactAppUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Registration successful');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <div>
      <legend className="text-2xl font-bold text-center mb-4">
        Register Form
      </legend>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md p-2"
            {...register('email', {
              required: true,
              maxLength: 50,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              minLength: 5,
              validate: (value) =>
                value.includes('@') || 'Email must contain @ symbol',
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md p-2"
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 100,
            })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
