import React from "react";
import { motion } from "framer-motion";

export const Team = () => {
  const team = [
    {
      name: "Crypto Cart",
      role: "Founder & Artist",
      image: "https://robohash.org/crypto1?set=set2&size=200x200",
    },
    {
      name: "Moon Draw",
      role: "Lead Developer",
      image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_23-2148466688.jpg",
    },
    {
      name: "NFT Master",
      role: "Community Manager",
      image:
        "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_23-2148466844.jpg",
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-primary"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
