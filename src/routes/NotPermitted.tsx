import React from 'react';
import { Link } from 'react-router-dom';

export default function NotPermitted({ name = '' }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-700 mb-4">
          You do not have the necessary permissions to access this page.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
