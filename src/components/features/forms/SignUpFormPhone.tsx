import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import FormStatus from './FormStatus';
import { parseFormData } from '../../../utils/utils';
import { authServices } from '../../../supabase/services';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';

export default function SignUpFormPhone() {
  const [formStatus, setFormStatus] = useState<null | {
    status: boolean;
    message: string;
  }>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = parseFormData(e.currentTarget);
    try {
      const { error } = await authServices.signUp({
        ...formData,
        options: { channel: formData['otp_channel'] },
      } as SignUpWithPasswordCredentials);
      if (error) throw error;
      navigate('/login');
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
            htmlFor="phone"
            className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="shadow-sm rounded-lg w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:focus:ring-blue-900 transition-all duration-300"
            placeholder="01923019012"
            required
            minLength={11}
            maxLength={11}
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
            minLength={6}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-indigo-900 dark:text-gray-300 mb-2">
            Otp Channel
          </label>
          <div className="flex items-center gap-6">
            <label className="inline-flex gap-2 items-center text-sm text-indigo-900 dark:text-gray-300">
              <input
                value="whatsapp"
                type="radio"
                name="otp_channel"
                className="h-4 w-4 rounded border-gray-300 text-indigo-800 focus:ring-indigo-800 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-900 transition-colors duration-300"
              />
              Whatsapp
            </label>

            <label className="inline-flex gap-2 items-center text-sm text-indigo-900 dark:text-gray-300">
              <input
                defaultChecked
                value="sms"
                type="radio"
                name="otp_channel"
                className="h-4 w-4 rounded border-gray-300 text-indigo-800 focus:ring-indigo-800 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-900 transition-colors duration-300"
              />
              SMS
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p>
              Already have an account?
              <Link
                to="/login"
                className="ml-1 text-sm text-indigo-800 hover:text-blue-900 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 transform transition-all duration-300 hover:scale-[1.02] dark:ring-offset-gray-900"
        >
          SignUp
        </button>
      </form>
    </div>
  );
}
