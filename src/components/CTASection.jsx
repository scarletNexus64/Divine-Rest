import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-divine-dark to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Besoin d'assistance immédiate ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Notre équipe est disponible 24h/24 et 7j/7 pour vous accompagner et répondre à toutes vos questions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:+33123456789"
              className="bg-divine-gold text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="mr-3" />
              01 23 45 67 89
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-divine-dark transition-all flex items-center"
              >
                <FaEnvelope className="mr-3" />
                Nous contacter
              </Link>
            </motion.div>
          </div>

          <p className="mt-8 text-gray-400 text-sm">
            Réponse garantie dans l'heure • Accompagnement personnalisé • Devis gratuit
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
