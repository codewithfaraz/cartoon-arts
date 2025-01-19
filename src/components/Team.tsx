import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-8">
            All of Germany is the team behind Weidel Coin!
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* Add representative images here */}
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-50 rounded-lg overflow-hidden"
              >
                <img
                  src={`/team-member-${index + 1}.jpg`}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
