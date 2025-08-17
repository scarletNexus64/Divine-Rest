import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

const PageHeader = ({ title, subtitle, backgroundImage, breadcrumbs }) => {
  return (
    <section className="page-header relative h-[30vh] md:h-[40vh] min-h-[250px] md:min-h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage || "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 md:mb-4 px-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4 md:mb-6 px-4">
              {subtitle}
            </p>
          )}
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center space-x-1 md:space-x-2 text-white/80 text-sm px-4">
            <Link to="/" className="hover:text-divine-gold transition flex items-center">
              <FaHome className="mr-1 text-xs md:text-sm" />
              <span className="hidden sm:inline">Accueil</span>
              <span className="sm:hidden">Home</span>
            </Link>
            <FaChevronRight className="text-xs" />
            <span className="text-divine-gold truncate max-w-[150px] sm:max-w-none">{title}</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-divine-gold to-transparent"></div>
    </section>
  );
};

export default PageHeader;
