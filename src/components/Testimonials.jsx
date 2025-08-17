import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      date: "Janvier 2024",
      rating: 5,
      text: "Un accompagnement exceptionnel dans un moment très difficile. L'équipe a fait preuve d'une grande humanité et d'un professionnalisme remarquable. Je les remercie du fond du cœur."
    },
    {
      name: "Jean-Pierre Martin",
      date: "Décembre 2023",
      rating: 5,
      text: "Divine Rest nous a accompagnés avec beaucoup de bienveillance et de respect. Tout a été organisé parfaitement, nous permettant de nous recueillir sereinement."
    },
    {
      name: "Sophie Laurent",
      date: "Novembre 2023",
      rating: 5,
      text: "Je recommande vivement leurs services. Une équipe à l'écoute, disponible et très professionnelle. Ils ont su respecter nos souhaits dans les moindres détails."
    }
  ];

  return (
    <section className="py-20 bg-divine-light dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-4">
            Témoignages de familles
          </h2>
          <p className="text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
            La confiance et la satisfaction de nos familles sont notre plus grande fierté
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg relative"
            >
              <FaQuoteLeft className="absolute top-4 right-4 text-divine-gold opacity-20 text-3xl" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-divine-gold" />
                ))}
              </div>

              <p className="text-divine-gray dark:text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <p className="font-semibold text-divine-dark dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-divine-gray dark:text-gray-400">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
