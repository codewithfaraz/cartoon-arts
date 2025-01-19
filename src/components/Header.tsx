import React from "react";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaTelegram, FaCopy } from "react-icons/fa";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const contractAddress = "YOUR_CONTRACT_ADDRESS";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="logo">
          <img src="/logo.png" alt="Weidel Coin" className="h-12" />
        </div>

        <div className="contract-address flex items-center gap-2 my-4 md:my-0">
          <code className="bg-blue-700 p-2 rounded">{contractAddress}</code>
          <button
            onClick={copyToClipboard}
            className="tooltip"
            data-tooltip={t("header.copyAddress")}
          >
            <FaCopy className="h-5 w-5" />
          </button>
        </div>

        <div className="social-links flex gap-4">
          <a href="#" className="hover:text-gold transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            <FaTelegram className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};
