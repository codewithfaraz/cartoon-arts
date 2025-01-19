import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Tokenomics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Tokenomics
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
            <div className="text-gray-700">Equity Pool (Burned)</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg text-center"
          ></motion.div>
            <div className="text-3xl font-bold text-blue-600 mb-2">999M</div>
            <div className="text-gray-700">Total Supply</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg text-center"
          ></motion.div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
            <div className="text-gray-700">Campaign Budget</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
