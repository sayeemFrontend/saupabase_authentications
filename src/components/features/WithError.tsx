import { ReactElement } from 'react';

export default function WithError({ children }: { children: ReactElement }) {
  return (
    <div className="relative">
      <div className=" absolute bg-opacity-60 flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Fetching Data
          </h1>
          <p className="text-gray-700 mb-4">
            There was an error while fetching data. Please try again later.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Retry
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
