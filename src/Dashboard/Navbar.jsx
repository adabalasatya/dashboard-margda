import React from "react";
import { FaUsers, FaSignOutAlt } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  return (
    <div className="relative flex items-center justify-between px-6 py-3 bg-white text-gray-800 shadow-lg rounded-lg">
      {/* Invisible placeholder for alignment */}
      <div className="flex-1"></div>
      {/* Left-aligned Title */}
      <h1 className="text-2xl absolute left-40 transform -translate-x-1/2 font-semibold tracking-wider sm:text-xl md:text-2xl">
        Dashboard
      </h1>
      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="flex items-center px-3 py-2 text-xs font-medium text-gray-800 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out sm:px-4 sm:py-2 sm:text-sm">
          <FaUsers className="mr-2" /> {/* Team Icon */}
          Team
        </button>
        <button className="flex items-center px-3 py-2 text-xs font-medium text-gray-800 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:bg-red-600 hover:text-white transition-colors duration-300 ease-in-out sm:px-4 sm:py-2 sm:text-sm">
          <FaSignOutAlt className="mr-2" /> {/* Logout Icon */}
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
