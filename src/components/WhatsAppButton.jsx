import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      action: () => window.open('https://wa.me/33123456789?text=Bonjour, je souhaite obtenir des informations sur vos services funéraires.', '_blank'),
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      type: 'phone',
      label: 'Appeler',
      icon: Phone,
      action: () => window.open('tel:+33123456789'),
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      type: 'email',
      label: 'Email',
      icon: Mail,
      action: () => window.open('mailto:contact@divinerest.fr?subject=Demande d\'information&body=Bonjour, je souhaite obtenir des informations sur vos services.'),
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 space-y-3"
          >
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={option.type}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={option.action}
                  className={`flex items-center ${option.color} text-white px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 group`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="font-medium">{option.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-divine-gold hover:bg-opacity-90'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white mx-auto" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white mx-auto" />
        )}
      </motion.button>

      {/* Notification Badge */}
      {!isOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-[4.5rem] right-4 z-40"
        >
          <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
            Contactez-nous !
          </div>
        </motion.div>
      )}
    </>
  );
};

export default WhatsAppButton;