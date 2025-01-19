import React from "react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <svg className="w-12 h-12" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" className="fill-primary" />
              <text
                x="20"
                y="25"
                className="text-white text-2xl font-bold text-center"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                CA
              </text>
            </svg>
            <span className="text-2xl font-bold gradient-text">
              Cartoon Art
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-primary">
              About
            </a>
            <a href="#tokenomics" className="text-gray-300 hover:text-primary">
              Tokenomics
            </a>
            <a href="#roadmap" className="text-gray-300 hover:text-primary">
              Roadmap
            </a>
            <a href="#team" className="text-gray-300 hover:text-primary">
              Team
            </a>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect Wallet
            </motion.button>
          </nav>
        </div>
      </div>
    </header>
  );
};
