import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaHistory, FaAward, FaHandshake, FaGlobe } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: "Empathie",
      description: "Nous comprenons votre douleur et vous accompagnons avec compassion."
    },
    {
      icon: <FaHandshake />,
      title: "Respect",
      description: "Le respect de vos volontés et de vos traditions est notre priorité."
    },
    {
      icon: <FaAward />,
      title: "Dignité",
      description: "Nous garantissons des obsèques dignes et à la hauteur de vos attentes."
    },
    {
      icon: <FaGlobe />,
      title: "Tradition & Modernité",
      description: "Alliant savoir-faire traditionnel et innovations modernes."
    }
  ];

  const team = [
    {
      name: "Pierre Dumont",
      role: "Directeur Général",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      description: "30 ans d'expérience dans l'accompagnement des familles"
    },
    {
      name: "Marie Lambert",
      role: "Conseillère Funéraire",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      description: "Spécialisée dans l'organisation de cérémonies personnalisées"
    },
    {
      name: "Jean-Marc Petit",
      role: "Responsable Logistique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      description: "Expert en transport funéraire international"
    },
    {
      name: "Sophie Martin",
      role: "Responsable Administrative",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
      description: "Accompagnement dans toutes les démarches administratives"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="À propos de Divine Rest"
        subtitle="Une entreprise familiale au service des familles depuis 1974"
        backgroundImage="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920"
      />

      {/* Histoire Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaHistory className="text-divine-gold text-3xl mr-4" />
                <h2 className="text-4xl font-serif font-bold text-divine-dark">Notre Histoire</h2>
              </div>
              <p className="text-divine-gray mb-4 leading-relaxed">
                Fondée en 1974 par la famille Dumont, Divine Rest est née de la volonté d'offrir 
                un accompagnement humain et personnalisé aux familles endeuillées. Depuis près de 
                50 ans, nous avons accompagné plus de 10 000 familles avec le même engagement : 
                celui de transformer un moment de douleur en un hommage digne et mémorable.
              </p>
              <p className="text-divine-gray mb-4 leading-relaxed">
                Au fil des années, notre entreprise familiale s'est développée tout en conservant 
                ses valeurs fondamentales. Nous avons su allier tradition et modernité pour offrir 
                des services toujours plus adaptés aux besoins des familles.
              </p>
              <p className="text-divine-gray leading-relaxed">
                Aujourd'hui, Divine Rest est reconnue pour son professionnalisme, sa disponibilité 
                et sa capacité à créer des cérémonies uniques qui reflètent la personnalité du défunt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?w=400"
                alt="Notre histoire"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400"
                alt="Notre équipe"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400"
                alt="Nos valeurs"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400"
                alt="Notre engagement"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20 bg-divine-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-4">Nos Valeurs</h2>
            <p className="text-divine-gray max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-divine-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-divine-gold text-3xl">{value.icon}</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-divine-dark mb-2">{value.title}</h3>
                <p className="text-divine-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-4">Notre Équipe</h2>
            <p className="text-divine-gray max-w-2xl mx-auto">
              Des professionnels dévoués à votre service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-divine-dark mb-1">{member.name}</h3>
                <p className="text-divine-gold font-medium mb-2">{member.role}</p>
                <p className="text-divine-gray text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-20 bg-gradient-to-r from-divine-dark to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-6">Notre Engagement</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Nous nous engageons à vous offrir un service irréprochable, avec transparence, 
              professionnalisme et humanité. Votre satisfaction et votre sérénité sont nos priorités absolues.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-divine-gold mb-2">100%</div>
                <p className="text-white">Satisfaction client</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-divine-gold mb-2">24/7</div>
                <p className="text-white">Disponibilité</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-divine-gold mb-2">50</div>
                <p className="text-white">Ans d'expérience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
