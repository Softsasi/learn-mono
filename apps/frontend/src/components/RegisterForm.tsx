import { useState } from 'react';
import { useForm } from 'react-hook-form';

type RegisterFormData = {
  email: string;
  password: string;
};

const RegisterForm = () => {
  const reactAppUrl = 'http://localhost:8080';

  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    setServerError('');
    setSuccessMessage('');

    try {
      const response = await fetch(`${reactAppUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      setSuccessMessage(result.message);
      console.log('Registration successful:', result);

      // reset();
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError('Something went wrong.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <legend className="text-2xl font-bold text-center mb-6">
        Register Form
      </legend>

      {serverError && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
          {serverError}
        </div>
      )}

      {successMessage && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          {successMessage}
        </div>
      )}

      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
            {...register('email', {
              required: 'Email is required',
              minLength: {
                value: 5,
                message: 'Email must be at least 5 characters',
              },
              maxLength: {
                value: 50,
                message: 'Email cannot exceed 50 characters',
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />

          {errors.email && (
            <p className="text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Enter your password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
              maxLength: {
                value: 100,
                message: 'Password cannot exceed 100 characters',
              },
            })}
          />

          {errors.password && (
            <p className="text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
