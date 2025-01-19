import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
