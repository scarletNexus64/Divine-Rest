import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/background.jpg')"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Title with elegant animation */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight drop-shadow-2xl"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-divine-blue">
              Divine Rest
            </span>
            <span className="block">Services funéraires</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-white/90">
              de prestige
            </span>
          </motion.h1>
          
          <motion.div
            className="w-32 h-1 bg-divine-blue mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Depuis plus de 50 ans, nous accompagnons les familles dans les moments difficiles 
            avec humanité, professionnalisme et respect. Notre équipe dévouée vous guide 
            à chaque étape pour rendre un hommage digne à vos proches.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="tel:+33123456789"
              className="group relative bg-divine-blue hover:bg-divine-blue-dark text-white px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <FaPhone className="mr-3 relative z-10" />
              <span className="relative z-10">Appel d'urgence 24h/24</span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/devis"
                className="group relative bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 flex items-center hover:bg-white/20 hover:border-white/50"
              >
                <span className="relative z-10">Devis gratuit</span>
                <FaArrowRight className="ml-3 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with pulse effect */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
              <motion.div 
                className="w-1.5 h-4 bg-divine-blue rounded-full mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="absolute inset-0 w-7 h-12 border-2 border-white/20 rounded-full animate-ping"></div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;