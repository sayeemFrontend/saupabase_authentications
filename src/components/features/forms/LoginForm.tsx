import { Link, useNavigate } from 'react-router-dom';
import FormStatus from './FormStatus';
import { FormEvent, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { parseFormData } from '../../../utils/utils';
import { authServices } from '../../../supabase/services';
import { FormStatusT } from '../../../types';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';

export default function LoginForm() {
  const [formStatus, setFormStatus] = useState<FormStatusT | null>(null);
  const navigate = useNavigate();
  const { setAuth }: React.SetStateAction<any> = useAuth();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = parseFormData(
      e.currentTarget
    ) as SignInWithPasswordCredentials;
    try {
      const { data, error } = await authServices.signInWithPassword(formData);
      if (error) throw error;
      setAuth(data);
      navigate('/');
    } catch (err: any) {
      setFormStatus({
        status: false,
        message: err?.message || 'Something wrong',
      });
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl px-8 py-6 max-w-md w-full transform transition-all duration-300 hover:scale-[1.01] animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800 dark:text-gray-200">
        Welcome Back!
      </h1>
      {formStatus && <FormStatus formStatus={formStatus} />}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
            placeholder="Enter your password"
            required
            minLength={6}
          />
          <a
            href="https://tailwindflex.com/@nejaa-badr/forgot-password-form-2"
            className="inline-block mt-2 text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            Forgot Password?
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="is_checked"
              className="h-4 w-4 rounded border-gray-300 text-indigo-800 focus:ring-indigo-800 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-900 transition-colors duration-300"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-indigo-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <Link
            to="/sign-up"
            className="text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            Create Account
          </Link>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 transform transition-all duration-300 hover:scale-[1.02] dark:ring-offset-gray-900"
        >
          Login
        </button>
      </form>
    </div>
  );
}
