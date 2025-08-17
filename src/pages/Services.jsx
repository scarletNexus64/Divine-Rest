import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPray, FaHandHoldingHeart, FaGlobe, FaShieldAlt, FaFileAlt, FaTruck, FaHeart, FaBook, FaPhone, FaCheck, FaArrowRight, FaClock, FaUsers, FaAward, FaHandshake } from 'react-icons/fa';
import { Flame, Flower, Shield, Globe, FileText, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const mainServices = [
    {
      id: 'obseques',
      title: 'funeralOrganization',
      icon: <Flame className="w-8 h-8" />,
      description: 'funeralOrganizationFullDesc',
      price: 'funeralOrganizationPrice',
      features: [
        'immediateSupport24h',
        'completeCeremonyOrganization',
        'coordinationAllStakeholders',
        'respectWishesTraditions',
        'psychologicalSupport'
      ],
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      id: 'cremation',
      title: 'cremationInhumation',
      icon: <Heart className="w-8 h-8" />,
      description: 'cremationInhumationFullDesc',
      price: 'cremationInhumationPrice',
      features: [
        'cremationInhumationOrganization',
        'qualityCoffinsUrns',
        'ashesDispersalManagement',
        'personalizedMemorialSpaces',
        'respectReligiousRites'
      ],
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      id: 'transport',
      title: 'internationalTransport',
      icon: <Globe className="w-8 h-8" />,
      description: 'internationalTransportFullDesc',
      price: 'onQuote',
      features: [
        'repatriationAllCountries',
        'completeCustomsFormalities',
        'embassyConsulateCoordination',
        'secureRespectfulTransport',
        'internationalAccompaniment'
      ],
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      id: 'prevoyance',
      title: 'preventionContracts',
      icon: <Shield className="w-8 h-8" />,
      description: 'preventionContractsFullDesc',
      price: 'preventionContractsPrice',
      features: [
        'personalizedFuneralContracts',
        'budgetAdaptedFinancing',
        'wishesRespectGuarantee',
        'lovedOnesFinancialProtection',
        'personalizedAdvice'
      ],
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      id: 'administratif',
      title: 'administrativeSteps',
      icon: <FileText className="w-8 h-8" />,
      description: 'administrativeStepsFullDesc',
      price: 'includedInServices',
      features: [
        'deathDeclaration',
        'necessaryAuthorizations',
        'socialOrganizationsRelations',
        'contractsSubscriptionsManagement',
        'successionStepsHelp'
      ],
      color: "from-indigo-500 to-indigo-700",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    },
    {
      id: 'articles',
      title: 'funeralArticles',
      icon: <Flower className="w-8 h-8" />,
      description: 'funeralArticlesFullDesc',
      price: 'funeralArticlesPrice',
      features: [
        'coffinsUrnsAllStyles',
        'plaquesMonumentsFuneral',
        'flowersFloralCompositions',
        'personalizedMemorialItems',
        'condolenceBooks'
      ],
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    }
  ];

  const stats = [
    { icon: <FaUsers className="w-8 h-8" />, number: "10,000+", label: 'familiesAccompanied' },
    { icon: <FaClock className="w-8 h-8" />, number: "24/7", label: 'availability' },
    { icon: <FaAward className="w-8 h-8" />, number: "50+", label: 'yearsExperience' },
    { icon: <FaHandshake className="w-8 h-8" />, number: "100%", label: 'clientSatisfaction' }
  ];

  const processSteps = [
    {
      step: "1",
      title: 'emergencyCall',
      description: 'emergencyCallDesc',
      icon: <FaPhone className="w-6 h-6" />
    },
    {
      step: "2", 
      title: 'personalizedInterview',
      description: 'personalizedInterviewDesc',
      icon: <FaUsers className="w-6 h-6" />
    },
    {
      step: "3",
      title: 'completeOrganization',
      description: 'completeOrganizationDesc',
      icon: <FaFileAlt className="w-6 h-6" />
    },
    {
      step: "4",
      title: 'continuousSupport',
      description: 'continuousSupportDesc',
      icon: <FaHeart className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Nos Services"
        subtitle="Des services funéraires d'excellence pour vous accompagner avec dignité et respect"
        backgroundImage="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920"
      />

      {/* Hero Stats */}
      <section className="py-16 bg-divine-gold">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-divine-dark dark:text-white mb-6">
              Services d'Excellence
            </h2>
            <p className="text-xl text-divine-gray dark:text-gray-300 max-w-3xl mx-auto">
              Une gamme complète de services funéraires personnalisés pour répondre à tous vos besoins avec humanité et professionnalisme.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${service.bgColor} hover:scale-105`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Service Icon & Header */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-divine-dark dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-divine-gray dark:text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price */}
                <div className="text-xl font-bold text-divine-gold mb-6">
                  {service.price}
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={activeService === service.id ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start"
                    >
                      <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm text-divine-gray dark:text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="flex gap-3">
                  <Link
                    to="/devis"
                    className={`flex-1 bg-gradient-to-r ${service.color} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105`}
                  >
                    Devis
                    <FaArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link
                    to="/catalogue"
                    className="px-4 py-3 border-2 border-divine-gold text-divine-gold rounded-xl hover:bg-divine-gold hover:text-white transition-all duration-300"
                  >
                    <FaHeart />
                  </Link>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-divine-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-6">
              Notre Processus
            </h2>
            <p className="text-xl text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
              Un accompagnement structuré et bienveillant pour vous guider à chaque étape de cette épreuve difficile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center group"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-divine-gold transform translate-x-4 z-0"></div>
                )}
                
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 bg-divine-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-divine-gold mb-4 flex justify-center">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-divine-dark dark:text-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-divine-gray dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-divine-light dark:bg-gray-800 rounded-3xl p-12 relative">
              <div className="text-6xl text-divine-gold mb-6">"</div>
              <blockquote className="text-2xl font-serif text-divine-dark dark:text-white mb-8 leading-relaxed">
                Divine Rest nous a accompagnés avec une humanité et un professionnalisme exceptionnels durant cette épreuve difficile. Leur équipe a su être présente tout en respectant notre douleur et nos volontés. Un grand merci pour leur dévouement.
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <p className="font-semibold text-divine-dark dark:text-white">Famille Dubois</p>
                  <p className="text-divine-gray dark:text-gray-300 text-sm">2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-divine-dark to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Besoin d'une aide immédiate ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Notre équipe est disponible 24h/24 et 7j/7 pour vous accompagner dans cette épreuve difficile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33123456789"
                className="bg-divine-gold text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center group"
              >
                <FaPhone className="mr-3 group-hover:animate-pulse" />
                01 23 45 67 89
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-divine-dark transition-all duration-300"
              >
                Formulaire de contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;