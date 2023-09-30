"use client";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-700 text-lg">
          Oops! Something went wrong. The page you are looking for might not
          exist or there is an issue with our server.
        </p>
        <a href="/" className="mt-4 block text-blue-600 hover:underline">
          Go back to the home page
        </a>
      </div>
    </div>
  );
};

export default Error;
