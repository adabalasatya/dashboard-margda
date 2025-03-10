import React from "react";

const CredentialPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md sm:max-w-sm ml-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Update Credentials
        </h2>
        <form>
          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 sm:py-3 px-4 bg-orange-500 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default CredentialPage;
