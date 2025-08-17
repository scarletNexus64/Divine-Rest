import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-divine-gold bg-opacity-10 dark:bg-opacity-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-30 transition-colors">
        <div className="text-divine-gold text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-serif font-bold text-divine-dark dark:text-white mb-3">{title}</h3>
      <p className="text-divine-gray dark:text-gray-300 mb-4">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-divine-gold font-medium hover:text-divine-dark dark:hover:text-white transition-colors"
      >
        En savoir plus
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
