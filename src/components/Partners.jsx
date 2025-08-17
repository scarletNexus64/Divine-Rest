import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    { name: "Assurance Vie Plus", logo: "AVP" },
    { name: "Fleurs & Jardins", logo: "F&J" },
    { name: "Transport Funéraire International", logo: "TFI" },
    { name: "Marbriers de France", logo: "MF" },
    { name: "Cérémonies & Traditions", logo: "C&T" },
    { name: "Services Funéraires Européens", logo: "SFE" }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white mb-4">
            Nos partenaires de confiance
          </h2>
          <p className="text-divine-gray dark:text-gray-300">
            Des collaborations solides pour un service d'excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-divine-gold hover:bg-opacity-10 dark:hover:bg-opacity-20 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-divine-gray dark:text-gray-400">{partner.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
