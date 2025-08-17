import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaClock, FaGlobe, FaPhone, FaArrowRight, FaQuoteLeft, FaStar, FaShieldAlt, FaUsers, FaPray, FaCheckCircle, FaAward, FaHandshake, FaSpinner } from 'react-icons/fa';
import { Flame, Heart, Globe, Shield, FileText, Flower, User, Clock, Award } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Partners from '../components/Partners';
import FAQ from '../components/FAQ';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Organisation d'obsèques",
      description: "Accompagnement complet pour l'organisation de cérémonies dignes et respectueuses.",
      link: "/services#obseques",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Crémation et inhumation",
      description: "Services de crémation et d'inhumation avec respect des traditions et volontés.",
      link: "/services#cremation",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Transport international",
      description: "Rapatriement et transport international avec toutes les formalités administratives.",
      link: "/services#transport",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Contrats de prévoyance",
      description: "Contrats personnalisés pour organiser et financer ses obsèques à l'avance.",
      link: "/services#prevoyance",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  const stats = [
    { 
      number: "50+", 
      label: "Années d'expérience",
      icon: <Award className="w-8 h-8" />,
      delay: 0.1
    },
    { 
      number: "24/7", 
      label: "Disponibilité",
      icon: <Clock className="w-8 h-8" />,
      delay: 0.2
    },
    { 
      number: "10000+", 
      label: "Familles accompagnées",
      icon: <User className="w-8 h-8" />,
      delay: 0.3
    },
    { 
      number: "100%", 
      label: "Satisfaction client",
      icon: <FaCheckCircle className="w-8 h-8" />,
      delay: 0.4
    }
  ];

  const testimonials = [
    {
      text: "Divine Rest nous a accompagnés avec une humanité et un professionnalisme exceptionnels. Leur équipe a su nous guider dans cette épreuve difficile.",
      author: "Marie Dubois",
      location: "Paris"
    },
    {
      text: "Un service irréprochable et une attention particulière aux détails. Nous recommandons vivement Divine Rest pour leur accompagnement bienveillant.",
      author: "Pierre Martin",
      location: "Lyon"
    },
    {
      text: "Professionnels compétents et à l'écoute. Ils ont rendu hommage à notre proche avec dignité et respect. Merci pour tout.",
      author: "Sophie Laurent",
      location: "Marseille"
    }
  ];

  const values = [
    {
      title: "Humanité",
      description: "Nous plaçons l'humain au cœur de notre démarche avec empathie et bienveillance.",
      icon: <FaHeart className="w-6 h-6" />
    },
    {
      title: "Professionnalisme",
      description: "Excellence technique et rigueur dans chaque étape de notre service.",
      icon: <FaAward className="w-6 h-6" />
    },
    {
      title: "Respect",
      description: "Respect des traditions, des volontés et de la dignité de chaque défunt.",
      icon: <FaHandshake className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-divine-gold"
        >
          <FaSpinner className="w-12 h-12" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      {/* Hero Section - Sans bannière */}
      <section className="hero-mobile relative py-12 md:py-20 lg:py-32 bg-gradient-to-br from-divine-light via-white to-divine-light dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-16"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-divine-dark dark:text-white mb-4 md:mb-6 leading-tight px-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Divine Rest
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light text-divine-gray dark:text-gray-300 mb-6 md:mb-8 px-4">
                  Services funéraires de prestige
                </h2>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-20 h-20 bg-divine-gold bg-opacity-10 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full blur-xl"
                />
              </motion.div>

              <motion.p 
                className="text-lg text-divine-gray dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Depuis plus de 50 ans, nous accompagnons les familles dans les moments difficiles avec humanité, professionnalisme et respect. Notre équipe dévouée vous guide à chaque étape pour rendre un hommage digne à vos proches.
              </motion.p>

              <motion.div 
                className="btn-group flex flex-col sm:flex-row gap-4 justify-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link
                  to="/contact"
                  className="btn-responsive group bg-divine-gold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg"
                >
                  Nous contacter
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.div>
                </Link>
                
                <a
                  href="tel:+33123456789"
                  className="btn-responsive group border-2 border-divine-gold text-divine-gold px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-divine-gold hover:text-white transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  <FaPhone className="mr-2 group-hover:animate-pulse" />
                  Urgence 24h/7j
                </a>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + stat.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card-mobile bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-divine-gold mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-divine-dark dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-divine-gray dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-divine-dark dark:text-white mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-divine-gray dark:text-gray-300 max-w-3xl mx-auto">
              Des services funéraires complets pour vous accompagner avec dignité et respect dans tous vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-divine-dark dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-divine-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  to={service.link}
                  className="inline-flex items-center text-divine-gold font-medium hover:text-divine-dark dark:hover:text-white transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  En savoir plus
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center bg-divine-gold text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Découvrir tous nos services
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-divine-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-6">
                Nos Valeurs
              </h2>
              <p className="text-xl text-divine-gray dark:text-gray-300">
                Les principes qui guident notre action au quotidien pour vous servir avec excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-divine-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-divine-gold group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-divine-gray dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-12">
              Témoignages
            </h2>

            <div className="relative h-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="bg-divine-light dark:bg-gray-800 rounded-3xl p-12 max-w-3xl">
                    <div className="text-6xl text-divine-gold mb-6">"</div>
                    <blockquote className="text-xl font-light text-divine-dark dark:text-white mb-6 leading-relaxed">
                      {testimonials[currentTestimonial].text}
                    </blockquote>
                    <div>
                      <p className="font-semibold text-divine-dark dark:text-white">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-divine-gray dark:text-gray-300 text-sm">
                        {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-divine-gold' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;