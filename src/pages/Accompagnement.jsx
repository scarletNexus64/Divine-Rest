import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFileAlt, FaHeart, FaBook, FaUsers, FaPhone } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Accompagnement = () => {
  const demarches = [
    "Déclaration de décès à la mairie",
    "Obtention du certificat de décès",
    "Contact avec les pompes funèbres",
    "Information à l'employeur",
    "Contact avec les organismes sociaux",
    "Notification aux banques",
    "Résiliation des contrats et abonnements",
    "Déclaration aux assurances",
    "Démarches de succession"
  ];

  const guides = [
    {
      icon: <FaFileAlt />,
      title: "Démarches administratives",
      description: "Guide complet des formalités à accomplir après un décès",
      link: "#demarches"
    },
    {
      icon: <FaBook />,
      title: "Préparer une cérémonie",
      description: "Conseils pour organiser une cérémonie personnalisée",
      link: "#ceremonie"
    },
    {
      icon: <FaHeart />,
      title: "Soutien psychologique",
      description: "Ressources pour traverser le deuil",
      link: "#soutien"
    },
    {
      icon: <FaUsers />,
      title: "Témoignages",
      description: "Expériences partagées par d'autres familles",
      link: "#temoignages"
    }
  ];

  const ceremonies = [
    {
      type: "Cérémonie religieuse",
      description: "Organisation selon les rites et traditions de votre confession"
    },
    {
      type: "Cérémonie civile",
      description: "Hommage laïque personnalisé selon vos souhaits"
    },
    {
      type: "Cérémonie personnalisée",
      description: "Création d'un moment unique reflétant la personnalité du défunt"
    }
  ];

  const supportResources = [
    {
      name: "Association Vivre son Deuil",
      phone: "01 42 38 08 08",
      description: "Écoute et groupes de parole"
    },
    {
      name: "SOS Amitié",
      phone: "09 72 39 40 50",
      description: "Écoute 24h/24, 7j/7"
    },
    {
      name: "Empreintes",
      phone: "01 42 38 54 54",
      description: "Accompagnement des parents en deuil"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Accompagnement & Conseils"
        subtitle="Des ressources pour vous guider dans ces moments difficiles"
        backgroundImage="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920"
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
              Nous sommes là pour vous accompagner
            </h2>
            <p className="text-lg text-divine-gray">
              Perdre un être cher est une épreuve difficile. Au-delà de l'organisation des obsèques, 
              de nombreuses démarches sont à accomplir. Nous avons créé ce guide pour vous accompagner 
              pas à pas dans cette période.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-16 bg-divine-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <motion.a
                key={index}
                href={guide.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-divine-gold bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <div className="text-divine-gold text-2xl">{guide.icon}</div>
                </div>
                <h3 className="text-xl font-serif font-bold text-divine-dark mb-2">
                  {guide.title}
                </h3>
                <p className="text-divine-gray text-sm">
                  {guide.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Démarches administratives */}
      <section id="demarches" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-8 text-center">
              Démarches après décès : Check-list complète
            </h2>
            
            <div className="bg-divine-light rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-bold text-divine-dark mb-6">
                Dans les 24 premières heures
              </h3>
              <div className="space-y-4">
                {demarches.slice(0, 3).map((demarche, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <FaCheckCircle className="text-divine-gold flex-shrink-0 mt-1" />
                    <span className="text-divine-gray">{demarche}</span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-serif font-bold text-divine-dark mb-6 mt-8">
                Dans les jours suivants
              </h3>
              <div className="space-y-4">
                {demarches.slice(3).map((demarche, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <FaCheckCircle className="text-divine-gold flex-shrink-0 mt-1" />
                    <span className="text-divine-gray">{demarche}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-divine-gold bg-opacity-10 rounded-lg">
                <p className="text-sm text-divine-dark">
                  <strong>💡 Conseil :</strong> N'hésitez pas à vous faire accompagner. 
                  Nos conseillers peuvent prendre en charge la plupart de ces démarches pour vous.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Préparer une cérémonie */}
      <section id="ceremonie" className="py-20 bg-divine-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-8 text-center">
              Préparer une cérémonie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {ceremonies.map((ceremony, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-xl font-serif font-bold text-divine-dark mb-3">
                    {ceremony.type}
                  </h3>
                  <p className="text-divine-gray">
                    {ceremony.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-bold text-divine-dark mb-6">
                Éléments pour personnaliser la cérémonie
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-divine-dark mb-3">Musique & Lectures</h4>
                  <ul className="space-y-2 text-divine-gray">
                    <li>• Musiques préférées du défunt</li>
                    <li>• Textes religieux ou spirituels</li>
                    <li>• Poèmes et citations</li>
                    <li>• Témoignages personnels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-divine-dark mb-3">Éléments visuels</h4>
                  <ul className="space-y-2 text-divine-gray">
                    <li>• Photos et vidéos souvenirs</li>
                    <li>• Compositions florales</li>
                    <li>• Objets symboliques</li>
                    <li>• Livre de condoléances</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Soutien psychologique */}
      <section id="soutien" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-serif font-bold text-divine-dark mb-8 text-center">
              Soutien psychologique
            </h2>

            <p className="text-lg text-divine-gray text-center mb-12">
              Le deuil est un processus naturel qui demande du temps. Des ressources sont disponibles pour vous accompagner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-divine-light rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-divine-dark mb-2">
                    {resource.name}
                  </h3>
                  <p className="text-divine-gray mb-3">
                    {resource.description}
                  </p>
                  <a
                    href={`tel:${resource.phone.replace(/\s/g, '')}`}
                    className="flex items-center text-divine-gold font-semibold hover:underline"
                  >
                    <FaPhone className="mr-2" />
                    {resource.phone}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-divine-dark to-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Les étapes du deuil
              </h3>
              <p className="mb-6">
                Le deuil est un processus unique pour chaque personne. Il est normal de ressentir 
                différentes émotions : tristesse, colère, culpabilité, soulagement... Chaque émotion 
                fait partie du chemin vers l'acceptation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {['Choc', 'Déni', 'Colère', 'Négociation', 'Acceptation'].map((stage, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-divine-gold rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm">{stage}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-divine-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-divine-dark mb-4">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-divine-gray mb-8 max-w-2xl mx-auto">
            Nos conseillers sont à votre écoute pour vous guider et vous soutenir dans toutes vos démarches.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-divine-gold text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition"
          >
            Prendre rendez-vous avec un conseiller
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Accompagnement;
