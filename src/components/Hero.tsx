import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const intervalId = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        return;
      }
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FFD700", "#0052D4"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#FFD700", "#0052D4"],
      });
    }, 250);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen relative bg-blue-50 flex items-center"
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/weidel-crown.png"
            alt="Crowned Weidel"
            className="w-full max-w-2xl rounded-2xl shadow-2xl"
          />

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#buy"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center"
            >
              {t("cta.buyNow")}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#community"
              className="bg-gold text-blue-900 px-8 py-4 rounded-full font-bold text-lg text-center"
            >
              {t("cta.joinCommunity")}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
