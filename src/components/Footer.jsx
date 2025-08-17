import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-divine-dark dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-divine-gold rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">DR</span>
              </div>
              <h3 className="text-xl font-serif font-bold">Divine Rest</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nous accompagnons les familles avec dignité et respect dans les moments difficiles. Notre équipe dévouée est disponible 24h/24, 7j/7 pour vous soutenir.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-divine-gold transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-divine-gold transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-divine-gold transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-divine-gold">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  Catalogue produits
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  Tarifs & Devis
                </Link>
              </li>
              <li>
                <Link to="/espace-memoire" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  Espace Mémoire
                </Link>
              </li>
              <li>
                <Link to="/accompagnement" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  Guide & Conseils
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-divine-gold">Services funéraires</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Organisation d'obsèques</li>
              <li className="text-gray-300 text-sm">Crémation</li>
              <li className="text-gray-300 text-sm">Inhumation</li>
              <li className="text-gray-300 text-sm">Transport international</li>
              <li className="text-gray-300 text-sm">Contrats de prévoyance</li>
              <li className="text-gray-300 text-sm">Démarches administratives</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-divine-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-divine-gold mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Avenue de la Paix<br />
                  75001 Paris, France
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-divine-gold flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-divine-gold flex-shrink-0" />
                <a href="mailto:contact@divinerest.fr" className="text-gray-300 hover:text-divine-gold transition text-sm">
                  contact@divinerest.fr
                </a>
              </div>
            </div>
            <div className="mt-4 p-3 bg-divine-gold bg-opacity-20 rounded-lg">
              <p className="text-sm font-semibold text-divine-gold">Urgence 24h/24 - 7j/7</p>
              <p className="text-xs text-gray-300 mt-1">Nous sommes toujours là pour vous</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Divine Rest. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-divine-gold transition text-sm">
                Mentions légales
              </Link>
              <Link to="/mentions-legales#cgv" className="text-gray-400 hover:text-divine-gold transition text-sm">
                CGV
              </Link>
              <Link to="/mentions-legales#confidentialite" className="text-gray-400 hover:text-divine-gold transition text-sm">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
