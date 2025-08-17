import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [activeItem, setActiveItem] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes disponibles 24h/24 et 7j/7 pour les urgences. Nos bureaux sont ouverts du lundi au vendredi de 8h à 18h, et le samedi de 9h à 12h. En cas d'urgence, nous intervenons immédiatement à tout moment."
    },
    {
      id: 2,
      question: "Quels sont les types d'obsèques que vous organisez ?",
      answer: "Nous organisons tous types d'obsèques : inhumation, crémation, obsèques religieuses (catholiques, protestantes, juives, musulmanes, bouddhistes), obsèques civiles, et cérémonies laïques. Nous nous adaptons à toutes les traditions et convictions."
    },
    {
      id: 3,
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Oui, nous proposons plusieurs solutions de financement : paiement en plusieurs fois sans frais, assurance obsèques, contrats de prévoyance, et prise en charge par les organismes sociaux. Nous étudions chaque situation pour trouver la solution la plus adaptée."
    },
    {
      id: 4,
      question: "Combien de temps à l'avance faut-il vous contacter ?",
      answer: "Il n'y a pas de délai minimum. Nous intervenons immédiatement en cas d'urgence. Pour les obsèques, nous conseillons de nous contacter dès que possible pour organiser au mieux la cérémonie selon vos souhaits."
    },
    {
      id: 5,
      question: "Pouvez-vous vous occuper des démarches administratives ?",
      answer: "Absolument. Nous prenons en charge toutes les démarches administratives : déclaration de décès, obtention des autorisations, contact avec les organismes sociaux, démarches auprès de la mairie, et toute la paperasserie nécessaire."
    },
    {
      id: 6,
      question: "Organisez-vous des obsèques dans toute la France ?",
      answer: "Oui, nous organisons des obsèques sur tout le territoire français et même à l'international. Notre réseau de partenaires nous permet d'assurer un service de qualité partout où vous en avez besoin."
    },
    {
      id: 7,
      question: "Que comprend un contrat obsèques ?",
      answer: "Un contrat obsèques comprend généralement : les soins de conservation, le cercueil, la toilette et l'habillage, les formalités administratives, l'organisation de la cérémonie, le transport du défunt, et selon votre choix, la crémation ou l'inhumation."
    },
    {
      id: 8,
      question: "Proposez-vous un service de marbrerie ?",
      answer: "Oui, nous avons notre propre atelier de marbrerie. Nous réalisons monuments funéraires, plaques commémoratives, gravures, et tous travaux de marbrerie. Nous proposons une large gamme de matériaux et de designs personnalisables."
    }
  ];

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
            Trouvez les réponses aux questions les plus courantes concernant nos services funéraires
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-divine-dark dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {activeItem === item.id ? (
                      <Minus className="w-5 h-5 text-divine-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-divine-gold" />
                    )}
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {activeItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-b-lg shadow-md p-6 pt-0 -mt-2">
                      <p className="text-divine-gray dark:text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-divine-gray dark:text-gray-300 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="bg-divine-gold text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
Appelez-nous : 01 23 45 67 89
            </a>
            <a
              href="mailto:contact@divinerest.fr"
              className="border-2 border-divine-gold text-divine-gold dark:text-divine-gold px-8 py-3 rounded-full font-medium hover:bg-divine-gold hover:text-white transition-all"
            >
Écrivez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;