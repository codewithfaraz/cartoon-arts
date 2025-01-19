import React from "react";
import { motion } from "framer-motion";

export const Tokenomics = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4ECDC4] to-transparent opacity-5"></div>
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/4090/4090458.png"
            // Fallback URL if above doesn't work:
            // src="https://cdn-icons-png.flaticon.com/512/2091/2091665.png"
            alt="Token Icon"
            className="w-32 h-32 glow"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.h2
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tokenomics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-gradient-to-br from-[#1E1E2E] to-[#13163E] p-8 rounded-2xl text-center border border-gray-700 shadow-xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Total Supply
            </h3>
            <p className="text-3xl font-bold text-white">1,000,000,000</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-gradient-to-br from-[#1E1E2E] to-[#13163E] p-8 rounded-2xl text-center border border-gray-700 shadow-xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Initial Price
            </h3>
            <p className="text-3xl font-bold text-white">$0.001</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-gradient-to-br from-[#1E1E2E] to-[#13163E] p-8 rounded-2xl text-center border border-gray-700 shadow-xl backdrop-blur-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Liquidity Pool
            </h3>
            <p className="text-3xl font-bold text-white">40%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
