import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaCalculator, FaFileDownload, FaPhone } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Tarifs = () => {
  const [selectedPack, setSelectedPack] = useState(null);

  const getPacks = () => [
    {
      name: "Pack Essentiel",
      price: "2 500€",
      description: "Services funéraires de base pour un accompagnement digne et respectueux.",
      features: [
        { name: "Prise en charge du défunt", included: true },
        { name: "Cercueil standard", included: true },
        { name: "Transport vers le lieu de cérémonie", included: true },
        { name: "Démarches administratives de base", included: true },
        { name: "Mise en bière", included: true },
        { name: "Cérémonie personnalisée", included: false },
        { name: "Fleurs et ornements", included: false },
        { name: "Transport international", included: false }
      ],
      color: "gray"
    },
    {
      name: "Pack Confort",
      price: "4 500€",
      description: "Services complets avec personnalisation pour une cérémonie à votre image.",
      popular: true,
      features: [
        { name: "Prise en charge du défunt", included: true },
        { name: "Cercueil de qualité", included: true },
        { name: "Transport vers le lieu de cérémonie", included: true },
        { name: "Démarches administratives complètes", included: true },
        { name: "Mise en bière", included: true },
        { name: "Cérémonie personnalisée", included: true },
        { name: "Composition florale de base", included: true },
        { name: "Transport international", included: false }
      ],
      color: "gold"
    },
    {
      name: "Pack Prestige",
      price: "7 500€",
      description: "Services haut de gamme pour un hommage d'exception avec tous les raffinements.",
      features: [
        { name: "Prise en charge du défunt", included: true },
        { name: "Cercueil haut de gamme", included: true },
        { name: "Transport illimité", included: true },
        { name: "Démarches administratives complètes", included: true },
        { name: "Mise en bière", included: true },
        { name: "Cérémonie personnalisée", included: true },
        { name: "Compositions florales premium", included: true },
        { name: "Transport international", included: true }
      ],
      color: "purple"
    }
  ];

  const packs = getPacks();

  const getAdditionalServices = () => [
    { name: "Service de crémation", price: "À partir de 800€" },
    { name: "Caveau familial", price: "À partir de 2000€" },
    { name: "Monument funéraire", price: "À partir de 1500€" },
    { name: "Rapatriement international", price: "Sur devis" },
    { name: "Fleurs supplémentaires", price: "À partir de 50€" },
    { name: "Plaque personnalisée", price: "À partir de 150€" }
  ];

  const additionalServices = getAdditionalServices();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Nos Tarifs"
        subtitle="Découvrez nos différents packs de services funéraires adaptés à tous les budgets"
        backgroundImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920"
      />

      {/* Pricing Packs */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-4">
              Nos Packs de Services
            </h2>
            <p className="text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
              Choisissez le pack qui correspond le mieux à vos besoins et à votre budget. Tous nos services incluent un accompagnement personnalisé.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map((pack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                  pack.popular ? 'ring-2 ring-divine-gold' : ''
                }`}
              >
                {pack.popular && (
                  <div className="absolute top-0 right-0 bg-divine-gold text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Le plus populaire
                  </div>
                )}

                <div className={`p-8 ${
                  pack.color === 'gold' ? 'bg-gradient-to-br from-divine-gold/10 to-transparent' :
                  pack.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-transparent' :
                  'bg-gradient-to-br from-gray-100 to-transparent'
                }`}>
                  <h3 className="text-2xl font-serif font-bold text-divine-dark dark:text-white mb-2">
                    {pack.name}
                  </h3>
                  <p className="text-divine-gray dark:text-gray-300 mb-4">{pack.description}</p>
                  <div className="text-4xl font-bold text-divine-gold mb-6">
                    {pack.price}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        {feature.included ? (
                          <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-red-400 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-divine-dark dark:text-white' : 'text-gray-400 dark:text-gray-500'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPack(pack.name)}
                    className={`w-full py-3 rounded-full font-semibold transition ${
                      pack.popular
                        ? 'bg-divine-gold text-white hover:bg-opacity-90'
                        : 'bg-divine-dark text-white hover:bg-divine-gold'
                    }`}
                  >
                    Choisir ce pack
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-divine-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-4">
              Services Additionnels
            </h2>
            <p className="text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
              Complétez votre pack avec nos services additionnels pour répondre à tous vos besoins spécifiques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-divine-dark dark:text-white">{service.name}</h3>
                  <span className="text-divine-gold font-bold">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis Calculator */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-divine-dark to-gray-900 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center mb-6">
                <FaCalculator className="text-divine-gold text-3xl mr-4" />
                <h2 className="text-3xl font-serif font-bold">
                  Estimez votre budget
                </h2>
              </div>

              <p className="mb-8">
                Utilisez notre simulateur pour obtenir une estimation personnalisée de vos services funéraires selon vos besoins spécifiques.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/contact"
                  className="bg-divine-gold text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center"
                >
                  <FaCalculator className="mr-2" />
                  Simulateur de devis
                </Link>
                <button className="bg-white text-divine-dark px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center">
                  <FaFileDownload className="mr-2" />
                  Télécharger la brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-divine-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-8">
              Solutions de Financement
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-3">
                  Paiement comptant
                </h3>
                <p className="text-divine-gray dark:text-gray-300">
                  Règlement intégral à la signature du contrat avec une remise de 5% sur le montant total.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-3">
                  Paiement échelonné
                </h3>
                <p className="text-divine-gray dark:text-gray-300">
                  Possibilité de régler en plusieurs fois sans frais supplémentaires, selon votre situation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-3">
                  Contrat obsèques
                </h3>
                <p className="text-divine-gray dark:text-gray-300">
                  Prévoyance funéraire avec paiement mensuel pour organiser et financer vos obsèques à l'avance.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-divine-gold bg-opacity-10 dark:bg-opacity-20 rounded-xl">
              <p className="text-divine-dark dark:text-white">
                <strong>Bon à savoir :</strong> En cas de décès, les comptes bancaires sont bloqués. Prévoir un mode de financement adapté évite les difficultés aux proches.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-divine-dark to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-gray-300 mb-8">
            Nos conseillers sont à votre disposition pour étudier vos besoins et vous proposer une solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-divine-gold text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:+33123456789"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-divine-dark transition flex items-center justify-center"
            >
              <FaPhone className="mr-2" />
              01 23 45 67 89
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarifs;
