import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, FileText, Clock, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DevisGenerator from '../components/DevisGenerator';

const Devis = () => {
  
  const advantages = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Calcul instantané",
      description: "Obtenez un devis personnalisé en quelques minutes"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Devis détaillé",
      description: "Document complet avec tous les détails des services"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Disponible 24h/7j",
      description: "Service accessible à tout moment"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sans engagement",
      description: "Devis gratuit et sans obligation"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Générateur de Devis"
        subtitle="Obtenez une estimation personnalisée de nos services funéraires"
        backgroundImage="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920"
      />

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white mb-6">
              Estimez vos services
            </h2>
            <p className="text-lg text-divine-gray dark:text-gray-300">
              Notre générateur de devis vous permet d'obtenir une estimation détaillée et personnalisée de nos services funéraires. Répondez à quelques questions simples et recevez instantanément un devis adapté à vos besoins et votre budget.
            </p>
          </motion.div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-divine-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-divine-gold">{advantage.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-divine-gray dark:text-gray-300 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Devis Generator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <DevisGenerator />
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-divine-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white text-center mb-8">
              Informations importantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-4">
                  Précision du devis
                </h3>
                <p className="text-divine-gray dark:text-gray-300 text-sm leading-relaxed">
                  Ce devis est une estimation basée sur les informations fournies. Le prix final peut varier selon les spécificités de votre demande et les services additionnels choisis.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-4">
                  Validité et engagement
                </h3>
                <p className="text-divine-gray dark:text-gray-300 text-sm leading-relaxed">
                  Ce devis est valable 30 jours et ne constitue pas un engagement de votre part. Vous êtes libre de nous consulter pour affiner votre demande ou modifier vos choix.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-4">
                  Accompagnement personnalisé
                </h3>
                <p className="text-divine-gray dark:text-gray-300 text-sm leading-relaxed">
                  Nos conseillers sont à votre disposition pour vous expliquer le devis, répondre à vos questions et vous accompagner dans l'organisation des obsèques.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-divine-dark dark:text-white mb-4">
                  Confidentialité
                </h3>
                <p className="text-divine-gray dark:text-gray-300 text-sm leading-relaxed">
                  Toutes vos informations personnelles sont traitées de manière confidentielle et ne seront jamais communiquées à des tiers sans votre autorisation expresse.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Devis;