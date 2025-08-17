import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCamera, FaBook, FaShare, FaPen, FaUsers, FaLock } from 'react-icons/fa';
import { Flame } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const EspaceMemoire = () => {
  const [activeTab, setActiveTab] = useState('hommages');

  const memorialSpaces = [
    {
      id: 1,
      name: "Jean-Pierre Martin",
      dates: "1945 - 2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      messages: 47,
      photos: 23,
      candles: 156
    },
    {
      id: 2,
      name: "Marie Dubois",
      dates: "1952 - 2024",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      messages: 38,
      photos: 19,
      candles: 98
    },
    {
      id: 3,
      name: "Pierre Lefebvre",
      dates: "1938 - 2023",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400",
      messages: 62,
      photos: 31,
      candles: 203
    }
  ];

  const features = [
    {
      icon: <FaBook />,
      title: "Livre de condoléances",
      description: "Recueillez les messages et témoignages de proches"
    },
    {
      icon: <FaCamera />,
      title: "Album photos",
      description: "Partagez les souvenirs en images"
    },
    {
      icon: <Flame />,
      title: "Bougies virtuelles",
      description: "Allumez une bougie en mémoire du défunt"
    },
    {
      icon: <FaShare />,
      title: "Partage facile",
      description: "Invitez famille et amis par email ou réseaux sociaux"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Espace Mémoire"
        subtitle="Un lieu de recueillement et de partage pour honorer la mémoire de vos proches"
        backgroundImage="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1920"
      />

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif font-bold text-divine-dark mb-6">
              Perpétuez le souvenir de vos proches
            </h2>
            <p className="text-lg text-divine-gray">
              L'Espace Mémoire Divine Rest vous permet de créer un lieu de recueillement numérique 
              où famille et amis peuvent se retrouver pour partager souvenirs, photos et messages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-divine-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-divine-gold bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-divine-gold text-2xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-divine-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-divine-gray text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Spaces */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-4">
              Espaces mémoire récents
            </h2>
            <p className="text-divine-gray">
              Découvrez les hommages rendus à travers notre plateforme
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memorialSpaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-serif font-bold">{space.name}</h3>
                    <p className="text-sm opacity-90">{space.dates}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-divine-gray mb-4">
                    <span className="flex items-center">
                      <FaPen className="mr-1" /> {space.messages} messages
                    </span>
                    <span className="flex items-center">
                      <FaCamera className="mr-1" /> {space.photos} photos
                    </span>
                    <span className="flex items-center">
                      <Flame className="mr-1 w-4 h-4 text-divine-gold" /> {space.candles}
                    </span>
                  </div>
                  
                  <button className="w-full bg-divine-gold text-white py-2 rounded-lg font-medium hover:bg-opacity-90 transition">
                    Visiter l'espace
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Create Memorial */}
      <section className="py-20 bg-gradient-to-r from-divine-dark to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Créez un espace mémoire
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Offrez à vos proches un lieu de recueillement permanent où partager 
              souvenirs et émotions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <FaUsers className="text-divine-gold text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gratuit</h3>
                <p className="text-gray-300 text-sm">
                  Espace basique avec livre de condoléances
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 ring-2 ring-divine-gold">
                <FaHeart className="text-divine-gold text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <p className="text-gray-300 text-sm">
                  Album photos illimité et personnalisation avancée
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <FaLock className="text-divine-gold text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Privé</h3>
                <p className="text-gray-300 text-sm">
                  Accès restreint pour la famille proche uniquement
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-block bg-divine-gold text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition text-lg"
            >
              Créer un espace mémoire
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-4">
              Comment ça fonctionne ?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Création", desc: "Créez l'espace en quelques clics" },
                { step: "2", title: "Personnalisation", desc: "Ajoutez photos et informations" },
                { step: "3", title: "Invitation", desc: "Partagez le lien avec les proches" },
                { step: "4", title: "Partage", desc: "Recueillez messages et souvenirs" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-divine-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-divine-dark mb-2">{item.title}</h3>
                  <p className="text-divine-gray text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <div className="w-full h-px bg-divine-gold opacity-30"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EspaceMemoire;
