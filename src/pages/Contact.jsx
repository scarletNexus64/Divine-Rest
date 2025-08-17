import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Votre message a été envoyé. Nous vous contacterons dans les plus brefs délais.');
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Téléphone",
      content: "01 23 45 67 89",
      link: "tel:+33123456789",
      highlight: true
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      content: "06 12 34 56 78",
      link: "https://wa.me/33612345678"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "contact@divinerest.fr",
      link: "mailto:contact@divinerest.fr"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      content: "123 Avenue de la Paix, 75001 Paris",
      link: "https://maps.google.com"
    },
    {
      icon: <FaClock />,
      title: "Horaires",
      content: "24h/24, 7j/7",
      highlight: true
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Contactez-nous"
        subtitle="Nous sommes là pour vous accompagner à chaque instant"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
      />

      {/* Emergency Banner */}
      <section className="bg-divine-gold py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-white">
            <FaPhone className="mr-3 animate-pulse" />
            <span className="font-semibold">Urgence 24h/24 : </span>
            <a href="tel:+33123456789" className="ml-2 font-bold text-lg hover:underline">
              01 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white mb-6">
                  Informations de contact
                </h2>
                <p className="text-divine-gray dark:text-gray-300 mb-8">
                  Notre équipe est disponible à tout moment pour répondre à vos questions et vous accompagner.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-start space-x-4 ${
                        info.highlight ? 'bg-divine-gold bg-opacity-10 dark:bg-opacity-20 p-4 rounded-lg' : ''
                      }`}
                    >
                      <div className={`w-12 h-12 ${
                        info.highlight ? 'bg-divine-gold' : 'bg-gray-100 dark:bg-gray-800'
                      } rounded-full flex items-center justify-center flex-shrink-0`}>
                        <div className={`${
                          info.highlight ? 'text-white' : 'text-divine-gold'
                        } text-xl`}>
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-divine-dark mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-divine-gray hover:text-divine-gold transition"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-divine-gray">{info.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-divine-light dark:bg-gray-800 rounded-2xl p-8"
              >
                <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Urgency Selection */}
                  <div>
                    <label className="block text-divine-dark dark:text-white font-medium mb-2">
                      Niveau d'urgence
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { value: 'urgent', label: 'Urgent', color: 'red' },
                        { value: 'normal', label: 'Normal', color: 'yellow' },
                        { value: 'information', label: 'Information', color: 'green' }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`relative cursor-pointer ${
                            formData.urgency === option.value
                              ? 'ring-2 ring-divine-gold'
                              : ''
                          } rounded-lg p-3 text-center bg-white dark:bg-gray-700 hover:shadow-md transition`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={option.value}
                            checked={formData.urgency === option.value}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <span className="block text-sm font-medium text-divine-dark">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-divine-dark font-medium mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-divine-dark font-medium mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-divine-dark font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-divine-dark font-medium mb-2">
                      Objet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition"
                    >
                      <option value="">Sélectionnez un objet</option>
                      <option value="urgence">Assistance décès</option>
                      <option value="devis">Demande de devis</option>
                      <option value="prevoyance">Contrat de prévoyance</option>
                      <option value="information">Demande d'information</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-divine-dark font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-divine-gold focus:border-transparent transition resize-none"
                      placeholder="Décrivez votre situation ou votre demande..."
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-divine-gray">
                      * Champs obligatoires
                    </p>
                    <button
                      type="submit"
                      className="bg-divine-gold text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition flex items-center"
                    >
                      <FaPaperPlane className="mr-2" />
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1635959040863!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Notre localisation"
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;