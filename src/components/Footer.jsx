import React from "react";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaTelegram size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaDiscord size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <SiMedium size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
