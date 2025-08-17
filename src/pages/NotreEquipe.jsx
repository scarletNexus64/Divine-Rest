import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaClock, FaGlobe, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Award, Users, Target, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const NotreEquipe = () => {
  const teamMembers = [
    {
      name: "Marie Dupont",
      role: "Directrice Générale",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      description: "Plus de 20 ans d'expérience dans le secteur funéraire. Marie dirige notre équipe avec humanité et professionnalisme.",
      linkedin: "#",
      email: "marie.dupont@divinerest.fr"
    },
    {
      name: "Jean-Pierre Martin",
      role: "Conseiller Funéraire Senior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      description: "Expert en organisation de cérémonies, Jean-Pierre accompagne les familles avec empathie et respect.",
      linkedin: "#",
      email: "jp.martin@divinerest.fr"
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Accompagnement",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      description: "Spécialiste du deuil et de l'accompagnement psychologique des familles endeuillées.",
      linkedin: "#",
      email: "s.bernard@divinerest.fr"
    },
    {
      name: "Thomas Lefebvre",
      role: "Maître de Cérémonie",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      description: "Coordination et animation des cérémonies avec dignité et respect des traditions.",
      linkedin: "#",
      email: "t.lefebvre@divinerest.fr"
    },
    {
      name: "Claire Rousseau",
      role: "Conseillère Administrative",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      description: "Experte en démarches administratives pour simplifier les formalités aux familles.",
      linkedin: "#",
      email: "c.rousseau@divinerest.fr"
    },
    {
      name: "David Moreau",
      role: "Responsable Logistique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      description: "Coordination des transports et de la logistique pour tous nos services.",
      linkedin: "#",
      email: "d.moreau@divinerest.fr"
    }
  ];

  const values = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Compassion",
      description: "Nous accompagnons chaque famille avec empathie et bienveillance."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dignité",
      description: "Le respect de la personne défunte et de sa famille guide chacun de nos gestes."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Humanité",
      description: "L'humain est au cœur de notre démarche et de nos relations."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque service pour honorer vos proches."
    },
    {
      icon: <FaHandHoldingHeart className="w-8 h-8" />,
      title: "Accompagnement",
      description: "Un soutien personnalisé à chaque étape de cette épreuve difficile."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personnalisation",
      description: "Chaque cérémonie est unique et reflète la personnalité du défunt."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Notre Équipe"
        subtitle="Des professionnels dévoués à votre service avec humanité et expertise"
        backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920"
      />

      {/* Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif font-bold text-divine-dark dark:text-white mb-6">
              Rencontrez Notre Équipe
            </h2>
            <p className="text-lg text-divine-gray dark:text-gray-300 leading-relaxed">
              Depuis plus de 50 ans, notre équipe de professionnels qualifiés vous accompagne dans les moments difficiles. Chaque membre de notre équipe est formé pour vous offrir un service empathique et respectueux, alliant expertise technique et soutien humain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-divine-light dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-4">
              Nos Professionnels
            </h2>
            <p className="text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
              Une équipe expérimentée et dévouée, formée aux dernières techniques et toujours à l'écoute de vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif font-bold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-divine-gray dark:text-gray-300 mb-4">
                    {member.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-divine-gold bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
                    >
                      <FaEnvelope className="text-divine-gold" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-divine-gold bg-opacity-20 rounded-full hover:bg-opacity-30 transition"
                    >
                      <FaLinkedin className="text-divine-gold" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark dark:text-white mb-4">
              Nos Valeurs
            </h2>
            <p className="text-divine-gray dark:text-gray-300 max-w-2xl mx-auto">
              Les principes fondamentaux qui guident notre action quotidienne et notre engagement envers les familles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-divine-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition">
                  <div className="text-divine-gold">{value.icon}</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-divine-dark dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-divine-gray dark:text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-divine-dark to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-serif font-bold mb-6">
              Nous sommes là pour vous
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Notre équipe est disponible 24h/24 et 7j/7 pour vous accompagner et répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+33123456789"
                className="bg-divine-gold text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition"
              >
                Appelez-nous : 01 23 45 67 89
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-divine-dark transition"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NotreEquipe;