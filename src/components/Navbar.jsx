import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/catalogue', label: 'Catalogue' },
    { path: '/tarifs', label: 'Tarifs' },
    { path: '/devis', label: 'Devis' },
    { path: '/notre-equipe', label: 'Notre Équipe' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-divine-dark dark:bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          {/* Desktop Top Bar */}
          <div className="hidden md:flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <FaClock className="text-divine-gold" />
                <span>Disponible 24h/24 - 7j/7</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaPhone className="text-divine-gold" />
                <a href="tel:+33123456789" className="font-semibold hover:text-divine-gold transition">
                  01 23 45 67 89
                </a>
              </div>
              <div id="google_translate_element"></div>
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile Top Bar */}
          <div className="md:hidden flex justify-between items-center text-xs">
            <div className="flex items-center gap-2">
              <FaPhone className="text-divine-gold text-sm" />
              <a href="tel:+33123456789" className="font-semibold hover:text-divine-gold transition">
                01 23 45 67 89
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div id="google_translate_element"></div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 bg-white dark:bg-gray-900 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-divine-gold rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg md:text-xl font-bold">DR</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-divine-dark dark:text-white">Divine Rest</h1>
                <p className="text-xs text-divine-gray dark:text-gray-300 hidden sm:block">Accompagnement & Dignité</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-divine-gold'
                      : 'text-divine-dark dark:text-white hover:text-divine-gold'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-divine-gold"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              
              {/* <Link
                to="/contact"
                className="ml-2 xl:ml-4 bg-divine-gold text-white px-3 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-medium hover:bg-opacity-90 transition-all"
              >
                <span className="hidden xl:inline">Contact urgence</span>
                <span className="xl:hidden">Contact</span>
              </Link> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-divine-dark dark:text-white hover:text-divine-gold transition"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="container mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-divine-gold bg-opacity-10 text-divine-gold'
                        : 'text-divine-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 bg-divine-gold text-white text-center py-3 rounded-full font-medium"
                >
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
