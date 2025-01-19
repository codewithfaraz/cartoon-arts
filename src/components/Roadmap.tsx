import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Roadmap: React.FC = () => {
  const { t } = useTranslation();

  const phases = [
    { phase: "1", title: "Launch", description: "Coin launch and first memes" },
    {
      phase: "2",
      title: "Growth",
      description: "Community building and exchange listings",
    },
    {
      phase: "3",
      title: "Victory",
      description: "Viral campaigns and election victory",
    },
    {
      phase: "4",
      title: "Moon",
      description: "Global triumph and moon mission",
    },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Roadmap
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-2xl font-bold text-gold mb-4">
                Phase {phase.phase}
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {phase.title}
              </h3>
              <p className="text-gray-600">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
