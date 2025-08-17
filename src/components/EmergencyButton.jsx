import React, { useState, useEffect } from 'react';
import { FaPhone, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const EmergencyButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-divine-gold text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow ${
          pulse ? 'animate-pulse' : ''
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaPhone size={24} />
      </motion.button>

      {/* Emergency Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>

              <h3 className="text-xl font-serif font-bold text-divine-dark mb-4">
                Assistance d'urgence
              </h3>
              
              <p className="text-sm text-gray-600 mb-6">
                Notre équipe est disponible 24h/24 et 7j/7 pour vous accompagner dans ces moments difficiles.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+33123456789"
                  className="flex items-center justify-center w-full bg-divine-gold text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition"
                >
                  <FaPhone className="mr-2" />
                  Appeler maintenant
                </a>
                
                <div className="text-center">
                  <p className="text-xs text-gray-500">ou appelez directement le</p>
                  <p className="text-lg font-bold text-divine-dark">01 23 45 67 89</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Réponse immédiate • Accompagnement personnalisé
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EmergencyButton;
