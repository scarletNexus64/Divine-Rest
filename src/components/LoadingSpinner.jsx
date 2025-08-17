import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 border-4 border-divine-gold border-opacity-30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-divine-gold border-t-transparent rounded-full"></div>
      </motion.div>
      <p className="ml-4 text-divine-gray">Chargement...</p>
    </div>
  );
};

export default LoadingSpinner;
