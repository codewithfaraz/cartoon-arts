import React from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export const Hero = () => {
  const launchConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Cartoon Art
          </motion.h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            The most adorable meme coin in the crypto universe! 🚀
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={launchConfetti}
          >
            Join the Fun! 🎉
          </motion.button>
        </motion.div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://robohash.org/cartoonart?set=set3&size=400x400"
            // Alternative reliable URLs if above doesn't work:
            // src="https://api.dicebear.com/6.x/bottts/svg?seed=cartoon&size=400"
            // src="https://robohash.org/cartoon?set=set1&size=400x400"
            alt="Cartoon Art Mascot"
            className="w-full max-w-md mx-auto animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};
