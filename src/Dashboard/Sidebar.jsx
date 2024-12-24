import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaQrcode, FaVideo } from "react-icons/fa"; // Import WhatsApp, QR Code, and Video Call icons
import Logo from "../assets/margdarshakendra-logo.webp";

const Sidebar = ({ isOpen, toggleSidebar, isMobile }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`${
          isMobile ? "fixed" : "relative"
        } inset-y-0 left-0 bg-white text-gray-900 transition-all duration-300 ease-in-out shadow-lg z-30 ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Logo and Toggle Section */}
        <div className="p-4 flex items-center border-b border-gray-300">
          {isOpen && (
            <div className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="w-32 h-8 object-contain" />
            </div>
          )}
          <button
            className={`${
              isOpen ? "ml-auto" : "mx-auto"
            } bg-gray-100 text-gray-900 p-2 rounded-full shadow hover:bg-orange-500 focus:outline-none transition-transform duration-300`}
            onClick={toggleSidebar}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 flex items-center border-b border-gray-300 relative">
          <div className={`flex items-center ${isOpen ? "space-x-2" : "justify-center"}`}>
            {/* Profile Icon */}
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              S
            </div>
            {/* Username */}
            {isOpen && <h2 className="text-lg font-semibold">Satya</h2>}
          </div>

          {/* Chevron Icon */}
          {isOpen && (
            <button
              onClick={toggleUserMenu}
              className="ml-auto text-gray-600 hover:text-red-600 focus:outline-none"
              title="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transition-transform ${
                  isUserMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Dropdown Menu */}
        <div
          className={`mt-2 overflow-hidden rounded-lg transition-all duration-300 ${
            isUserMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className={`bg-gray-50 shadow-md ${!isOpen ? "text-center" : ""}`}>
            {[
              { title: "Profile", icon: "👤", link: "/profile" },
              { title: "Credential", icon: "🔑", link: "/credential" },
              { title: "Qr Scan", icon: <FaQrcode />, link: "/qr-scan" }, // QR Code Icon
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white transition-colors duration-300 ${
                  !isOpen ? "justify-center" : ""
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {isOpen && <span className="ml-2">{item.title}</span>}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {[
            { title: "Email", icon: "📧", link: "/email" },
            { title: "Template", icon: "📄", link: "/template" },
            { title: "Meeting", icon: <FaVideo />, link: "/meeting" }, // Updated Meeting Icon
            { title: "Call Report", icon: "📊", link: "/callreport" },
            { title: "Master Data", icon: "📁", link: "/master-data" },
            { title: "Whatsapp", icon: <FaWhatsapp className="text-green-500" />, link: "/whatsapp" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex items-center px-4 py-5 text-lg font-medium text-gray-700 rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300 ${
                !isOpen ? "justify-center" : "justify-start"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && <span className="ml-4">{item.title}</span>}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
